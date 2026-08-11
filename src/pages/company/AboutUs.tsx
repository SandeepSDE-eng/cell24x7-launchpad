import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Globe2, CheckCircle2, MessageSquare, ShieldCheck, Zap } from "lucide-react";

const objectives = [
  "Enable businesses to engage customers seamlessly through SMS, Email, RCS, WhatsApp, Voice, and AI-powered channels.",
  "Provide enterprise-grade platforms ensuring reliability, security, compliance, and high service availability.",
  "Accelerate digital transformation via automation, AI customer interactions, and omnichannel engagement.",
  "Expand presence across domestic & international markets with world-class CPaaS & Contact Center solutions.",
  "Maintain highest customer satisfaction through responsive support, technical expertise & continuous improvement.",
  "Foster innovation by investing in Artificial Intelligence, Conversational AI, Voice Bots, and Contact Centers.",
  "Build long-term partnerships across BFSI, Healthcare, Education, Retail, Real Estate, E-commerce, & more.",
  "Ensure regulatory compliance and data security while safeguarding customer information and infrastructure.",
  "Achieve sustainable business growth through operational excellence, strategic partnerships, and innovation.",
  "Empower organizations worldwide with solutions that improve experiences, efficiency, and business outcomes."
];

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Section with Vibrant Gradient & Image Background */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center min-h-[60vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Business Team Communication" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-indigo-950/90 to-black/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-semibold text-sm mb-8 shadow-2xl">
            <span className="relative flex h-3 w-3 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            Cell24x7 Corporate Profile
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-xl leading-tight">
            Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-200 to-sky-200">Global Communication</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
            We are a leading CPaaS provider with over 13 years of experience, empowering businesses to connect, engage, and grow globally.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link 
              to="/book-demo" 
              className="inline-flex items-center justify-center h-14 px-10 text-lg font-bold text-indigo-950 bg-white rounded-full shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section - Who We Are */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-3xl blur-2xl opacity-30 transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Our Team" 
                className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-8 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-[200px] animate-bounce-slow hidden md:block">
                <div className="text-4xl font-extrabold text-indigo-600 mb-1">13+</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
            
            {/* Text side */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 border-b-4 border-indigo-600 pb-2 inline-block">Who We Are</h2>
                <div className="space-y-5 text-lg text-gray-600 leading-relaxed mt-6">
                  <p>
                    <strong className="text-indigo-600">Cell24x7 Media Technologies LTD</strong> is a leading Communications Platform as a Service (CPaaS) provider. We specialize in delivering secure, scalable, and enterprise-grade communication solutions.
                  </p>
                  <p>
                    Our services include SMS, Email, RCS Messaging, WhatsApp Business Platform, AI-Powered Voice Bots, Conversational AI, and Intelligent Contact Center Services. We empower organizations to automate customer interactions, improve engagement, and enhance operational efficiency.
                  </p>
                  <p>
                    Serving clients across India and international markets, we support businesses from diverse sectors including BFSI, Healthcare, Education, Retail, Real Estate, and Tech.
                  </p>
                  <p className="font-semibold text-gray-800 bg-indigo-50/70 p-4 rounded-xl border-l-4 border-indigo-600">
                    Driven by innovation, we continuously invest in advanced AI and automation to help businesses deliver exceptional customer experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Indigo & Violet Cards */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-10 text-white shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-2 transition-all duration-300">
              <Globe2 className="w-16 h-16 text-indigo-100 mb-6" />
              <h3 className="text-3xl font-extrabold mb-6">Our Vision</h3>
              <p className="text-lg text-indigo-50 leading-relaxed mb-4">
                To become India's most trusted and innovative CPaaS platform, enabling businesses of all sizes to connect, engage, and grow through intelligent, secure, and seamless communication solutions.
              </p>
              <p className="text-lg text-indigo-50 leading-relaxed">
                We envision a future where every customer interaction is personalized, automated, and delivered through the right channel at the right time, powered by advanced communication technologies and AI.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-violet-600 to-indigo-900 rounded-3xl p-10 text-white shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-2 transition-all duration-300">
              <Lightbulb className="w-16 h-16 text-violet-100 mb-6" />
              <h3 className="text-3xl font-extrabold mb-6">Our Mission</h3>
              <p className="text-lg text-violet-50 leading-relaxed mb-4">
                To empower enterprises with reliable, scalable, and secure communication solutions across SMS, Voice, WhatsApp, Email, RCS, AI Chatbots, and Voice Bots.
              </p>
              <p className="text-lg text-violet-50 leading-relaxed">
                We are committed to helping businesses improve customer engagement, operational efficiency, and digital transformation by delivering innovative CPaaS technologies, exceptional support, and industry-compliant services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Objectives Section - Indigo Accents */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Corporate Objectives</h2>
            <p className="text-xl text-gray-600">
              We aim to become a leading global provider of cloud communication by delivering secure, scalable, and innovative technologies. Here are our key focus areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {objectives.map((objective, idx) => (
              <div 
                key={idx} 
                className="group flex items-start gap-5 p-8 rounded-2xl bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Decorative background shape */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
                
                <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <span className="font-extrabold text-xl">{idx + 1}</span>
                </div>
                
                <p className="relative z-10 text-gray-700 leading-relaxed text-lg font-medium">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-700 opacity-90"></div>
        <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Global Network" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="container-custom relative z-10 text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Transform Your Communications?</h2>
          <p className="text-xl text-indigo-100 mb-12">
            Join thousands of enterprises driving digital transformation with our AI-powered omnichannel platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/book-demo" 
              className="inline-flex items-center justify-center h-14 px-8 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl"
            >
              Book a Live Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/features" 
              className="inline-flex items-center justify-center h-14 px-8 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors shadow-lg"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
