import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle, TrendingUp, Users, Globe } from "lucide-react";

export default function CompanyProfile() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-gray-900 dark:via-background dark:to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 shadow-sm border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Official Corporate Profile
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Discover the Vision of <span className="text-[#5956d6]">Cell24x7</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Download our comprehensive company profile to learn about our cutting-edge AI-powered omnichannel communication solutions, global reach, and how we empower modern businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/book-demo" 
              className="inline-flex items-center justify-center h-14 px-8 text-base font-bold text-white bg-gradient-to-r from-[#5956d6] to-indigo-600 rounded-xl shadow-[0_0_40px_rgba(89,86,214,0.4)] hover:shadow-[0_0_60px_rgba(89,86,214,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-background border-t border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What's inside the Profile?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Get a deep dive into our infrastructure, global partnerships, and the technology that drives billions of messages daily.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Global Reach",
                description: "Learn about our extensive network connecting businesses to customers across 190+ countries with minimal latency.",
                icon: <Globe className="w-8 h-8 text-blue-500" />
              },
              {
                title: "Scalable Technology",
                description: "Detailed architecture overview of our AI-driven systems designed for high-volume enterprise messaging.",
                icon: <TrendingUp className="w-8 h-8 text-green-500" />
              },
              {
                title: "Client Success",
                description: "Case studies and testimonials from industry leaders who trust Cell24x7 for their critical communications.",
                icon: <Users className="w-8 h-8 text-purple-500" />
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#5956d6]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your communications?</h2>
          <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-lg">
            Download our profile to understand our vision, or get in touch with our enterprise team today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" className="h-12 px-8 border-white/20 text-white hover:bg-white/10 rounded-lg font-bold" asChild>
              <a href="/book-demo">Contact Sales</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
