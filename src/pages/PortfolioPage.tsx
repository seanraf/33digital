
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
// import Portfolio from '@/components/Portfolio'; // Will be replaced or modified
// import Thesis from '@/components/Thesis'; // Will be replaced or modified
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ArrowRight } from 'lucide-react'; // Import icon for link
import Footer from '@/components/Footer';
import { sanityClient, Post } from '@/lib/sanityClient'; // Import Sanity client and Post type

// Removed generateExcerpt helper function

const PortfolioPage = () => {
  const [portfolioPosts, setPortfolioPosts] = useState<Post[]>([]);
  const [thesisPosts, setThesisPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Update queries to select excerpt field
        const portfolioQuery = `*[_type == "post" && "portfolio" in tags[]] | order(publishedAt desc) {
          _id, title, slug, excerpt, mainImage
        }`;
        const thesisQuery = `*[_type == "post" && "thesis" in tags[]] | order(publishedAt desc) {
           _id, title, slug, excerpt, mainImage
        }`;

        const [portfolioResult, thesisResult] = await Promise.all([
          sanityClient.fetch<Post[]>(portfolioQuery),
          sanityClient.fetch<Post[]>(thesisQuery),
        ]);

        setPortfolioPosts(portfolioResult);
        setThesisPosts(thesisResult);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setError("Failed to load content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-studio pt-24">
      <Helmet>
        <title>Our Work & Worldview | 33 Digital Portfolio & Venture Thesis</title>
        <meta name="description" content="Explore 33 Digital's portfolio and venture thesis. We back founders building AI-powered, community-first, and game-like digital products." />
        <meta property="og:image" content="/lovable-uploads/33 Digital.png" />
        <meta name="twitter:image" content="/lovable-uploads/33 Digital.png" />
      </Helmet>
      <Navbar />
      <div className="pt-36 pb-8 md:pt-44 md:pb-12">
        <div className="section-container">
          <h1 className="text-center mb-6">Our Work and Worldview</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-10">
            We don't just build apps. We build businesses that scale themselves.
            See how our thesis shapes the companies we support, and meet the founders we've bet on.
          </p>
        </div>
      </div>

      {/* Thesis Section */}
      <div className="section-container py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Venture Thesis</h2>
        {loading && <p className="text-center">Loading thesis posts...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {thesisPosts.length > 0 ? (
              thesisPosts.map((post) => ( // Removed extra parenthesis here
                  <div key={post._id} className="bg-gray-900 p-6 rounded-lg shadow border border-gray-800 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm flex-grow">{post.excerpt || 'No excerpt available.'}</p>
                    <Link
                      to={`/blog/${post.slug?.current}`} // Link to the full post
                      className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover font-medium text-sm mt-auto"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
              )) // Moved closing parenthesis here
            ) : (
              <p className="text-center col-span-full">No thesis posts found.</p>
            )}
          </div>
        )}
      </div>

      {/* Portfolio Section */}
      <div className="section-container py-12">
         <h2 className="text-3xl font-bold text-center mb-8">Portfolio Work</h2>
        {loading && <p className="text-center">Loading portfolio posts...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
         {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioPosts.length > 0 ? (
              portfolioPosts.map((post) => ( // Removed extra parenthesis here
                   <div key={post._id} className="bg-gray-900 p-6 rounded-lg shadow border border-gray-800 flex flex-col">
                     <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                     <p className="text-gray-400 mb-4 text-sm flex-grow">{post.excerpt || 'No excerpt available.'}</p>
                     <Link
                       to={`/blog/${post.slug?.current}`} // Link to the full post
                       className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover font-medium text-sm mt-auto"
                     >
                       Read More <ArrowRight className="ml-1 h-4 w-4" />
                     </Link>
                   </div>
               )) // Moved closing parenthesis here
            ) : (
              <p className="text-center col-span-full">No portfolio posts found.</p>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
