import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, HelpCircle, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const blogPosts = [
  {
    title: "10 WhatsApp Business API Best Practices for 2024",
    excerpt: "Learn how to maximize your WhatsApp Business API usage with these proven strategies.",
    category: "WhatsApp",
    readTime: "5 min read",
  },
  {
    title: "The Complete Guide to Omnichannel Customer Support",
    excerpt: "Everything you need to know about building a seamless omnichannel support experience.",
    category: "Strategy",
    readTime: "8 min read",
  },
  {
    title: "How AI Chatbots are Revolutionizing Customer Service",
    excerpt: "Discover the impact of AI-powered chatbots on customer service efficiency and satisfaction.",
    category: "AI",
    readTime: "6 min read",
  },
  {
    title: "SMS vs WhatsApp: Which Channel is Right for Your Business?",
    excerpt: "A comprehensive comparison of SMS and WhatsApp for business communication.",
    category: "Channels",
    readTime: "4 min read",
  },
];

const faqs = [
  {
    question: "What channels does Cell24x7 support?",
    answer: "Cell24x7 supports all major communication channels including WhatsApp Business API, Instagram DM, Facebook Messenger, SMS, RCS, Email, and Voice Calling. All channels are unified into a single inbox.",
  },
  {
    question: "How long does it take to get started?",
    answer: "You can set up your Cell24x7 account in under 10 minutes. WhatsApp Business API approval typically takes 1-3 business days depending on Meta's verification process.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial on all plans. No credit card required to start. You'll have full access to all features during the trial period.",
  },
  {
    question: "Can I integrate Cell24x7 with my existing CRM?",
    answer: "Absolutely. Cell24x7 integrates with popular CRMs including Salesforce, HubSpot, Zoho, and more. We also offer APIs and webhooks for custom integrations.",
  },
  {
    question: "Is my data secure with Cell24x7?",
    answer: "Yes. We take data protection seriously. Cell24x7 uses end-to-end encryption for all communications. Your data is stored in secure, encrypted databases.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer email support on all plans, priority support on Growth and above, and 24/7 dedicated support for Pro and Enterprise customers. We also have a comprehensive knowledge base and video tutorials.",
  },
];

const caseStudies = [
  {
    title: "How TechFlow Increased Customer Satisfaction by 45%",
    company: "TechFlow Inc.",
    industry: "SaaS",
    result: "45% CSAT increase",
  },
  {
    title: "GlobalRetail's Journey to Omnichannel Excellence",
    company: "GlobalRetail Co.",
    industry: "E-commerce",
    result: "60% faster response time",
  },
  {
    title: "FinServe Automates 40% of Customer Inquiries",
    company: "FinServe Solutions",
    industry: "BFSI",
    result: "40% automation rate",
  },
];

const Resources = () => {
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
              Learn, Grow,{" "}
              <span className="gradient-text">Succeed</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our blog, case studies, FAQs, and more to get the most out of Cell24x7.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                Latest from the Blog
              </h2>
              <p className="text-muted-foreground">
                Insights, tips, and best practices for customer communication
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/blog">
                View All Posts <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to="/blog"
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/blog">
                View All Posts <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Customer Success Stories
            </h2>
            <p className="text-muted-foreground">
              See how businesses are winning with Cell24x7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {study.industry}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-4">
                  {study.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{study.company}</span>
                  <span className="px-3 py-1 text-xs font-semibold bg-brand-cyan/10 text-brand-cyan rounded-full">
                    {study.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" id="faq">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Got questions? We've got answers.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border/50 text-center">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Documentation
              </h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive guides to help you get started and make the most of Cell24x7.
              </p>
              <Button variant="outline" asChild>
                <Link to="/docs">Read Docs</Link>
              </Button>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border/50 text-center">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                <PlayCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Video Tutorials
              </h3>
              <p className="text-muted-foreground mb-6">
                Step-by-step video guides for all features and integrations.
              </p>
              <Button variant="outline" asChild>
                <Link to="/tutorials">Watch Videos</Link>
              </Button>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border/50 text-center">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Support
              </h3>
              <p className="text-muted-foreground mb-6">
                Need help? Our support team is here for you 24/7.
              </p>
              <Button variant="gradient" asChild>
                <Link to="/book-demo">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
