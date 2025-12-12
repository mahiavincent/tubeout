"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Code, Zap, Shield, Globe, Lock, Sparkles, Search, MailSearch, ListChecks, Download, Settings2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "Smart Creator Search",
    description:
      "Find YouTube creators instantly using niche, keywords, subscriber range, and country filters.",
  },
  {
    icon: MailSearch,
    title: "Verified Email Extraction",
    description:
      "Automatically collects real, verified creator emails directly from channel About pages.",
  },
  {
    icon: ListChecks,
    title: "Ranked Leads",
    description:
      "Creators are ranked by relevance, audience quality, and engagement potential.",
  },
  {
    icon: Download,
    title: "Instant CSV Export",
    description:
      "Download clean CSV files containing creator names, channels, niches, and verified contact emails.",
  },
  {
    icon: Settings2,
    title: "Automation Tools",
    description:
      "Optional automations for outreach: auto-emailing, meeting setup, and workflow extensions.",
  },
  {
    icon: Sparkles,
    title: "Watermark Control",
    description:
      "Choose between watermark or no-watermark exports depending on your subscription level.",
  },
];

export function FeatureGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div id="features" ref={ref} className="w-full px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-sm flex-col items-center justify-center gap-4"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border px-4 py-1">About us</div>
          </div>
          <h2 className="font-bold text-3xl tracking-tighter lg:text-4xl">
            Why Choose Us
          </h2>
          <p className="text-center text-muted-foreground text-sm">
            Everything we offer to you
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full  bg-[var(--card-bg)] transition-all hover:shadow-lg">
                  <CardHeader>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -60 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1, rotate: 0 }
                          : { opacity: 0, scale: 0.8, rotate: -60 }
                      }
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                        mass: 0.6,
                      }}
                      className="mb-4 inline-flex"
                    >
                      <Icon
                        className="h-6 w-6 text-[var(--muted-foreground)]"
                        aria-hidden="true"
                      />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
