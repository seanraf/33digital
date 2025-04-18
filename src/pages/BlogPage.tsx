
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from "@/components/ui/pagination";

interface Post {
  id: string;
  title: string;
  slug: string;
  html?: string;
  feature_image: string | null;
  published_at: string;
  excerpt: string;
  reading_time?: number;
  tags?: string[];
}

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
  const postsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Get total count first for pagination
        const { count, error: countError } = await supabase
          .from('posts')
          .select('id', { count: 'exact' });
          
        if (countError) {
          console.error('Error getting post count:', countError);
        } else if (count) {
          setTotalPages(Math.ceil(count / postsPerPage));
        }

        // Then fetch the actual posts with pagination
        const from = (currentPage - 1) * postsPerPage;
        const to = from + postsPerPage - 1;

        const { data, error: postsError } = await supabase
          .from('posts')
          .select('id, title, slug, excerpt, feature_image, published_at, reading_time, tags')
          .order('published_at', { ascending: false })
          .range(from, to);

        if (postsError) {
          console.error('Error fetching blog posts:', postsError);
          setError('Failed to load blog posts');
          setPosts([]);
        } else if (data && data.length > 0) {
          setPosts(data);
        } else {
          setPosts([]);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-studio pt-24">
      <Helmet>
        <title>33 Digital Blog | Work Smarter, Not Harder</title>
        <meta name="description" content="Ideas and insights to help founders work smarter, not harder. Learn from the team at 33 Digital about building products that scale themselves." />
        <meta property="og:image" content="/lovable-uploads/33 Digital.png" />
        <meta name="twitter:image" content="/lovable-uploads/33 Digital.png" />
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
            {[...Array(6)].map((_, index) => (
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
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-gray-900 rounded-lg overflow-hidden transform hover:translate-y-[-4px] transition-transform duration-300 cursor-pointer"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                {post.feature_image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.feature_image} 
                      alt={`Visual representation of ${post.title}`}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(post.published_at)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.reading_time || 5} min read</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div 
                    className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover font-medium"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
            <p className="text-gray-300 mb-8">We're working on great content. Check back soon for articles on:</p>
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
