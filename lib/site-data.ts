import {
  BarChart3,
  Rocket,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
  Users,
  Workflow,
} from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: 'Solutions', href: '#features' },
  { label: 'Track Record', href: '#stats' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Connect', href: '#lead-form' },
];

export const trustPartners = ['Reliance', 'HCL', 'IBM', 'CRIF', 'ADP', 'Bayer'];

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const enterpriseFeatures: FeatureCard[] = [
  {
    title: 'Product & Innovation Hub',
    description: 'Build customer-centric products with research-backed learning paths and rapid experimentation.',
    icon: Rocket,
  },
  {
    title: 'Gen-AI Mastery',
    description: 'Equip teams to use AI responsibly for automation, productivity, and smarter decisions.',
    icon: Sparkles,
  },
  {
    title: 'Leadership Elevation',
    description: 'Strengthen managers and future leaders with coaching, communication, and strategic thinking.',
    icon: Users,
  },
  {
    title: 'Tech & Data Insights',
    description: 'Turn analytics into action with practical data literacy and dashboard-driven decisions.',
    icon: BarChart3,
  },
  {
    title: 'Operations Excellence',
    description: 'Improve quality, consistency, and execution with process-first learning programs.',
    icon: Workflow,
  },
  {
    title: 'Digital Enterprise',
    description: 'Modernize digital workflows, change adoption, and cross-functional collaboration.',
    icon: ShieldCheck,
  },
];

export type TrackRecordStat = {
  value: string;
  label: string;
  description: string;
};

export const trackRecordStats: TrackRecordStat[] = [
  {
    value: '10K+',
    label: 'Professionals trained',
    description: 'Across enterprise teams and leadership tracks.',
  },
  {
    value: '200+',
    label: 'Sessions delivered',
    description: 'Live workshops, custom cohorts, and advisory sessions.',
  },
  {
    value: '5K+',
    label: 'Active learners',
    description: 'Engaged across ongoing programs and repeat cohorts.',
  },
];

export type Testimonial = {
  company: string;
  quote: string;
  author: string;
  role: string;
  location: string;
};

export const partnerTestimonials: Testimonial[] = [
  {
    company: 'ADP',
    quote:
      'Accredian turned our training vision into a practical program our managers could use immediately.',
    author: 'Priya Sharma',
    role: 'VP, People Development',
    location: 'Enterprise Client',
  },
  {
    company: 'Bayer',
    quote:
      'The team was responsive, structured, and focused on outcomes. The learning experience felt tailored to our business.',
    author: 'Arjun Mehta',
    role: 'Learning Partner',
    location: 'Enterprise Client',
  },
  {
    company: 'Reliance',
    quote:
      'We saw stronger engagement and better alignment across teams. Their support stayed consistent from kickoff to delivery.',
    author: 'Neha Kapoor',
    role: 'Talent & Capability Lead',
    location: 'Enterprise Client',
  },
];

export const leadHighlights = [
  {
    title: 'Custom curriculum',
    description: 'Every proposal is shaped around your team size, goals, and timeline.',
  },
  {
    title: 'Fast response',
    description: 'We respond quickly with a focused discovery call and next steps.',
  },
  {
    title: 'Enterprise-ready delivery',
    description: 'Programs are designed for scale, adoption, and measurable impact.',
  },
];