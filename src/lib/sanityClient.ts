
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Check for environment variables, fallback to defaults if not set
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'kmyx8122'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-04-18' // Use current date or your preferred API version

if (!projectId) {
  throw new Error("The environment variable VITE_SANITY_PROJECT_ID is missing!")
}
if (!dataset) {
  throw new Error("The environment variable VITE_SANITY_DATASET is missing!")
}

export const sanityClient = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion, // use a UTC date string
  useCdn: false, // Set to false for local development to bypass CDN cache
})

// Helper function for generating image URLs with only the asset reference data in your documents.
// Read more: https://www.sanity.io/docs/image-url
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Define interfaces for your fetched data
export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  bannerImage?: SanityImageSource; 
  thumbnailImage?: SanityImageSource;
  tags?: string[];
  excerpt?: string;
  publishedAt?: string;
  body: any[]; // Includes blocks, markDefs for links, etc.
  externalUrl?: string; // Optional field for storing external URLs
}
