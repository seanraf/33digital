
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { supabase } from '@/lib/supabase';

// Define Post interface
interface Post {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image: string | null;
  published_at: string;
  excerpt: string;
  reading_time?: number;
  tags?: string[];
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    const fetchPost = async () => {
      try {
        // Fetch the main post
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          console.error('Error fetching post:', error);
          setError('Failed to load this blog post');
          setPost(null);
        } else if (data) {
          setPost(data);
          
          // Fetch related posts
          const { data: relatedData, error: relatedError } = await supabase
            .from('posts')
            .select('id, title, slug, excerpt')
            .neq('id', data.id)
            .limit(2);
            
          if (relatedError) {
            console.error('Error fetching related posts:', relatedError);
          } else if (relatedData) {
            setRelatedPosts(relatedData);
          }
        } else {
          setError('Blog post not found');
          setPost(null);
        }
      } catch (err) {
        console.error('Failed to fetch post:', err);
        setError('Failed to load this blog post');
      } finally {
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
                      {post.tags && post.tags.length > 0 && (
                        <Badge variant="secondary" className="bg-studio-accent/20 hover:bg-studio-accent/30 text-studio-accent">
                          {post.tags[0]}
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
                </article>

                {relatedPosts.length > 0 && (
                  <div className="mt-16 pt-8 border-t border-gray-800">
                    <h3 className="text-xl font-bold mb-4">Continue Reading</h3>
                    <div className="grid grid-cols-1 gap-8">
                      {relatedPosts.map(related => (
                        <div 
                          key={related.id}
                          className="block group cursor-pointer"
                          onClick={() => navigate(`/blog/${related.slug}`)}
                        >
                          <h4 className="text-lg font-medium group-hover:text-studio-accent transition-colors">
                            {related.title}
                          </h4>
                          <p className="text-gray-400 mt-1">{related.excerpt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
