import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ChannelsSection } from "@/components/home/ChannelsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { TrustSection } from "@/components/home/TrustSection";
import { DemoShowcaseSection } from "@/components/home/DemoShowcaseSection";

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta - handled via document head in production */}
      <HeroSection />
      <ChannelsSection />
      <FeaturesSection />
      {/* Video player added for public access */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '32px 0' }}>
        <video controls width="800" className="rounded-xl shadow-2xl">
          <source src="/videos/vid_24apr.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <DemoShowcaseSection />
      <UseCasesSection />
      <TrustSection />
    </Layout>
  );
};

export default Index;
