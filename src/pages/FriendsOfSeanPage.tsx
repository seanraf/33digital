
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Linkedin, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FriendsOfSeanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-studio text-white">
      <Helmet>
        <title>Friends of Sean | Trusted Services for Startup Founders</title>
        <meta name="description" content="Access Sean Raftery's curated network of startup talent, offshore engineering teams, marketing services, and trusted growth partners for early-stage startups." />
        <meta property="og:title" content="Friends of Sean | Trusted Services for Startup Founders" />
        <meta property="og:description" content="Access a curated network of startup talent, offshore engineering teams, marketing services, and trusted growth partners for early-stage startups." />
      </Helmet>
      <Navbar />
      
      <div className="pt-36 pb-16 md:pt-44">
        <div className="section-container">
          {/* Header Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Friends of Sean</h1>
            <p className="text-xl md:text-2xl text-gray-300">Perks, partners, and trusted services—just for you.</p>
          </div>
          
          {/* Intro Section */}
          <div className="mb-16 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Over the years, I've worked with dozens of founders and operators who needed trusted help 
              across product, design, engineering, and growth—but didn't know where to turn. 
              This page is my way of making those trusted connections more accessible.
            </p>
            <p className="text-lg text-gray-300">
              Below you'll find vetted services offered either by me or close collaborators—folks 
              I've personally worked with and can vouch for. If you're building something and need backup, 
              this is a great place to start.
            </p>
          </div>
          
          {/* Engineering & Design Staffing Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-3">Engineering & Design Staffing</h2>
            <p className="text-xl text-studio-accent mb-6">Startup-ready talent, trained the 33 Digital way.</p>
            
            <div className="mb-8">
              <p className="text-lg text-gray-300 mb-6">
                I work with a trusted offshore talent network I've spent years building. 
                These are engineers and designers I've led directly on startup builds. 
                They move fast, think smart, and understand how to work with lean teams. 
                Every person on this list has been trained in 33 Digital's systems and approach.
              </p>
            </div>
            
            {/* Rates Table */}
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-studio-muted/20 border-b border-gray-700">
                    <th className="py-4 px-6 text-left text-lg font-semibold">Service</th>
                    <th className="py-4 px-6 text-right text-lg font-semibold">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-studio-muted/10">
                    <td className="py-4 px-6 text-gray-300">Landing Pages / Marketing Sites</td>
                    <td className="py-4 px-6 text-right text-studio-accent font-semibold">$10,000 flat</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-studio-muted/10">
                    <td className="py-4 px-6 text-gray-300">Lead Engineer</td>
                    <td className="py-4 px-6 text-right text-studio-accent font-semibold">$6,000/month</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-studio-muted/10">
                    <td className="py-4 px-6 text-gray-300">Support Engineer</td>
                    <td className="py-4 px-6 text-right text-studio-accent font-semibold">$4,000/month</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-studio-muted/10">
                    <td className="py-4 px-6 text-gray-300">QA</td>
                    <td className="py-4 px-6 text-right text-studio-accent font-semibold">$4,000/month</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-studio-muted/10">
                    <td className="py-4 px-6 text-gray-300">Product Designer</td>
                    <td className="py-4 px-6 text-right italic">Please inquire for a quote</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Growth & Marketing Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-3">Growth & Marketing Services</h2>
            <p className="text-xl text-studio-accent mb-6">Handpicked partners for startups ready to scale.</p>
            
            <div className="mb-8">
              <p className="text-lg text-gray-300 mb-8">
                Growth is noisy. That's why I recommend only a few trusted collaborators—teams 
                I've worked with and would hire again in a heartbeat.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-2">Lettercraftr</h3>
                  <p className="text-gray-300 mb-4">For newsletters that actually convert</p>
                  <a href="#" className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover">
                    Learn more <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
                
                <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-2">Amplifyx</h3>
                  <p className="text-gray-300 mb-4">For LinkedIn content and lead generation</p>
                  <a href="#" className="inline-flex items-center text-studio-accent hover:text-studio-accent-hover">
                    Learn more <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-studio-accent/10 border border-studio-accent/30 rounded-lg p-6">
              <p className="text-lg">Friends of Sean get an exclusive discount on their first month with both.</p>
            </div>
          </div>
          
          {/* CTA / Contact Section */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Not sure where to start? Shoot me a note at sean@33d.co or DM me on LinkedIn or X.
              I'll help you find the right fit—or personally make the intro.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="mailto:sean@33d.co" className="bg-studio-accent hover:bg-studio-accent-hover text-white px-6 py-3 rounded-md inline-flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
              <a href="http://www.linkedin.com/in/seanraftery" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] hover:bg-[#006195] text-white px-6 py-3 rounded-md inline-flex items-center">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              <a href="http://www.x.com/seanraf" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-gray-900 border border-gray-700 text-white px-6 py-3 rounded-md inline-flex items-center">
                <X className="mr-2 h-5 w-5" />
                Twitter/X
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FriendsOfSeanPage;
