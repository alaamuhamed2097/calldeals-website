import type {
  NavLink,
  HeroStat,
  Solution,
  Industry,
  SecurityItem,
  VettingStep,
  Faq,
  FooterColumn,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Industries", href: "/industries", hasDropdown: true },
  { label: "Resources", href: "/about", hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
];

export const heroStats: HeroStat[] = [
  { value: "9", suffix: "+", label: "Languages Supported" },
  { value: "950", suffix: "+", label: "Clients Served" },
  { prefix: "$", value: "80", suffix: "M", label: "Saved by our clients" },
  { value: "11", suffix: "+", label: "Industries Served" },
];

export const solutions: Solution[] = [
  {
    icon: "◍",
    title: "General Virtual Assistant",
    description:
      "Your all-in-one operational support. Handles admin, communication, scheduling, and day-to-day coordination, adapting to what your business needs each day.",
    href: "/solutions",
    image: "/assets/solutions/general.jpg",
  },
  {
    icon: "◆",
    title: "Tailored Virtual Assistant",
    description:
      "A multi-role professional built around your specific workflow. One agent crossing departments, filling your exact gaps, and evolving with your business as your needs change.",
    href: "/solutions",
    image: "/assets/solutions/tailored.jpg",
  },
  {
    icon: "✦",
    title: "Customer Services",
    description:
      "Every customer interaction handled with professionalism across phone, email, and live chat. Zero missed contacts. Consistent brand voice. Every channel covered.",
    href: "/solutions",
    image: "/assets/solutions/customer.jpg",
  },
  {
    icon: "▦",
    title: "Administrative",
    description:
      "CRM management, inbox triage, calendar coordination, data entry, and back-office operation handled without your involvement — so your high-value hours go toward high-value work.",
    href: "/solutions",
    image: "/assets/solutions/admin.jpg",
  },
];

export const industries: Industry[] = [
  {
    key: "realestate",
    label: "Real Estate",
    blurb:
      "Get trained real estate support live in days, not months, so your pipeline never stalls while hiring catches up.",
    cardTitle: "Precision-Driven Real Estate Support",
    stats: [
      {
        value: "30%",
        label: "Lead Response",
        description:
          "Responding to inbound leads within five minutes can lift contact rates by up to 30% — VAs keep every lead covered.",
      },
      {
        value: "15+",
        label: "Hours Reclaimed",
        description:
          "Agents recover 15+ hours a week by offloading CRM updates, scheduling, and transaction paperwork.",
      },
      {
        value: "3x",
        label: "Pipeline Velocity",
        description:
          "Consistent follow-up and nurture keeps three times more deals moving without adding headcount.",
      },
    ],
  },
  {
    key: "healthcare",
    label: "Healthcare",
    blurb:
      "Agents are briefed on your compliance requirements before any patient contact, so front-office work never slows care.",
    cardTitle: "Compliant, Patient-First Support",
    stats: [
      {
        value: "40%",
        label: "Admin Offload",
        description:
          "Practices hand off up to 40% of front-desk admin — intake, scheduling, and records — to trained VAs.",
      },
      {
        value: "24/7",
        label: "Coverage",
        description:
          "Patient calls, reminders, and follow-ups stay covered around the clock without overtime.",
      },
      {
        value: "0",
        label: "Missed Intakes",
        description:
          "Every inbound patient is captured, verified, and routed — no lead or appointment left behind.",
      },
    ],
  },
  {
    key: "ecommerce",
    label: "E Commerce",
    blurb:
      "Keep every order, ticket, and channel covered so growth never outpaces your support.",
    cardTitle: "Always-On Commerce Support",
    stats: [
      {
        value: "65%",
        label: "Tickets Resolved",
        description:
          "VAs resolve up to 65% of routine support tickets across chat, email, and marketplace inboxes.",
      },
      {
        value: "30%",
        label: "Cost Cut",
        description:
          "Trained remote teams cut your cost-to-serve by around 30% versus in-house support.",
      },
      {
        value: "<2m",
        label: "Response Time",
        description:
          "Average first response under two minutes keeps CSAT high through peak seasons.",
      },
    ],
  },
  {
    key: "technology",
    label: "Technology",
    blurb:
      "Spin up trained operational support that scales with your roadmap — no learning curve.",
    cardTitle: "Scalable Tech Operations",
    stats: [
      {
        value: "50%",
        label: "Backlog Cleared",
        description:
          "Offload QA triage, data entry, and tier-1 support to clear operational backlog by half.",
      },
      {
        value: "72h",
        label: "To Deploy",
        description:
          "A vetted, platform-trained operator is live on your stack within 72 hours of signing.",
      },
      {
        value: "20+",
        label: "Tools Supported",
        description:
          "Agents arrive fluent in the tools and systems your team already runs on.",
      },
    ],
  },
  {
    key: "finance",
    label: "Finance",
    blurb:
      "Give your advisors their hours back with VAs who handle prospecting, scheduling, and client coordination daily.",
    cardTitle: "Precision-Driven Financial Support",
    stats: [
      {
        value: "40%",
        label: "Admin Offload",
        description:
          "Time lost to admin: financial advisors spend up to 40% of their working week on tasks that do not require their professional expertise.",
      },
      {
        value: "38%",
        label: "Growth Opportunity",
        description:
          "Advisory firms that delegate client coordination and prospecting support onboard 38% more new clients per quarter on average.",
      },
      {
        value: "$180K",
        label: "Revenue at Stake",
        description:
          "An advisor losing just 3 hours daily to admin tasks forgoes up to $180,000 in potential annual billable revenue.",
      },
    ],
  },
  {
    key: "insurance",
    label: "Insurance",
    blurb:
      "Agents are briefed on your compliance and carrier requirements before any client contact.",
    cardTitle: "Reliable Policy Support",
    stats: [
      {
        value: "35%",
        label: "Admin Offload",
        description:
          "Agencies offload renewals, endorsements, and quoting prep to free producers up for selling.",
      },
      {
        value: "2x",
        label: "Quote Throughput",
        description:
          "Faster intake and document handling doubles the quotes your team can turn around.",
      },
      {
        value: "98%",
        label: "Retention",
        description:
          "Proactive renewal outreach keeps policy retention near 98% year over year.",
      },
    ],
  },
];

export const trustedLogos: string[] = [
  "Dialpad",
  "Western Dental",
  "Asana",
  "lululemon",
  "monday.com",
  "Intercom",
  "Notion",
];

export const vettingSteps: VettingStep[] = [
  {
    icon: "🛡",
    title: "Comprehensive background and credential verification",
    description:
      "Identity, history, and credential checks completed before a candidate is ever cleared for client work.",
  },
  {
    icon: "📋",
    title: "Reference and work history check",
    description:
      "Verification with former supervisors and professional contacts across every previous role held.",
  },
  {
    icon: "🎓",
    title: "Education screening",
    description:
      "Confirmation of degrees, certifications, and documented academic qualifications for every applicant.",
  },
  {
    icon: "🎯",
    title: "Expertise and role match",
    description:
      "Technical skills and role-specific capabilities assessed and validated against your exact account requirements.",
  },
];

export const securityLeft: SecurityItem[] = [
  {
    title: "Verified Backgrounds",
    description:
      "Every professional undergoes a multi-stage background check and identity verification to ensure 100% trust and integrity before they ever see your data.",
  },
  {
    title: "MFA & SSO Enabled",
    description:
      "We protect your critical systems with MFA (Multi-Factor Authentication) and SSO (Single Sign-On) protocols — the same high-level security used by Fortune 500 companies.",
  },
  {
    title: "Fortified Infrastructure",
    description:
      "Our operations are hosted in high-security cloud environments with layered encryption, protecting your proprietary information from any unauthorized access or leaks.",
  },
];

export const securityRight: SecurityItem[] = [
  {
    title: "Rapid Response",
    description:
      "We have a proactive, 24/7 incident response protocol to identify and neutralize security friction instantly, ensuring your workflow remains uninterrupted.",
  },
  {
    title: "Third-Party Audited",
    description:
      "Our security measures are independently assessed against recognized compliance frameworks, giving you total peace of mind that your business is fully protected.",
  },
  {
    title: "Role-Based Access",
    description:
      "System permissions are surgically limited to the job at hand. Access is role-based, strictly monitored, and instantly revoked during any offboarding.",
  },
];

export const faqs: Faq[] = [
  {
    question: "What is a virtual assistant?",
    answer:
      "A virtual assistant is a dedicated, college-educated professional who works remotely as a full member of your team — handling the calls, admin, coordination, and customer communication that keep your business running.",
  },
  {
    question: "What does a virtual assistant do?",
    answer:
      "Anything that doesn't require you. From inbox triage, scheduling, and CRM management to live customer support, prospecting, and transaction coordination — all scoped to your exact workflow.",
  },
  {
    question: "How long does it take to hire a virtual assistant with CallDeals?",
    answer:
      "We deliver an exact quote within 24 hours and have your vetted, industry-briefed agent active within 72 hours of signing.",
  },
  {
    question:
      "Why should I use CallDeals instead of hiring locally or using a freelancer platform?",
    answer:
      "A local hire costs 3–5x more, takes weeks to find, and adds payroll, benefits, and management overhead. A freelancer platform gives you no vetting guarantee, no exclusivity, and no performance accountability. CallDeals gives you a background-verified, industry-briefed, dedicated professional — deployed in 72 hours with weekly reporting and a free replacement guarantee if performance standards are not met.",
  },
  {
    question: "Will I have to train my virtual assistant?",
    answer:
      "No generic onboarding. Your agent is trained on your specific platforms and processes during onboarding, and arrives briefed, managed, and ready to execute from day one.",
  },
  {
    question: "Are your agents dedicated to my account or shared?",
    answer:
      "Fully dedicated. Your agent works exclusively on your account — never shared and never split across clients.",
  },
  {
    question: "How does the hiring process work?",
    answer:
      "Book a strategy call, we map the roles you need, we match a vetted specialist, and they go live in 72 hours — briefed, managed, and accountable.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Important Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "General Virtual Assistant", href: "/solutions" },
      { label: "Tailored Virtual Assistant", href: "/solutions" },
      { label: "Customer service", href: "/solutions" },
      { label: "Administrative", href: "/solutions" },
      { label: "Marketing", href: "/solutions" },
      { label: "Sales Development", href: "/solutions" },
      { label: "Inside Sale", href: "/solutions" },
      { label: "HR & PEO", href: "/solutions" },
      { label: "Transaction & POs", href: "/solutions" },
      { label: "Bookkeeping", href: "/solutions" },
      { label: "Virtual Receptionist", href: "/solutions" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Real Estate", href: "/industries" },
      { label: "Healthcare", href: "/industries" },
      { label: "Insurance", href: "/industries" },
      { label: "Technology", href: "/industries" },
      { label: "E-commerce", href: "/industries" },
      { label: "Finance", href: "/industries" },
      { label: "Property Management", href: "/industries" },
      { label: "Marketing Agencies", href: "/industries" },
      { label: "HR & PEO", href: "/industries" },
      { label: "Mortgage & Lending", href: "/industries" },
      { label: "Law Firms", href: "/industries" },
    ],
  },
  {
    title: "Get In Touch",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "About us", href: "/about" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Book A Demo", href: "/contact" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing plans", href: "/pricing" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
];
