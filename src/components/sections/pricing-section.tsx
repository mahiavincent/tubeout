"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For creators & freelancers testing the tool",
    features: [
      "10 Creator Searches/day",
      "10 Contacts Revealed/day",
      "Basic Ranking",
      "CSV Export (Watermarked only)",
      "Single Automated Email/ Sequence Preview",
      "No Outreach Automation",
      "No meeting scheduling automation"
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Ideal for freelancers, and small businesses",
    features: [
      "Unlimited Searces",
      "Up to 300 Contacts Revealed/month",
      "Full Ranking Algorithm",
      "CSV Export (No Watermark)",
      "Automated Outreach (Up to 200 automated emails/month)",
      "Meeting Automation",
      "Priority Access",
    ],
    popular: true,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    description: "For small teams and agencies",
    features: [
      "Unlimited Searches",
      "1,500 Contacts Revealed/month",
      "Full Ranking Algorithm",
      "CSV Export (No Watermark)",
      "Automated Outreach (1,000 automated emails/month)",
      "Meeting Scheduling (Google Calendar Integration/ Calendly auto-sync)",
      "Team Accounts (up to 5)",
      "Higher Worker Priority"
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/month",
    description: "For large agencies, influencer management companies and media teams",
    features: [
      "Unlimited contacts",
      "Unlimited outreach",
      "Premium priority queue",
      "Bulk CSV generation",
      "Custom ranking criteria",
      "Team accounts(20+)",
      "SLA + Dedicated support",
      "Full export with no watermark",
      "Custom domain for outreach",
    ],
    popular: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-sm flex-col items-center justify-center gap-4"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border px-4 py-1">Subscription plan</div>
          </div>
          <h2 className="font-bold text-center text-3xl tracking-tighter lg:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-muted-foreground text-sm">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mt-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card
                className={`relative h-full  bg-[var(--card-bg)] transition-all ${plan.popular ? "border-accent shadow-lg" : ""
                  }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <Badge className="flex items-center gap-1 bg-accent px-3 py-1 dark:text-white text-stone-700">
                      <Zap className="h-3 w-3" />
                      Popular
                    </Badge>
                  </motion.div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-[var(--foreground)]/60">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          delay: index * 0.15 + featureIndex * 0.1 + 0.5,
                        }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{
                            delay: index * 0.15 + featureIndex * 0.1 + 0.6,
                            type: "spring",
                          }}
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10"
                        >
                          <Check className="h-3 w-3 text-neutral-100" />
                        </motion.div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href='/signup'>
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
