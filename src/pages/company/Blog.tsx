import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "10 Ways to Reduce Cart Abandonment with WhatsApp",
    excerpt: "Learn how e-commerce brands are using WhatsApp automation to recover lost sales.",
    author: "Marketing Team",
    date: "Jan 15, 2026",
    category: "E-commerce",
  },
  {
    title: "The Rise of RCS: What Marketers Need to Know",
    excerpt: "RCS is transforming mobile messaging. Here's everything you need to know.",
    author: "Product Team",
    date: "Jan 10, 2026",
    category: "Technology",
  },
  {
    title: "AI in Customer Service: A Complete Guide",
    excerpt: "How AI is revolutionizing customer support and what it means for your business.",
    author: "Engineering Team",
    date: "Jan 5, 2026",
    category: "AI",
  },
  {
    title: "Building a Multi-Channel Communication Strategy",
    excerpt: "Tips for creating a unified approach to customer communication.",
    author: "Strategy Team",
    date: "Dec 28, 2025",
    category: "Strategy",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
              Resources
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text">Blog & Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Insights, guides, and best practices for customer communication.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {posts.map((post) => (
              <article key={post.title} className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {post.category}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link to="/book-demo">
                Subscribe Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
