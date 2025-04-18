
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Skeleton } from "@/components/ui/skeleton";

interface PortfolioPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  feature_image: string | null;
}

const PortfolioCard = ({ post }: { post: PortfolioPost }) => {
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
  const [posts, setPosts] = useState<PortfolioPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Static fallback data
  const staticPosts = [
    {
      id: "1",
      title: "Project One",
      slug: "project-one",
      excerpt: "Building the future of digital communities",
      feature_image: null
    },
    {
      id: "2",
      title: "Project Two",
      slug: "project-two",
      excerpt: "Revolutionizing how teams collaborate",
      feature_image: null
    },
    {
      id: "3",
      title: "Project Three",
      slug: "project-three",
      excerpt: "Making data accessible to everyone",
      feature_image: null
    }
  ];

  useEffect(() => {
    const fetchPortfolioPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('id, title, slug, excerpt, feature_image')
          .contains('tags', ['portfolio'])
          .order('published_at', { ascending: false })
          .limit(3);

        if (error) {
          console.error('Error fetching portfolio posts:', error);
          setError('Failed to load portfolio posts');
          setPosts(staticPosts);
        } else if (data && data.length > 0) {
          setPosts(data);
        } else {
          setPosts(staticPosts);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setPosts(staticPosts);
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
              <p>Displaying fallback content</p>
            </div>
          ) : (
            posts.map((post) => (
              <PortfolioCard key={post.id} post={post} />
            ))
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
