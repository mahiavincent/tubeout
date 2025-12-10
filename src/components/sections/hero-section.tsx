"use client";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const { resolvedTheme } = useTheme();

  const gradientClass =
    resolvedTheme === "light"
      ? "bg-gradient-to-r from-black to-black/50"
      : "bg-gradient-to-r from-white to-white/50";

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex min-h-[500px] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <motion.div variants={itemVariants} className="mb-4">
        <span className="inline-flex items-center gap-2 rounded-full border dark:border-white/20 dark:bg-white/10 px-4 py-1.5 text-sm font-medium text-[var(--muted-foreground)]">
          <Sparkles className="h-4 w-4" />
          New Research Tool
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="mb-6 text-4xl font-bold tracking-tight md:text-5xl"
      >
        Find Qualified
        <br />
        <span className="bg-gradient-to-r from-neutral-900 to-neutral-400 dark:from-white dark:to-white/50 bg-clip-text text-transparent text-4xl">
          Youtube Creators Instantly
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mb-8 max-w-2xl text-lg text-[var(--foreground)]/70"
      >
        Automate your outreach workflow with our smart tool that searches channels,
        unlocks emails, and exports clean lead lists — all in seconds.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4">
        <Link href='/signup'>
          <Button size="lg" className="gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link href='/signup'>
          <Button size="lg" variant="outline">
            View Demo
          </Button>
        </Link>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 flex items-center gap-8 text-sm text-[var(--foreground)]/60"
      >
        <div>
          <div className="text-2xl font-bold text-[var(--foreground)]">
            10k+
          </div>
          <div>Emails Extracted</div>
        </div>
        <div className="h-8 w-px bg-[var(--border)]" />
        <div>
          <div className="text-2xl font-bold text-[var(--foreground)]">50+</div>
          <div>Niches Supported</div>
        </div>
        <div className="h-8 w-px bg-[var(--border)]" />
        <div>
          <div className="text-2xl font-bold text-[var(--foreground)]">
            100%
          </div>
          <div>Verified Results</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
