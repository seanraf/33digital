import type { CollectionConfig } from 'payload'
import { supabase } from '../lib/supabase' // Corrected path

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
    {
      name: 'supabaseId',
      type: 'text',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => { // Reverted _req back to req
        // Ensure data exists before proceeding
        if (!data) {
          console.error('beforeChange hook received undefined data object.');
          return data; // Early exit if data is missing
        }

        if (operation === 'create') {
          // Ensure title is a non-empty string before proceeding
          if (typeof data.title !== 'string' || data.title.length === 0) {
            console.error('Cannot create category in Supabase: Title is missing or invalid.');
            return data; // Prevent Supabase call if title is invalid
          }
          // Calculate slug safely now that title is confirmed string
          const slug = data.slug || data.title.toLowerCase().replace(/\s+/g, '-');

          const { data: supabaseData, error } = await supabase
            .from('categories')
            .insert({
              title: data.title, // Safe to use now
              slug: slug,
            })
            .select('id') // Select only the id

          if (error) {
            console.error('Supabase error creating category:', error)
            // Don't throw here, allow Payload operation but log error
            // throw new Error(`Failed to create category in Supabase: ${error.message}`)
          } else if (supabaseData && supabaseData.length > 0) {
            data.supabaseId = supabaseData[0]?.id
          } else {
             console.error('Supabase error: No ID returned after category creation.')
          }

        } else if (operation === 'update' && data.supabaseId) {
           // Ensure title is valid if present, calculate slug
           let slug = data.slug;
           if (!slug && typeof data.title === 'string' && data.title.length > 0) {
             slug = data.title.toLowerCase().replace(/\s+/g, '-');
           }

           if (!slug) {
             console.error(`Cannot update category in Supabase (supabaseId: ${data.supabaseId}): Valid slug could not be determined.`);
             return data; // Prevent Supabase call if slug is missing
           }

           // Construct update object conditionally
           const updateData: { title?: string; slug: string } = { slug: slug };
           // Use explicit check for title before adding
           if (typeof data.title === 'string' && data.title.length > 0) { // Explicit type and existence check
             // Directive removed as it was unused
             updateData.title = data.title as string; // Use type assertion
           } else {
             // If title is somehow missing or invalid, log a warning
             // but proceed with updating the slug if possible.
             console.warn(`Attempting to update category (supabaseId: ${data.supabaseId}) in Supabase without a title.`);
           }

          const { error } = await supabase
            .from('categories')
            .update(updateData) // Use the conditionally constructed object
            .eq('id', data.supabaseId)

          if (error) {
            console.error('Supabase error updating category:', error)
            // Don't throw here, allow Payload operation but log error
            // throw new Error(`Failed to update category in Supabase: ${error.message}`)
          }
        } else if (operation === 'update' && !data.supabaseId) {
           console.warn(`Cannot update category in Supabase: Missing supabaseId for Payload category ID ${data.id ?? 'UNKNOWN'}`) // Added nullish coalescing for id
        }

        return data; // Return data in all cases
      },
    ],
    afterDelete: [
       async ({ doc }) => {
         if (doc.supabaseId) {
           const { error } = await supabase.from('categories').delete().eq('id', doc.supabaseId)

           if (error) {
             console.error(`Supabase error deleting category with supabaseId ${doc.supabaseId}:`, error)
             // Don't throw here, allow Payload operation but log error
             // throw new Error(`Failed to delete category in Supabase: ${error.message}`)
           }
         } else {
            console.warn(`Cannot delete category from Supabase: Missing supabaseId for deleted Payload category ID ${doc.id}`)
         }
       },
    ],
  },
}
