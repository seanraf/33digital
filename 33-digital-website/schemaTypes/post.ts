import {defineField, defineType} from 'sanity'
import CenterAlignIcon from '../../src/components/icons/CenterAlignIcon'; // Placeholder import
import LeftAlignIcon from '../../src/components/icons/LeftAlignIcon'; // Placeholder import
import RightAlignIcon from '../../src/components/icons/RightAlignIcon'; // Placeholder import
import { TextAlign } from '../../src/components/Sanity/TextAlign'; // Placeholder import

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A short summary of the post, used in previews.',
      validation: (Rule) => Rule.max(200).warning('Excerpt should ideally be concise.'),
    }),
    defineField({
      name: 'bannerImage', // Renamed from mainImage
      title: 'Banner image', // Updated title
      type: 'image',
      description: 'Large image displayed at the top of the post page.',
      options: {
        hotspot: true,
      },
    }),
    defineField({ // Added new thumbnail image field
      name: 'thumbnailImage',
      title: 'Thumbnail image',
      type: 'image',
      description: 'Smaller image used for previews on listing pages (e.g., Blog, Portfolio). Recommended 4:3 aspect ratio.',
      options: {
        hotspot: true,
      },
    }),
     defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags' // Use tags input component in the Studio
      },
      description: 'Add relevant tags (e.g., "portfolio", "thesis", "blog", "technology").'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array', // Using array type for Portable Text
       of: [
        {
          type: 'block', // Standard block type for paragraphs, headings, etc.
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Numbered', value: 'number'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              {title: 'Left', value: 'left', icon: LeftAlignIcon, component: TextAlign},
              {title: 'Center', value: 'center', icon: CenterAlignIcon, component: TextAlign},
              {title: 'Right', value: 'right', icon: RightAlignIcon, component: TextAlign},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image', // Allow images within the body
          options: {hotspot: true},
        },
        {
          type: 'code', // Allow code blocks
          options: {
             languageAlternatives: [ // Optional: provide language options
              {title: 'JavaScript', value: 'javascript'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'Python', value: 'python'},
              {title: 'TypeScript', value: 'typescript'},
            ]
          }
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'bannerImage', // Updated preview to use bannerImage
    },
  },
})
