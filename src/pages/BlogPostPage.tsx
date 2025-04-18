import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { sanityClient, urlFor, Post } from '@/lib/sanityClient'; // Import Sanity client, urlFor, and Post type
import { PortableText } from '@portabletext/react'; // Import PortableText component

// Use Post interface from sanityClient.ts

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null); // Use Sanity Post type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Removed useNavigate as it's not used in this version
  // const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // setLoading(true); // setLoading is handled within fetchSanityPost

    // Function to fetch a blog post by slug from Sanity
    const fetchSanityPost = async () => {
      if (!slug) {
        setError("No post slug provided.");
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]`;
        const params = { slug };
        const result = await sanityClient.fetch<Post>(query, params);

        if (result) {
          setPost(result);
        } else {
          setError("Blog post not found.");
        }
      } catch (err) {
        console.error('Failed to fetch Sanity post:', err);
        setError('Failed to load this blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSanityPost();
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
        {/* Add default social share images */}
        <meta property="og:image" content="/lovable-uploads/33 Digital.png" />
        <meta name="twitter:image" content="/lovable-uploads/33 Digital.png" />
        {/* Optionally, you could make these dynamic based on post.mainImage if available */}
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
                      {/* Display tags if they exist */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                             <Badge key={tag} variant="secondary" className="bg-studio-accent/20 hover:bg-studio-accent/30 text-studio-accent capitalize">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                       <span>
                        {formatDate(post.publishedAt)}
                      </span>
                      {/* Reading time not available from basic schema */}
                    </div>

                    {post.mainImage && ( // Use Sanity mainImage
                      <div className="mb-10">
                        <img
                          src={urlFor(post.mainImage).width(1200).height(600).url()} // Use urlFor
                          alt={`Cover image for ${post.title}`}
                          className="w-full h-auto rounded-lg object-cover"
                          style={{ maxHeight: '500px' }}
                        />
                      </div>
                    )}
                  </header>

                  {/* Render Portable Text content */}
                  {post.body && (
                    <div className="prose prose-invert prose-lg max-w-none">
                       <PortableText value={post.body} />
                    </div>
                  )}

                  {/* Author section removed - not in current Sanity schema */}
                 </article>

                {/* "Continue Reading" section can be updated later if needed */}
                 <div className="mt-16 pt-8 border-t border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Continue Reading</h3>
                  <div className="grid grid-cols-1 gap-8">
                    {/* Placeholder links - replace with dynamic related posts if needed */}
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
