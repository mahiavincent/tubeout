"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
	LayoutGrid,
	Rocket,
	Search,
	MailSearch,
	CreditCard,
	LifeBuoy,
} from "lucide-react";

import React from "react";

//
// -----------------------------
// Categories
// -----------------------------
//

const categories = [
	{ icon: LayoutGrid, id: "all", label: "All Topics" },
	{ icon: Rocket, id: "getting-started", label: "Getting Started" },
	{ icon: Search, id: "features", label: "Features" },
	{ icon: CreditCard, id: "billing", label: "Billing" },
	{ icon: LifeBuoy, id: "support", label: "Support" },
];

//
// -----------------------------
// FAQs (CUSTOMIZED FOR YOUR APP)
// -----------------------------
//

const faqs = [
	// GETTING STARTED --------------------------
	{
		id: 1,
		category: "getting-started",
		title: "How do I find YouTube creator emails?",
		content:
			"Enter a keyword or niche, apply filters like country or subscriber range, and run a search. The app automatically scans channels and extracts verified emails from their About pages.",
	},
	{
		id: 2,
		category: "getting-started",
		title: "Do I need to install anything?",
		content:
			"No installation required for the web version. For heavy scraping, the desktop version offers a faster standalone executable with no setup needed.",
	},

	// FEATURES ----------------------------------
	{
		id: 3,
		category: "features",
		title: "How accurate are the emails?",
		content:
			"All emails are fetched directly from the creator’s YouTube About page, ensuring they are real, verified, and public.",
	},
	{
		id: 4,
		category: "features",
		title: "Can I export results to CSV?",
		content:
			"Absolutely! Export clean CSV files containing creator names, channel links, subscriber data, niches, and verified emails. Advanced users can export without watermarks.",
	},
	{
		id: 5,
		category: "features",
		title: "Does it support outreach automation?",
		content:
			"Yes! Advanced plans include automated emailing, templated outreach messages, follow-ups, scheduling tools, and integration options.",
	},
	{
		id: 6,
		category: "features",
		title: "Can I search in bulk?",
		content:
			"Yes. The advanced plan allows multi-keyword searches, unlimited runs, and high-speed scraping using our optimized headless browser.",
	},

	// BILLING -----------------------------------
	{
		id: 7,
		category: "billing",
		title: "What’s included in each plan?",
		content:
			"The Basic plan offers limited searches and CSV downloads with a watermark. The Advanced plan includes unlimited searches, fast scraping, no-watermark exports, multi-keyword input, and automation tools.",
	},
	{
		id: 8,
		category: "billing",
		title: "Do unused credits carry over?",
		content:
			"Yes. Any unused search credits automatically roll over to the next billing cycle depending on your subscription.",
	},

	// SUPPORT -----------------------------------
	{
		id: 9,
		category: "support",
		title: "How do I get help or report an issue?",
		content:
			"You can contact us anytime at support@yourapp.com or use the in-app support form. Our team typically responds within 12–24 hours.",
	},
	{
		id: 10,
		category: "support",
		title: "Do you offer onboarding or tutorials?",
		content:
			"Yes! We provide quick-start guides, videos, and premium onboarding for advanced plan users.",
	},
];

//
// -----------------------------
// Main Component
// -----------------------------
//

export function FaqsSection() {
	const [activeCategory, setActiveCategory] = React.useState("all");

	const filtered = faqs.filter((faq) => {
		const matchesCategory =
			activeCategory === "all" || faq.category === activeCategory;
		return matchesCategory;
	});

	const currentCategory = React.useMemo(
		() => categories.find((cat) => cat.id === activeCategory),
		[activeCategory]
	);

	return (
		<section id="faq" className="mx-auto min-h-screen w-full max-w-5xl">
			<div className="flex flex-col items-center justify-center gap-4 px-4 py-16">
				<h2 className="text-balance font-black font-mono text-4xl md:text-5xl">
					FAQs
				</h2>
				<p className="text-muted-foreground">
					Everything you need to know about the creator email finder.
				</p>
			</div>

			<div className="relative grid min-h-full grid-cols-1 py-12 md:grid-cols-3">

				{/* Category Sidebar */}
				<div className="flex h-full items-start justify-center border-b pb-2 md:border-b-0">
					<div className="flex w-max flex-wrap items-start justify-start gap-2 md:flex-col md:justify-center">
						{categories.map((cat) => (
							<Button
								key={cat.id}
								onClick={() => setActiveCategory(cat.id)}
								variant={activeCategory === cat.id ? "outline" : "ghost"}
								className={cn(
									"border border-transparent",
									activeCategory === cat.id && "border-border"
								)}
							>
								<cat.icon className="size-4" />
								{cat.label}
							</Button>
						))}
					</div>
				</div>

				{/* FAQ Accordion */}
				<div className="col-span-2 space-y-5 px-4 py-5">
					{currentCategory && (
						<div className="flex items-center gap-2">
							<currentCategory.icon className="size-4" />
							<span className="font-medium">{currentCategory.label}</span>
						</div>
					)}

					<Accordion
						className="space-y-2"
						collapsible
						defaultValue="1"
						type="single"
					>
						{filtered.map((item) => (
							<AccordionItem
								key={item.id}
								value={item.id.toString()}
								className="border-b-0"
							>
								<AccordionTrigger className="border bg-card px-4 shadow hover:no-underline">
									{item.title}
								</AccordionTrigger>

								<AccordionContent className="px-4 py-4">
									{item.content}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
