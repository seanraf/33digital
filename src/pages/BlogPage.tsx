
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight } from "lucide-react";

// Ghost content API configuration
const GHOST_URL = "https://demo.ghost.io"; // Replace with your Ghost URL
const GHOST_CONTENT_API_KEY = "22444f78447824223cefc48062"; // Replace with your Content API key
const GHOST_API_VERSION = "v5.0";

type Post = {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image: string | null;
  published_at: string;
  excerpt: string;
  reading_time: number;
};

const fetchPosts = async (): Promise<Post[]> => {
  const url = `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&include=tags,authors&limit=10`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  
  const data = await response.json();
  return data.posts;
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
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchPosts,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-studio">
      <Helmet>
        <title>33 Digital Blog | Work Smarter, Not Harder</title>
        <meta name="description" content="Ideas and insights to help founders work smarter, not harder. Learn from the team at 33 Digital about building products that scale themselves." />
      </Helmet>
      <Navbar />
      <div className="pt-24 pb-8 md:pt-28 md:pb-12">
        <div className="section-container">
          <h1 className="text-center mb-6">Blog</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-10">
            Ideas and insights to help builders Work Smarter, Not Harder.
          </p>
          <Separator className="max-w-md mx-auto bg-gray-800 my-12" />
        </div>
      </div>

      <div className="section-container pb-20">
        {isLoading ? (
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
              Unable to load blog posts. Please try again later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post) => (
              <div 
                key={post.id} 
                className="bg-gray-900 rounded-lg overflow-hidden transform hover:translate-y-[-4px] transition-transform duration-300"
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
                    <span>{post.reading_time} min read</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt || post.title}
                  </p>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover font-medium"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!isLoading && !error && (!posts || posts.length === 0) && (
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
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default BlogPage;
