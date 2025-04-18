import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight } from "lucide-react";
import { sanityClient, urlFor, Post } from '@/lib/sanityClient'; // Import Sanity client, urlFor, and Post type

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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchSanityPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch posts that are NOT tagged 'portfolio' AND NOT tagged 'thesis'
        const query = `*[_type == "post" && !("portfolio" in tags) && !("thesis" in tags)] | order(publishedAt desc) {
          _id,
          title,
          slug,
          mainImage,
          publishedAt,
          tags,
          body // Fetch body if needed for excerpt later
        }`;
        const result = await sanityClient.fetch<Post[]>(query);
        setPosts(result);
      } catch (err) {
        console.error("Failed to fetch Sanity posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSanityPosts();
  }, []);

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
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => ( // Assuming 6 skeletons is fine
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
                key={post._id} // Use Sanity's _id
                className="bg-gray-900 rounded-lg overflow-hidden transform hover:translate-y-[-4px] transition-transform duration-300"
              >
                {post.mainImage && ( // Use Sanity's mainImage
                  <div className="h-48 overflow-hidden">
                    <img
                      src={urlFor(post.mainImage).width(400).height(300).url()} // Use urlFor helper
                      alt={`Visual representation of ${post.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(post.publishedAt)}</span> {/* Use Sanity's publishedAt */}
                    {/* Reading time removed - not in current Sanity schema */}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                  {/* Excerpt removed - requires Portable Text handling or schema change */}
                  {/* <p className="text-gray-300 mb-4 line-clamp-3">...</p> */}
                  <a
                    href={`/blog/${post.slug.current}`} // Use Sanity's slug.current
                    className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover font-medium"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
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
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
