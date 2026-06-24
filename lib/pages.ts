export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$9",
    cadence: "/ hour",
    tagline: "One dedicated agent for a focused set of recurring tasks.",
    features: [
      "1 dedicated, vetted virtual assistant",
      "Up to 40 hours per week",
      "Platform training during onboarding",
      "Background-verified & NDA signed",
      "Email & chat support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$12",
    cadence: "/ hour",
    tagline: "A multi-role agent built around your specific workflow.",
    features: [
      "1 senior, multi-skilled assistant",
      "Up to 40 hours per week",
      "Dedicated account manager",
      "Weekly performance reporting",
      "Role-based system access",
      "Free replacement guarantee",
    ],
    cta: "Book a Strategy Call",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "",
    tagline: "A managed team across multiple functions and time zones.",
    features: [
      "Multiple dedicated agents",
      "Custom coverage & shift planning",
      "MFA & SSO enterprise security",
      "Third-party audited compliance",
      "Quarterly business reviews",
      "Priority 24/7 incident response",
    ],
    cta: "Talk to Sales",
  },
];

export interface ValueItem {
  title: string;
  description: string;
}

export const aboutValues: ValueItem[] = [
  {
    title: "Built in the field",
    description:
      "We did not build CallDeals in a boardroom. We built it after years of running campaigns and learning firsthand what it costs to rely on the wrong team.",
  },
  {
    title: "Operators, not spectators",
    description:
      "CallDeals was built by people who had operated on the ground — managing pipelines, running teams, and experiencing the gaps a great agent fills.",
  },
  {
    title: "Accountable by default",
    description:
      "Every agent is briefed, managed, and measured. Weekly reporting and a free replacement guarantee keep performance honest.",
  },
];

export interface MissionFeature {
  icon: string;
  title: string;
  description: string;
}

/** The blue "people · process · technology" band on the About page. */
export const aboutMission = {
  statement:
    "We connect people, process, and technology to deliver seamless experiences worldwide.",
  features: [
    { icon: "◍", title: "Vetted Talent", description: "Top 1% professionals, background-verified before any client work." },
    { icon: "⚡", title: "72-Hour Deploy", description: "Briefed, trained, and active within three days of signing." },
    { icon: "◆", title: "Process-Driven", description: "Repeatable systems and playbooks behind every agent." },
    { icon: "⛨", title: "Secure by Default", description: "Enterprise-grade data protection and role-based access." },
    { icon: "✦", title: "Accountable", description: "Weekly reporting and a free replacement guarantee." },
  ] as MissionFeature[],
};

export const aboutStory = [
  "We did not build CallDeals in a boardroom. We built it in the field, after years of running real estate investing campaigns and learning firsthand what it costs to rely on the wrong calling team.",
  "CallDeals was not built by investors looking at a market gap on a spreadsheet. It was built by people who had operated on the ground — managing pipelines, running teams, and experiencing firsthand the difference a high-caliber, accountable professional makes.",
];
