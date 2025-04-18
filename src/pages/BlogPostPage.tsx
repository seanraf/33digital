
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { supabase } from '@/integrations/supabase/client';

// Define Post interface
interface Post {
  id: number;
  title: string;
  slug: string;
  content?: any;
  html?: string;
  feature_image?: string;
  feature_image_id?: number;
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
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Function to fetch a blog post by slug
    const fetchPost = async () => {
      setLoading(true);
      try {
        // Fetch the post with the matching slug
        const { data: postData, error: postError } = await supabase
          .from('posts')
          .select(`
            id, 
            title, 
            slug, 
            content, 
            feature_image_id,
            published_at,
            reading_time
          `)
          .eq('slug', slug)
          .single();

        if (postError) {
          console.error('Failed to fetch post:', postError);
          setError('Failed to load this blog post');
          setLoading(false);
          return;
        }
        
        // Fetch additional data
        let featureImage = null;
        let primaryTag = null;
        
        // Fetch feature image if it exists
        if (postData.feature_image_id) {
          const { data: imageData } = await supabase
            .from('media')
            .select('url')
            .eq('id', postData.feature_image_id)
            .single();
            
          if (imageData) {
            featureImage = imageData.url;
          }
        }
        
        // Fetch the tag for this post
        const { data: tagData } = await supabase
          .from('posts_rels')
          .select('tags_id')
          .eq('parent_id', postData.id)
          .eq('path', 'tags')
          .limit(1);
          
        if (tagData && tagData.length > 0 && tagData[0].tags_id) {
          const { data: tag } = await supabase
            .from('tags')
            .select('name')
            .eq('id', tagData[0].tags_id)
            .single();
            
          if (tag) {
            primaryTag = {
              name: tag.name,
              slug: tag.name.toLowerCase().replace(/\s+/g, '-')
            };
          }
        }
        
        // Construct the post object
        const fullPost: Post = {
          ...postData,
          feature_image: featureImage,
          html: postData.content ? JSON.stringify(postData.content) : "<p>Content not available</p>",
          primary_tag: primaryTag,
          primary_author: {
            name: "33 Digital Team"
          }
        };
        
        setPost(fullPost);
        
        // Fetch related posts
        fetchRelatedPosts(fullPost);
      } catch (err) {
        console.error('Failed to process post data:', err);
        setError('Failed to load this blog post');
      } finally {
        setLoading(false);
      }
    };
    
    const fetchRelatedPosts = async (currentPost: Post) => {
      try {
        // Get 2 related posts, excluding the current one
        const { data } = await supabase
          .from('posts')
          .select('id, title, slug, excerpt')
          .neq('id', currentPost.id)
          .order('published_at', { ascending: false })
          .limit(2);
          
        if (data) {
          setRelatedPosts(data);
        }
      } catch (err) {
        console.error('Failed to fetch related posts:', err);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Function to render the post content
  const renderPostContent = () => {
    if (!post || !post.html) return null;
    
    let content;
    try {
      // If content is stored as JSON, we'll need to handle it
      if (post.content && typeof post.content === 'object') {
        // This is a simplified version - you might need more complex rendering logic
        // depending on how your content is structured
        content = (
          <div>
            {post.content.html ? (
              <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
            ) : (
              <p>This post has no content yet.</p>
            )}
          </div>
        );
      } else {
        // If it's a string of HTML
        content = <div dangerouslySetInnerHTML={{ __html: post.html }} />;
      }
    } catch (e) {
      console.error('Error rendering post content:', e);
      content = <p>Error displaying post content.</p>;
    }
    
    return content;
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

                  <div className="prose prose-invert prose-lg max-w-none">
                    {renderPostContent()}
                  </div>

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

                {relatedPosts.length > 0 && (
                  <div className="mt-16 pt-8 border-t border-gray-800">
                    <h3 className="text-xl font-bold mb-4">Continue Reading</h3>
                    <div className="grid grid-cols-1 gap-8">
                      {relatedPosts.map(relatedPost => (
                        <Link to={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="block group">
                          <h4 className="text-lg font-medium group-hover:text-studio-accent transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-400 mt-1">{relatedPost.excerpt}</p>
                        </Link>
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
