
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

// Define Post interface
interface Post {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image?: string;
  published_at: string;
  primary_tag?: {
    name: string;
    slug: string;
  };
  primary_author?: {
    name: string;
    profile_image?: string;
  };
  reading_time?: number;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Function to fetch a blog post by slug
    const fetchPost = async () => {
      setLoading(true);
      try {
        // For demo purposes, we'll simulate a post
        const demoPost: Post = {
          id: '1',
          title: 'The End of Mass Social and the Rise of Micro-Communities',
          slug: slug || 'demo-post',
          html: `<p>This is a sample blog post content. In a real implementation, this would be fetched from your Ghost CMS instance.</p>
          <h2>Why micro-communities matter</h2>
          <p>As social media platforms have become increasingly saturated with content, people are seeking more authentic, meaningful connections in smaller, more focused communities.</p>
          <p>These micro-communities offer several advantages:</p>
          <ul>
            <li>More authentic engagement</li>
            <li>Higher trust between members</li>
            <li>Better signal-to-noise ratio</li>
            <li>Stronger sense of belonging</li>
          </ul>
          <p>For founders, this shift represents both a challenge and an opportunity. Building products that facilitate these kinds of communities requires a different approach to design and growth.</p>`,
          published_at: '2023-05-15T10:00:00.000Z',
          primary_tag: {
            name: 'Strategy',
            slug: 'strategy'
          },
          primary_author: {
            name: 'Sean',
            profile_image: 'https://via.placeholder.com/150'
          },
          reading_time: 5,
          feature_image: 'https://via.placeholder.com/1200x600'
        };

        // Set post data
        setTimeout(() => {
          setPost(demoPost);
          setLoading(false);
        }, 800);

      } catch (err) {
        console.error('Failed to fetch post:', err);
        setError('Failed to load this blog post');
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-studio">
      <Helmet>
        <title>{post ? `${post.title} | 33 Digital Blog` : 'Blog Post | 33 Digital'}</title>
        <meta name="description" content={post ? `${post.title} - Read our insights on this topic` : 'Read insights from 33 Digital on building products that scale themselves'} />
      </Helmet>
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to blog
              </Button>
            </Link>

            {loading ? (
              <div className="space-y-6">
                <Skeleton className="h-12 w-3/4" />
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-72 w-full" />
                <div className="space-y-4">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-5/6" />
                  <Skeleton className="h-6 w-4/6" />
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-2xl text-gray-300 mb-6">{error}</p>
                <Link to="/blog" className="btn-primary">
                  Return to Blog
                </Link>
              </div>
            ) : post ? (
              <>
                <article>
                  <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
                      {post.primary_tag && (
                        <Badge variant="secondary" className="bg-studio-accent/20 hover:bg-studio-accent/30 text-studio-accent">
                          {post.primary_tag.name}
                        </Badge>
                      )}
                      <span>
                        {formatDate(post.published_at)}
                      </span>
                      {post.reading_time && (
                        <span>{post.reading_time} min read</span>
                      )}
                    </div>
                    
                    {post.feature_image && (
                      <div className="mb-10">
                        <img 
                          src={post.feature_image} 
                          alt={`Cover image for ${post.title}`} 
                          className="w-full h-auto rounded-lg object-cover" 
                          style={{ maxHeight: '500px' }}
                        />
                      </div>
                    )}
                  </header>

                  <div 
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />

                  {post.primary_author && (
                    <div className="mt-16 pt-8 border-t border-gray-800">
                      <div className="flex items-center gap-4">
                        {post.primary_author.profile_image && (
                          <img 
                            src={post.primary_author.profile_image} 
                            alt={`${post.primary_author.name}'s profile`} 
                            className="w-12 h-12 rounded-full"
                          />
                        )}
                        <div>
                          <div className="text-sm text-gray-400">Written by</div>
                          <div className="font-medium">{post.primary_author.name}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>

                <div className="mt-16 pt-8 border-t border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Continue Reading</h3>
                  <div className="grid grid-cols-1 gap-8">
                    <Link to="/blog/sample-post-1" className="block group">
                      <h4 className="text-lg font-medium group-hover:text-studio-accent transition-colors">
                        AI for Founders: Build Smarter, Not Harder
                      </h4>
                      <p className="text-gray-400 mt-1">How early-stage founders can leverage AI to create unfair advantages</p>
                    </Link>
                    <Link to="/blog/sample-post-2" className="block group">
                      <h4 className="text-lg font-medium group-hover:text-studio-accent transition-colors">
                        Gamification is Dead. Long Live the Game.
                      </h4>
                      <p className="text-gray-400 mt-1">Why product-led growth requires deep understanding of genuine motivation</p>
                    </Link>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
