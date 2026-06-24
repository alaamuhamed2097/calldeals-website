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
  image?: string;
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

/* -------------------------------------------------------------------------- */
/* CMS API types (Calldeals Dashboard / .NET)                                 */
/* ASP.NET Core uses System.Text.Json with the default camelCase policy, so   */
/* every field below MUST be camelCase to match the wire format exactly.      */
/* A casing mismatch would silently deserialize to `undefined`.               */
/* -------------------------------------------------------------------------- */

export interface ApiEnvelope<T> {
  success: boolean;
  data: T | null;
  message: string;
  errors: string[];
}

export interface IndustrySummary {
  id: string;
  name: string;
  hashTag: string;
  image: string | null;
  subImage: string | null;
  shortDescription: string;
  description: string;
  tags: string | null;
  selectedSolutionIds: string[];
}

export interface IndustryFeature {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface IndustryTestimonial {
  id: string;
  image: string | null;
  rate: number;
  review: string;
  name: string;
  title: string;
}

export interface IndustryQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface IndustryPartner {
  id: string;
  logo: string;
  name: string;
}

export interface IndustryBlog {
  id: string;
  image: string | null;
  title: string;
  content: string;
}

export interface IndustrySolution {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  mainImage: string | null;
}

export interface SolutionSummary {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  mainImage: string | null;
  subImage: string | null;
  displayOrder: number;
  showInHomePage: boolean;
}

export interface IndustryDetail {
  industry: IndustrySummary;
  partners: IndustryPartner[];
  features: IndustryFeature[];
  testimonials: IndustryTestimonial[];
  questions: IndustryQuestion[];
  blogs: IndustryBlog[];
  solutions: IndustrySolution[];
}

/* Solution detail — same shape as the industry sub-entities (the .NET
   `GET /api/Solution/{id}` returns { solution, features, testimonials,
   questions, blogs }). Solutions have no partners and no slug field. */
export interface SolutionProperty {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export type SolutionTestimonial = IndustryTestimonial;
export type SolutionQuestion = IndustryQuestion;
export type SolutionBlog = IndustryBlog;

export interface SolutionDetail {
  solution: SolutionSummary;
  features: SolutionProperty[];
  testimonials: SolutionTestimonial[];
  questions: SolutionQuestion[];
  blogs: SolutionBlog[];
}
