import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
// Removed Supabase import
import { Skeleton } from "@/components/ui/skeleton";

// Interface updated to reflect potential Payload API response structure
interface PortfolioPost {
  id: string;
  title: string;
  slug: string;
  meta?: { // SEO plugin fields are often nested
    description?: string;
  };
  heroImage?: { // Assuming 'heroImage' is the field name in Payload Posts collection
    url?: string; // The actual image URL might be nested
    alt?: string;
  };
  // Add other fields returned by Payload API as needed
}

// Helper function to get excerpt (prioritize meta description)
const getExcerpt = (post: PortfolioPost): string => {
  return post.meta?.description || 'No description available.'; // Fallback text
};

// Helper function to get image URL
const getImageUrl = (post: PortfolioPost): string | null => {
  // Adjust based on how your Media collection and URLs are structured
  // This assumes a simple 'url' property on the populated heroImage object
  return post.heroImage?.url || null;
};

const PortfolioCard = ({ post }: { post: PortfolioPost }) => {
  const imageUrl = getImageUrl(post);
  const excerpt = getExcerpt(post);

  return (
    <div className="group rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="aspect-video bg-studio-muted/20 rounded-t-lg overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl} // Use helper function
            alt={post.heroImage?.alt || `Visual representation of ${post.title}`} // Use alt text from Payload if available
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Image Coming Soon
          </div>
        )}
      </div>
      <div className="p-6 bg-studio-muted/10 border border-gray-800 rounded-b-lg">
        <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
        <p className="text-gray-300 mb-4">{excerpt}</p> {/* Use helper function */}
        <Link
          // Assuming blog posts live under /posts/slug now, adjust if needed
          to={`/posts/${post.slug}`}
          className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover font-medium"
        >
          See More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [posts, setPosts] = useState<PortfolioPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolioPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        // 1. Fetch the 'portfolio' category ID
        const categoryRes = await fetch('/api/categories?where[slug][equals]=portfolio&limit=1&depth=0');
        if (!categoryRes.ok) {
          throw new Error(`Failed to fetch portfolio category: ${categoryRes.statusText}`);
        }
        const categoryData = await categoryRes.json();
        const portfolioCategoryId = categoryData?.docs?.[0]?.id;

        if (!portfolioCategoryId) {
          throw new Error('Portfolio category not found.');
        }

        // 2. Fetch posts belonging to the 'portfolio' category
        // Added depth=1 to populate heroImage relation
        const postsRes = await fetch(`/api/posts?where[categories][contains]=${portfolioCategoryId}&sort=-publishedAt&limit=3&depth=1`);
        if (!postsRes.ok) {
          throw new Error(`Failed to fetch portfolio posts: ${postsRes.statusText}`);
        }
        const postsData = await postsRes.json();

        if (postsData?.docs) {
          setPosts(postsData.docs);
        } else {
          setPosts([]);
        }

      } catch (err: any) {
        console.error('Error fetching portfolio posts from Payload:', err);
        setError(err.message || 'An unexpected error occurred');
        setPosts([]); // Clear posts on error
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioPosts();
  }, []);

  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Portfolio</h2>
          <p className="text-lg text-gray-300 text-center mb-10">
            We're proud to partner with founders who share our values and build products that align with our thesis.
            Here's a look at what we've been working on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {loading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={`skeleton-${index}`} className="rounded-lg overflow-hidden">
                <Skeleton className="aspect-video rounded-t-lg" />
                <div className="p-6 rounded-b-lg bg-studio-muted/10 border border-gray-800">
                  <Skeleton className="h-8 w-3/4 mb-3" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <Skeleton className="h-6 w-28" />
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-3 text-center py-10">
              <p className="text-red-400 mb-4">{error}</p>
            </div>
          ) : posts.length > 0 ? (
             posts.map((post) => (
              <PortfolioCard key={post.id} post={post} />
            ))
          ) : (
             <div className="col-span-3 text-center py-10">
               <p className="text-gray-400">No portfolio items found.</p>
             </div>
          )}
        </div>

        <div className="text-center mt-12 text-gray-300">
          <p className="text-lg italic">More coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
