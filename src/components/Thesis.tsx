import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Interface updated to reflect potential Payload API response structure
interface ThesisPost {
  id: string;
  title: string;
  slug: string;
  meta?: { // SEO plugin fields are often nested
    description?: string;
  };
  publishedAt: string; // Renamed from published_at to match Payload convention
  // Add other fields returned by Payload API as needed
}

// Helper function to get excerpt (prioritize meta description)
const getExcerpt = (post: ThesisPost): string => {
  return post.meta?.description || 'No description available.'; // Fallback text
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ThesisCard = ({ post }: { post: ThesisPost }) => {
  const excerpt = getExcerpt(post);
  return (
    <div className="bg-studio-muted/10 rounded-lg p-8 border border-gray-800 hover:border-studio-accent/30 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
      <p className="text-gray-300 mb-6">{excerpt}</p> {/* Use helper function */}
      <Link
        // Assuming blog posts live under /posts/slug now, adjust if needed
        to={`/posts/${post.slug}`}
        className="inline-flex items-center text-studio-accent hover:underline"
      >
        Read Full Thesis
      </Link>
      <div className="flex items-center text-gray-500 text-sm mt-3">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{formatDate(post.publishedAt)}</span> {/* Use renamed field */}
      </div>
    </div>
  );
};

const Thesis = () => {
  const [posts, setPosts] = useState<ThesisPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Static fallback data (kept for robustness)
  const staticPosts = [
    {
      id: "static-1",
      title: "The End of Mass Social",
      slug: "end-of-mass-social",
      meta: { description: "Why micro-communities are the future of digital products" },
      publishedAt: "2024-04-15T00:00:00Z", // Use ISO format for consistency
    },
    {
      id: "static-2",
      title: "Building Self-Sustaining Products",
      slug: "self-sustaining-products",
      meta: { description: "The key principles behind products that scale themselves" },
      publishedAt: "2024-04-10T00:00:00Z",
    },
    {
      id: "static-3",
      title: "Community-First Development",
      slug: "community-first-development",
      meta: { description: "How to build products that create genuine engagement" },
      publishedAt: "2024-04-05T00:00:00Z",
    },
  ];

  useEffect(() => {
    const fetchThesisPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        // 1. Fetch the 'thesis' category ID
        const categoryRes = await fetch('/api/categories?where[slug][equals]=thesis&limit=1&depth=0');
        if (!categoryRes.ok) {
          throw new Error(`Failed to fetch thesis category: ${categoryRes.statusText}`);
        }
        const categoryData = await categoryRes.json();
        const thesisCategoryId = categoryData?.docs?.[0]?.id;

        if (!thesisCategoryId) {
          throw new Error('Thesis category not found.');
        }

        // 2. Fetch posts belonging to the 'thesis' category
        // Using depth=0 as we only need fields directly on the post for the card
        const postsRes = await fetch(`/api/posts?where[categories][contains]=${thesisCategoryId}&sort=-publishedAt&limit=3&depth=0`);
        if (!postsRes.ok) {
          throw new Error(`Failed to fetch thesis posts: ${postsRes.statusText}`);
        }
        const postsData = await postsRes.json();

        if (postsData?.docs && postsData.docs.length > 0) {
          // Map Payload data to ThesisPost interface (already done in previous version, just ensure fields match)
           setPosts(postsData.docs);
        } else {
          console.warn('No thesis posts found from API, using static fallback.');
          setPosts(staticPosts); // Use static data if API returns empty
        }
      } catch (err: any) {
        console.error('Error fetching thesis posts from Payload:', err);
        setError(err.message || 'An unexpected error occurred');
        setPosts(staticPosts); // Use static data on error
      } finally {
        setLoading(false);
      }
    };

    fetchThesisPosts();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section id="thesis" className="py-24 bg-gradient-to-b from-studio-muted/5 to-studio">
      <div className="section-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Thesis</h2>
          <p className="text-lg text-gray-300">
            33 Digital is a thesis-driven venture and product studio.
            We invest sweat equity, expertise, and hands-on leadership into companies
            that match our worldview. We work with founders building products that
            sell themselves — businesses designed for compounding growth, not brute force.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {loading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={`skeleton-${index}`} className="bg-studio-muted/10 rounded-lg p-8 border border-gray-800">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-20 w-full mb-6" />
                <Skeleton className="h-6 w-1/3" />
                <div className="flex items-center mt-3">
                  <Skeleton className="h-4 w-4 mr-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))
          ) : error && posts.length === 0 ? ( // Only show error if API failed AND no fallback exists (though fallback is always set now)
            <div className="col-span-3 text-center py-10">
              <p className="text-red-400 mb-4">{error}</p>
              <p>Displaying fallback content.</p>
              {staticPosts.map((post) => ( // Render static posts if API fails
                 <ThesisCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            posts.map((post) => (
              <ThesisCard key={post.id} post={post} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Thesis;
