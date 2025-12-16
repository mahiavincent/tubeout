'use client';
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureGridSection } from "@/components/sections/feature-grid-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsColumn } from "@/components/testimonials-columns";
import { FaqsSection } from "@/components/faqs-section";
import { LogoCloud } from "@/components/logo-cloud";
import TopNav from '@/components/TopNav'
import AILoadingState from "@/components/kokonutui/ai-loading";

const testimonials = [
  {
    text: "This tool completely transformed how we do creator outreach. Finding verified YouTube emails went from hours of manual work to a few minutes.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "The automation is insane—keyword search, filters, and instant email extraction. It’s the fastest workflow upgrade our team has had all year.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "Support has been wonderful. They helped us fine-tune our outreach process, and we now find 10× more creator contacts than before.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Creator Partnerships Lead",
  },
  {
    text: "Our agency relies on bulk scraping for campaigns. The advanced version with unlimited runs saved us thousands in manual labor costs.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Agency CEO",
  },
  {
    text: "Super accurate results. We used to open channels one by one—now we get verified emails instantly with clean CSV export.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The tool fits perfectly into our influencer recruiting workflow. It filtered by niche, country, and subscriber size better than anything else we tried.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our marketing campaigns became way more targeted. We can now reach the exact creators we need with almost zero effort.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "Finally, a tool that understands real creator outreach needs. It’s fast, accurate, and extremely intuitive.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Our conversion rates jumped after using this tool. Fetching verified emails directly from YouTube channels gave us higher-quality leads than any database.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Outreach Specialist",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Home() {
  return (
    <div className="relative min-h-screen scrollbar-hide max-h-max">
      <TopNav></TopNav>
      <HeroSection></HeroSection>
      <AILoadingState></AILoadingState>
      <FeatureGridSection></FeatureGridSection>
      <PricingSection></PricingSection>
      <section className="relative py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-4">
            <div className="flex justify-center">
              <div className="rounded-lg border px-4 py-1">Testimonials</div>
            </div>

            <h2 className="font-bold text-3xl tracking-tighter lg:text-4xl">
              What our users say
            </h2>
            <p className="text-center text-muted-foreground text-sm">
              See what our customers have to say about us.
            </p>
          </div>

          <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            <TestimonialsColumn duration={16} testimonials={firstColumn} />
            <TestimonialsColumn
              className="hidden md:block"
              duration={20}
              testimonials={secondColumn}
            />
            <TestimonialsColumn
              className="hidden lg:block"
              duration={18}
              testimonials={thirdColumn}
            />
          </div>
        </div>
      </section>
      <FaqsSection></FaqsSection>
      <section className="relative mx-auto max-w-3xl">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">Trusted by experts.</span>
          <br />
          <span className="font-semibold">Used by the leaders.</span>
        </h2>
        <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto my-5 h-px max-w-sm bg-border" />
        <LogoCloud />
        <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mt-5 h-px bg-border" />
      </section>
    </div>
  );
}
