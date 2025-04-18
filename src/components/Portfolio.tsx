
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  feature_image: string | null;
}

const PortfolioCard = ({ post }: { post: PortfolioItem }) => {
  return (
    <div className="group rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="aspect-video bg-studio-muted/20 rounded-t-lg overflow-hidden">
        {post.feature_image ? (
          <img
            src={post.feature_image}
            alt={`Visual representation of ${post.title}, a 33 Digital portfolio company`}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Coming Soon
          </div>
        )}
      </div>
      <div className="p-6 bg-studio-muted/10 border border-gray-800 rounded-b-lg">
        <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover font-medium"
        >
          See More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('id, title, slug, excerpt, feature_image_id')
          .eq('status', 'published')
          .in('tags.name', ['Portfolio'])
          .order('published_at', { ascending: false });

        if (error) {
          console.error('Error fetching portfolio items:', error);
          setError('Failed to load portfolio items');
        } else if (data && data.length > 0) {
          // For each portfolio item, fetch its feature image
          const portfolioWithImages = await Promise.all(
            data.map(async (item) => {
              if (item.feature_image_id) {
                const { data: imageData } = await supabase
                  .from('media')
                  .select('url')
                  .eq('id', item.feature_image_id)
                  .single();
                
                return {
                  ...item,
                  feature_image: imageData?.url || null
                };
              }
              return {
                ...item,
                feature_image: null
              };
            })
          );
          
          setPortfolioItems(portfolioWithImages);
        } else {
          // Fallback to static data if no posts found
          setPortfolioItems([
            {
              id: 1,
              title: "Project One",
              slug: "project-one",
              excerpt: "Building the future of digital communities",
              feature_image: null
            },
            {
              id: 2,
              title: "Project Two",
              slug: "project-two",
              excerpt: "Revolutionizing how teams collaborate",
              feature_image: null
            },
            {
              id: 3,
              title: "Project Three",
              slug: "project-three",
              excerpt: "Making data accessible to everyone",
              feature_image: null
            }
          ]);
        }
      } catch (err) {
        console.error('Error in portfolio fetch:', err);
        setError('Something went wrong while loading portfolio items');
        // Fallback to static data
        setPortfolioItems([
          {
            id: 1,
            title: "Project One",
            slug: "project-one",
            excerpt: "Building the future of digital communities",
            feature_image: null
          },
          {
            id: 2,
            title: "Project Two",
            slug: "project-two",
            excerpt: "Revolutionizing how teams collaborate",
            feature_image: null
          },
          {
            id: 3,
            title: "Project Three",
            slug: "project-three",
            excerpt: "Making data accessible to everyone",
            feature_image: null
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioItems();
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
          {portfolioItems.length > 0 ? (
            portfolioItems.map((post) => (
              <PortfolioCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-400">More projects coming soon...</p>
            </div>
          )}
        </div>

        {portfolioItems.length > 0 && (
          <div className="text-center mt-12 text-gray-300">
            <p className="text-lg italic">More coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
