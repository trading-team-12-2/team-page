import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import PerformanceSection from "./components/sections/PerformanceSection";
import StorySection from "./components/sections/StorySection";
import VisionSection from "./components/sections/VisionSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "AlgoFuture",
        "url": "https://algofuture.com", // Placeholder URL
        "logo": "https://algofuture.com/logo.png", // Placeholder
        "description": "High-Frequency Quantitative Trading Team focused on low latency and high Sharpe ratio.",
        "sameAs": [
          "https://linkedin.com/company/algofuture",
          "https://twitter.com/algofuture"
        ]
      },
      {
        "@type": "JobPosting",
        "title": "Senior Quantitative Researcher",
        "description": "We are looking for a researcher with 5+ years of experience in HFT. Strong background in stochastic calculus and C++ required.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "AlgoFuture",
          "sameAs": "https://algofuture.com"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "addressCountry": "US"
          }
        },
        "datePosted": "2023-10-01"
      }
    ]
  };

  return (
    <main className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <PerformanceSection />
      <StorySection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
