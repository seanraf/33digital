import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
// import Portfolio from '@/components/Portfolio'; // Will be replaced or modified
// import Thesis from '@/components/Thesis'; // Will be replaced or modified
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ArrowRight } from 'lucide-react'; // Import icon for link
import Footer from '@/components/Footer';
import { sanityClient, Post, urlFor } from '@/lib/sanityClient'; // Import Sanity client, Post type, and urlFor
import { PortableText, PortableTextReactComponents, PortableTextComponentProps, PortableTextBlock } from '@portabletext/react'; // Import PortableText component and types

// Removed generateExcerpt helper function

const FriendsOfSeanPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const postQuery = `*[_type == "post" && "friendsofsean" in tags[]][0] {
          _id, title, slug, body
        }`;

        const result = await sanityClient.fetch<Post>(postQuery);

        setPost(result);
      } catch (err) {
        console.error("Failed to fetch post:", err);
        setError("Failed to load content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  const components: Partial<PortableTextReactComponents> = {
    block: {
      // Customize block types, e.g., paragraphs
      normal: ({ children, value }: PortableTextComponentProps<PortableTextBlock>) => {
        // Check for alignment marks or styles in Sanity data
        const style = value.style || 'normal';
        let textAlignClass = 'text-left'; // Default alignment

        if (style === 'text-center') {
          textAlignClass = 'text-center';
        } else if (style === 'text-right') {
          textAlignClass = 'text-right';
        }
        // Add more conditions for other potential alignment styles if needed

        return <p className={`${textAlignClass}`}>{children}</p>;
      },
      // Add custom rendering for other block types like h1, h2, blockquote, etc.
      // h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
      // blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
    },
    // Add custom rendering for mark types (e.g., bold, italic), image, list, etc.
    // markDefs: {
    //   link: ({children, value}) => {
    //     const rel = value.href.startsWith('/') ? 'internal' : 'noreferrer noopener'
    //     return (
    //       <Link href={value.href} rel={rel}>
    //         {children}
    //       </Link>
    //     )
    //   },
    // },
  };

  return (
    <div className="min-h-screen bg-studio pt-24">
      <Helmet>
        <title>Friends of Sean | 33 Digital</title>
        <meta name="description" content="Perks, partners, and trusted services from Sean Raftery and 33 Digital." />
        <meta property="og:image" content="/lovable-uploads/33 Digital.png" />
        <meta name="twitter:image" content="/lovable-uploads/33 Digital.png" />
      </Helmet>
      <Navbar />
      <div className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Friends of Sean</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            Perks, partners, and trusted services. Just for you.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="section-container py-12">
        {loading && <p className="text-center">Loading content...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {post && (
          <div className="prose prose-invert prose-lg max-w-3xl mx-auto"> {/* Adjust max-width here if needed */}
            <PortableText value={post.body} components={components} />
          </div>
        )}
        {!loading && !error && !post && (
          <p className="text-center">Blog post not found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FriendsOfSeanPage;
