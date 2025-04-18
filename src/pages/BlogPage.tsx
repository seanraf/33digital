import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight } from "lucide-react";
// Removed Supabase import
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

// Interface updated to reflect potential Payload API response structure
interface Post {
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
  publishedAt: string; // Renamed from published_at
  // excerpt?: string; // Payload might return excerpt in meta.description
  reading_time?: number; // Assuming this field exists in Payload or needs calculation
  // tags?: string[]; // Replaced by categories relationship
  categories?: { id: string; title: string }[]; // Populated categories
}

// Helper function to get excerpt (prioritize meta description)
const getExcerpt = (post: Post): string => {
  return post.meta?.description || 'No description available.'; // Fallback text
};

// Helper function to get image URL
const getImageUrl = (post: Post): string | null => {
  return post.heroImage?.url || null;
};


const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const postsPerPage = 6; // Use this for the 'limit' parameter
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        // 1. Fetch IDs for 'portfolio' and 'thesis' categories
        const categoryRes = await fetch('/api/categories?where[or][0][slug][equals]=portfolio&where[or][1][slug][equals]=thesis&limit=2&depth=0');
        if (!categoryRes.ok) {
          throw new Error(`Failed to fetch categories: ${categoryRes.statusText}`);
        }
        const categoryData = await categoryRes.json();
        const excludedCategoryIds = categoryData?.docs?.map((cat: { id: string }) => cat.id) || [];

        if (excludedCategoryIds.length === 0) {
          console.warn('Could not find portfolio or thesis categories to exclude.');
          // Proceed without exclusion if categories not found, or handle as error if required
        }

        // 2. Fetch blog posts, excluding those in the fetched categories
        // Construct the query string
        let apiUrl = `/api/posts?sort=-publishedAt&limit=${postsPerPage}&page=${currentPage}&depth=1`; // depth=1 to populate heroImage
        if (excludedCategoryIds.length > 0) {
          apiUrl += `&where[categories][not_in]=${excludedCategoryIds.join(',')}`;
        }

        const postsRes = await fetch(apiUrl);
        if (!postsRes.ok) {
          throw new Error(`Failed to fetch blog posts: ${postsRes.statusText}`);
        }
        const postsData = await postsRes.json();

        if (postsData?.docs) {
          setPosts(postsData.docs);
          setTotalPages(postsData.totalPages || 1); // Get total pages from Payload response
        } else {
          setPosts([]);
          setTotalPages(1);
        }
      } catch (err: any) {
        console.error('Error fetching blog posts from Payload:', err);
        setError(err.message || 'An unexpected error occurred');
        setPosts([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]); // Re-fetch when currentPage changes

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // No need for manual scroll here if useEffect handles it based on currentPage change
  };

  return (
    <div className="min-h-screen bg-studio pt-24">
      <Helmet>
        <title>33 Digital Blog | Work Smarter, Not Harder</title>
        <meta name="description" content="Ideas and insights to help founders work smarter, not harder. Learn from the team at 33 Digital about building products that scale themselves." />
        <meta property="og:image" content="/lovable-uploads/33 Digital.png" /> {/* Consider making this dynamic */}
        <meta name="twitter:image" content="/lovable-uploads/33 Digital.png" /> {/* Consider making this dynamic */}
      </Helmet>
      <Navbar />
      <div className="pt-36 pb-8 md:pt-44 md:pb-12">
        <div className="section-container">
          <h1 className="text-center mb-6">Blog</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-10">
            Ideas and insights to help builders Work Smarter, Not Harder.
          </p>
          <Separator className="max-w-md mx-auto bg-gray-800 my-12" />
        </div>
      </div>

      <div className="section-container pb-20">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(postsPerPage)].map((_, index) => ( // Use postsPerPage for skeletons
              <div key={index} className="flex flex-col">
                <Skeleton className="h-56 w-full mb-4" />
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-xl text-red-400">
              {error}
            </p>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const imageUrl = getImageUrl(post);
              const excerpt = getExcerpt(post);
              return (
                <div
                  key={post.id}
                  className="bg-gray-900 rounded-lg overflow-hidden transform hover:translate-y-[-4px] transition-transform duration-300 cursor-pointer"
                  onClick={() => navigate(`/posts/${post.slug}`)} // Navigate to /posts/:slug
                >
                  {imageUrl && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={post.heroImage?.alt || `Visual representation of ${post.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(post.publishedAt)}</span>
                      {post.reading_time && ( // Conditionally render reading time
                        <>
                          <span className="mx-2">•</span>
                          <span>{post.reading_time} min read</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {excerpt}
                    </p>
                    <div
                      className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover font-medium"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center">
             <h3 className="text-2xl font-bold mb-4">No Blog Posts Yet</h3>
             <p className="text-gray-300 mb-8">Check back soon for articles!</p>
             {/* Keep the list if desired */}
             <ul className="max-w-lg mx-auto text-left list-disc pl-8 space-y-3 text-gray-300">
               <li>The End of Mass Social and the Rise of Micro-Communities</li>
               <li>AI for Founders: Build Smarter, Not Harder</li>
               <li>Gamification is Dead. Long Live the Game.</li>
               <li>Why Product-Led Growth Beats Growth Hacking Every Time</li>
               <li>The 33 Digital Playbook: Building Self-Sustaining Startups</li>
             </ul>
          </div>
        )}

        {posts.length > 0 && totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                </PaginationItem>
              )}

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
