import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCases } from "@/config/site";
import { 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Plane, 
  Building, 
  Landmark,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { LiveDashboardPreview } from "@/components/usecases/LiveDashboardPreview";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingCart,
  GraduationCap,
  Heart,
  Plane,
  Building,
  Landmark,
};

const UseCases = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/10 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
              Industry Solutions
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Solutions for{" "}
              <span className="gradient-text">Every Industry</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From e-commerce to healthcare, Cell24x7 adapts to your specific business 
              needs with industry-tailored workflows and integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Detail */}
      <section className="section-padding">
        <div className="container-custom">
          {useCases.map((useCase, index) => {
            const Icon = iconMap[useCase.icon];
            const isReversed = index % 2 === 1;
            
            return (
              <div
                key={useCase.id}
                id={useCase.id}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 mb-24 last:mb-0 scroll-mt-24`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    {Icon && <Icon className="w-8 h-8 text-primary" />}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {useCase.name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {useCase.description}
                  </p>
                  
                  {/* Benefits */}
                  <ul className="space-y-4 mb-8">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="gradient" asChild>
                    <Link to="/book-demo">
                      See {useCase.name} Demo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Live Dashboard Preview */}
                <div className="flex-1 w-full">
                  <LiveDashboardPreview industry={useCase.id} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-sunken">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cell24x7 is flexible enough to work with any business. 
              Let's discuss how we can help you.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link to="/book-demo">
                Talk to an Expert
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UseCases;
