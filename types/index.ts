export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface HeroStat {
  prefix?: string;
  value: string;
  suffix?: string;
  label: string;
}

export interface Solution {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface IndustryStat {
  value: string;
  label: string;
  description: string;
}

export interface Industry {
  key: string;
  label: string;
  blurb: string;
  cardTitle: string;
  stats: IndustryStat[];
}

export interface SecurityItem {
  title: string;
  description: string;
}

export interface VettingStep {
  icon: string;
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
