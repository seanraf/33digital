
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

// Ghost content API configuration - same as BlogPage
const GHOST_URL = "https://demo.ghost.io"; // Replace with your Ghost URL
const GHOST_CONTENT_API_KEY = "22444f78447824223cefc48062"; // Replace with your Content API key

type Post = {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image: string | null;
  published_at: string;
  reading_time: number;
};

const fetchPost = async (slug: string): Promise<Post> => {
  const url = `${GHOST_URL}/ghost/api/content/posts/slug/${slug}/?key=${GHOST_CONTENT_API_KEY}&include=tags,authors`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  
  const data = await response.json();
  return data.posts[0];
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => fetchPost(slug || ""),
    enabled: !!slug,
  });

  if (!slug) {
    navigate("/blog");
    return null;
  }

  return (
    <div className="min-h-screen bg-studio">
      <Navbar />
      
      <div className="pt-24 pb-8 md:pt-28 md:pb-12">
        <div className="section-container">
          <button 
            onClick={() => navigate("/blog")} 
            className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
          </button>

          {isLoading ? (
            <div>
              <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
              <Skeleton className="h-6 w-48 mx-auto mb-8" />
              <Skeleton className="h-80 w-full mb-12" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-3/4 mb-4" />
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-xl text-red-400">
                Unable to load blog post. Please try again later.
              </p>
            </div>
          ) : post ? (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-center mb-4">{post.title}</h1>
              
              <div className="flex items-center justify-center text-gray-400 mb-12">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{formatDate(post.published_at)}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.reading_time} min read</span>
              </div>
              
              {post.feature_image && (
                <div className="mb-12">
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}

              <Separator className="max-w-xs mx-auto bg-gray-800 mb-12" />
              
              <div 
                className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-studio-accent"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl">Post not found</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
