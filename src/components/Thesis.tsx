
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

interface ThesisPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
}

const ThesisCard = ({ post }: { post: ThesisPost }) => {
  return (
    <div className="bg-studio-muted/10 rounded-lg p-8 border border-gray-800 hover:border-studio-accent/30 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
      <p className="text-gray-300 mb-6">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center text-studio-accent hover:underline"
      >
        Read Full Thesis
      </Link>
      <div className="flex items-center text-gray-500 text-sm mt-3">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{formatDate(post.published_at)}</span>
      </div>
    </div>
  );
};

const Thesis = () => {
  const [thesisPosts, setThesisPosts] = useState<ThesisPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThesisPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('id, title, slug, excerpt, published_at')
          .eq('status', 'published')
          .in('tags.name', ['Thesis'])
          .order('published_at', { ascending: false })
          .limit(3);

        if (error) {
          console.error('Error fetching thesis posts:', error);
          setError('Failed to load thesis posts');
        } else if (data && data.length > 0) {
          setThesisPosts(data);
        } else {
          // Fallback to static data if no posts found
          setThesisPosts([
            {
              id: 1,
              title: "The End of Mass Social",
              slug: "end-of-mass-social",
              excerpt: "Why micro-communities are the future of digital products",
              published_at: "2024-04-15",
            },
            {
              id: 2,
              title: "Building Self-Sustaining Products",
              slug: "self-sustaining-products",
              excerpt: "The key principles behind products that scale themselves",
              published_at: "2024-04-10",
            },
            {
              id: 3,
              title: "Community-First Development",
              slug: "community-first-development",
              excerpt: "How to build products that create genuine engagement",
              published_at: "2024-04-05",
            },
          ]);
        }
      } catch (err) {
        console.error('Error in thesis fetch:', err);
        setError('Something went wrong while loading thesis posts');
        // Fallback to static data
        setThesisPosts([
          {
            id: 1,
            title: "The End of Mass Social",
            slug: "end-of-mass-social",
            excerpt: "Why micro-communities are the future of digital products",
            published_at: "2024-04-15",
          },
          {
            id: 2,
            title: "Building Self-Sustaining Products",
            slug: "self-sustaining-products",
            excerpt: "The key principles behind products that scale themselves",
            published_at: "2024-04-10",
          },
          {
            id: 3,
            title: "Community-First Development",
            slug: "community-first-development",
            excerpt: "How to build products that create genuine engagement",
            published_at: "2024-04-05",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchThesisPosts();
  }, []);

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
          {thesisPosts.map((post) => (
            <ThesisCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thesis;
