
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react'; // Import ExternalLink icon
import { sanityClient, Post, urlFor } from '@/lib/sanityClient';
import { PortableText, PortableTextReactComponents, PortableTextComponentProps, PortableTextBlock } from '@portabletext/react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FriendsOfSeanPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [growthPartners, setGrowthPartners] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchContent = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch the main Friends of Sean content
        const postQuery = `*[_type == "post" && "friendsofsean" in tags[]]{
          _id, title, slug, body
        }[0]`;
        
        // Fetch posts tagged with "growthpartner"
        const partnersQuery = `*[_type == "post" && "growthpartner" in tags[]]{
          _id, title, slug, body, thumbnailImage, excerpt
        } | order(publishedAt desc)`;
        
        const [mainPost, partnersData] = await Promise.all([
          sanityClient.fetch<Post>(postQuery),
          sanityClient.fetch<Post[]>(partnersQuery),
        ]);

        setPost(mainPost);
        setGrowthPartners(partnersData);
      } catch (err) {
        console.error("Failed to fetch content:", err);
        setError("Failed to load content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  // Function to extract URL from post body
  const extractExternalUrl = (body: any[]) => {
    if (!body || !Array.isArray(body)) return null;
    
    // Look for a link in the body content
    for (const block of body) {
      if (block._type === 'block' && block.children) {
        for (const child of block.children) {
          if (child.marks && child.marks.length > 0) {
            for (const mark of child.marks) {
              const markDef = block.markDefs?.find((def: any) => def._key === mark);
              if (markDef && markDef._type === 'link' && markDef.href) {
                return markDef.href;
              }
            }
          }
        }
      }
    }
    return null;
  };

  const components: Partial<PortableTextReactComponents> = {
    block: {
      // Style different block types
      normal: ({ children, value }: PortableTextComponentProps<PortableTextBlock>) => {
        const style = value.style || 'normal';
        let textAlignClass = 'text-left'; // Default alignment

        if (style === 'text-center') {
          textAlignClass = 'text-center';
        } else if (style === 'text-right') {
          textAlignClass = 'text-right';
        }

        return <p className={`mb-4 ${textAlignClass}`}>{children}</p>;
      },
      h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
      ),
      h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
      ),
      h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>
      ),
      h4: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>
      ),
      blockquote: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <blockquote className="border-l-4 border-gray-500 pl-4 my-4">{children}</blockquote>
      )
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => <code className="bg-gray-800 text-white px-1 py-0.5 rounded">{children}</code>
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>
    }
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
      
      {/* Header Section */}
      <div className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Friends of Sean</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            Perks, partners, and trusted services. Just for you.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="section-container py-12">
        <div className="prose prose-invert prose-lg max-w-3xl mx-auto">
          <p>Over the years, I've worked with dozens of founders and operators who needed trusted help across product, design, engineering, and growth but didn't know where to turn. This page is my way of making those trusted connections more accessible.</p>
          <p>Below you'll find vetted services offered either by me or close collaborators, folks I've personally worked with and can vouch for. If you're building something and need backup, this is a great place to start.</p>
        </div>
      </div>
      
      {/* Engineering & Design Staffing Section */}
      <div className="section-container py-12 bg-studio-muted/5 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Engineering & Design Staffing</h2>
          <p className="text-xl text-gray-300 mb-6 text-center">Startup-ready talent trained the 33 Digital way.</p>
          
          <div className="prose prose-invert prose-lg mb-8">
            <p>I work with a trusted offshore talent network I've spent over a decade building. These are engineers and designers I've led directly on startup builds. They move fast, think smart, and understand how to work with lean teams. Every person on this list has been trained in 33 Digital's systems and approach.</p>
          </div>
          
          <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Rates</h3>
            <ul className="space-y-3">
              <li className="flex justify-between"><span>Landing Pages / Marketing Sites</span> <span className="font-semibold">$10,000 flat</span></li>
              <li className="flex justify-between"><span>Lead Engineer</span> <span className="font-semibold">$6,000/month</span></li>
              <li className="flex justify-between"><span>Support Engineer</span> <span className="font-semibold">$4,000/month</span></li>
              <li className="flex justify-between"><span>QA</span> <span className="font-semibold">$4,000/month</span></li>
              <li className="flex justify-between"><span>Product Designer</span> <span className="font-semibold">Please inquire for a quote</span></li>
            </ul>
            <p className="mt-4">Reach out to me directly at <a href="mailto:sean@33d.co" className="text-studio-accent hover:text-studio-accent-hover">sean@33d.co</a> to get the process started.</p>
          </div>
        </div>
      </div>
      
      {/* Growth & Marketing Services Section */}
      <div className="section-container py-12">
        <h2 className="text-3xl font-bold mb-3 text-center">Growth & Marketing Services</h2>
        <p className="text-xl text-gray-300 mb-6 text-center">Handpicked partners for startups ready to scale.</p>
        
        <div className="prose prose-invert prose-lg mb-8 max-w-3xl mx-auto">
          <p>Growth is hard. That's why I recommend only a few trusted collaborators. These are teams I've worked with and would hire again in a heartbeat.</p>
        </div>
        
        {loading && <p className="text-center py-8">Loading growth partners...</p>}
        {error && <p className="text-center text-red-500 py-8">{error}</p>}
        
        {/* Growth Partner Tiles - Similar to Portfolio Page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 justify-items-center">
          {growthPartners.length > 0 ? (
            growthPartners.map((partner) => {
              let externalUrl: string | null = null;
              if (partner.body && Array.isArray(partner.body)) {
                for (const block of partner.body) {
                  if (block._type === 'block' && block.children && Array.isArray(block.children)) {
                    for (const child of block.children) {
                      if (child._type === 'span' && child.text) {
                        externalUrl = child.text;
                        break; // Assuming the first text span is the URL
                      }
                    }
                  }
                  if (externalUrl) break;
                }
              }
              
              return (
                <Card key={partner._id} className="bg-studio-muted/10 border border-gray-800 transition-all hover:border-studio-accent/50 hover:bg-studio-muted/20 flex flex-col overflow-hidden group hover:transform hover:scale-[1.02]">
                  {partner.thumbnailImage && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={urlFor(partner.thumbnailImage).width(400).height(300).url()}
                        alt={partner.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{partner.title}</CardTitle>
                    {partner.excerpt && <CardDescription className="text-gray-400">{partner.excerpt}</CardDescription>}
                  </CardHeader>
                  {externalUrl && (
                    <CardFooter>
                      <Link
                        to={externalUrl}
                        target="_blank" // Open in new tab
                        rel="noopener noreferrer" // Security best practice
                        className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover font-medium text-sm mt-auto"
                      >
                        Learn More <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  )}
                </Card>
              );
            })
          ) : (
            !loading && <p className="col-span-full text-center py-8">No growth partners found.</p>
          )}
        </div>
        
        <div className="text-center mt-8 text-studio-accent">
          <p>Friends of Sean get an exclusive discount on their first month with both.</p>
        </div>
      </div>

      {/* Need Help Section */}
      <div className="section-container py-12 bg-studio-muted/5 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-lg mb-6">
            Not sure where to start? Shoot me a note at <a href="mailto:sean@33d.co" className="text-studio-accent hover:text-studio-accent-hover">sean@33d.co</a> or
            DM me on <a href="http://www.linkedin.com/in/seanraftery" target="_blank" rel="noopener noreferrer" className="text-studio-accent hover:text-studio-accent-hover">LinkedIn</a> or
            <a href="http://www.x.com/seanraf" target="_blank" rel="noopener noreferrer" className="text-studio-accent hover:text-studio-accent-hover ml-1">Twitter</a>. 
            I'll help you find the right fit or personally make the intro.
          </p>
        </div>
      </div>
      
      {/* Original Sanity Content (conditionally rendered) */}
      {post && (
        <div className="section-container py-12 hidden">
          <div className="prose prose-invert prose-lg max-w-3xl mx-auto">
            <PortableText value={post.body} components={components} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FriendsOfSeanPage;
