import { useCases } from "@/config/site";
import { 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Plane, 
  Building, 
  Landmark,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingCart,
  GraduationCap,
  Heart,
  Plane,
  Building,
  Landmark,
};

export function UseCasesSection() {
  return (
    <section className="section-padding bg-surface-sunken relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-cyan/5 via-transparent to-transparent" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium mb-6">
            Industry Solutions
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for{" "}
            <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From e-commerce to healthcare, Cell24x7 adapts to your specific business needs 
            with industry-tailored workflows and integrations.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = iconMap[useCase.icon];
            return (
              <Link
                key={useCase.id}
                to={`/use-cases#${useCase.id}`}
                className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    {Icon && <Icon className="w-7 h-7 text-primary" />}
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {useCase.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2">
                    {useCase.benefits.slice(0, 2).map((benefit) => (
                      <span
                        key={benefit}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View solutions <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
