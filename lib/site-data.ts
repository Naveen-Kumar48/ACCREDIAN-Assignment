import {
  BarChart3,
  Rocket,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
  Users,
  Workflow,
  Lightbulb,
  MessageSquare,
  Settings2,
  Cpu,
  ArrowLeftRight,
  Target,
  Box,
  Brain,
  Globe,
  CreditCard,
} from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
};

export const brandAssets = {
  logo: '/Accredian/logo.webp',
  hero: '/Accredian/imagehuman.png',
  heroBackdrop: '/Accredian/corporate-big-hero-v4.webp',
  usp: '/Accredian/accredian-edge-usp-v3.svg',
  uspMobile: '/Accredian/accredian-edge-usp-mobile.svg',
  ctaCircle: '/Accredian/cta-circle.svg',
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Stats', href: '#stats' },
  { label: 'Clients', href: '#features' },
  { label: 'Accredian Edge', href: '#usp' },
  { label: 'CAT', href: '#cat-framework' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Testimonials', href: '#testimonials' },
];

export type PartnerLogo = {
  name: string;
  logoSrc: string;
  logoAlt: string;
};

export const trustPartners: PartnerLogo[] = [
  {
    name: 'Reliance',
    logoSrc: '/Accredian/rel.png',
    logoAlt: 'Reliance Industries Limited',
  },
  {
    name: 'HCL',
    logoSrc: '/Accredian/hcl.png',
    logoAlt: 'HCL logo',
  },
  {
    name: 'IBM',
    logoSrc: '/Accredian/ibm.png',
    logoAlt: 'IBM logo',
  },
  {
    name: 'CRIF',
    logoSrc: '/Accredian/crif.png',
    logoAlt: 'CRIF logo',
  },
  {
    name: 'ADP',
    logoSrc: '/Accredian/adp.svg',
    logoAlt: 'ADP logo',
  },
  {
    name: 'Bayer',
    logoSrc: '/Accredian/bayer.svg',
    logoAlt: 'Bayer logo',
  },
];

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
};

export const domainExpertiseItems = [
  {
    title: 'Product & Innovation Hub',
    description: 'Build customer-centric products with research-backed learning paths.',
    iconPath: '/Accredian/default (19).svg',
  },
  {
    title: 'Gen-AI Mastery',
    description: 'Equip teams to use AI responsibly for automation and smarter decisions.',
    iconPath: '/Accredian/default (18).svg',
  },
  {
    title: 'Leadership Elevation',
    description: 'Strengthen managers and future leaders with coaching and strategy.',
    iconPath: '/Accredian/default (17).svg',
  },
  {
    title: 'Tech & Data Insights',
    description: 'Turn analytics into action with practical data literacy.',
    iconPath: '/Accredian/default (16).svg',
  },
  {
    title: 'Operations Excellence',
    description: 'Improve quality and execution with process-first learning.',
    iconPath: '/Accredian/default (15).svg',
  },
  {
    title: 'Digital Enterprise',
    description: 'Modernize digital workflows and cross-functional collaboration.',
    iconPath: '/Accredian/default (14).svg',
  },
  {
    title: 'Fintech Innovation Lab',
    description: 'Specialized programs for financial technology and innovation.',
    iconPath: '/Accredian/default (13).svg',
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
    label: 'Professionals Trained',
    description: 'Professionals Trained For Exceptional Career Success',
  },
  {
    value: '200+',
    label: 'Sessions Delivered',
    description: 'Sessions Delivered With Unmatched Learning Excellence',
  },
  {
    value: '5K+',
    label: 'Active Learners',
    description: 'Active Learners Engaged In Dynamic Courses',
  },
];

export type Testimonial = {
  company: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  logoSrc: string;
  logoAlt: string;
};

export const partnerTestimonials: Testimonial[] = [
  {
    company: 'ADP',
    quote:
      'Accredian turned our training vision into a practical program our managers could use immediately.',
    author: 'Priya Sharma',
    role: 'VP, People Development',
    location: 'Enterprise Client',
    logoSrc: '/Accredian/adp.svg',
    logoAlt: 'ADP logo',
  },
  {
    company: 'Bayer',
    quote:
      'The team was responsive, structured, and focused on outcomes. The learning experience felt tailored to our business.',
    author: 'Arjun Mehta',
    role: 'Learning Partner',
    location: 'Enterprise Client',
    logoSrc: '/Accredian/bayer.svg',
    logoAlt: 'Bayer logo',
  },
  {
    company: 'Reliance',
    quote:
      'We saw stronger engagement and better alignment across teams. Their support stayed consistent from kickoff to delivery.',
    author: 'Neha Kapoor',
    role: 'Talent & Capability Lead',
    location: 'Enterprise Client',
    logoSrc: '/Accredian/rel.png',
    logoAlt: 'Reliance Industries Limited logo',
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

export type USPStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  position: 'top' | 'bottom';
};

export const accredianEdgeSteps: USPStep[] = [
  {
    title: 'Tailored Solutions',
    description: "Programs customized to your organization's goals and challenges.",
    icon: Lightbulb,
    position: 'top',
  },
  {
    title: 'Expert Guidance',
    description: 'Learn from industry leaders with real-world success.',
    icon: MessageSquare,
    position: 'bottom',
  },
  {
    title: 'Innovative Framework',
    description: 'Proprietary methods for impactful, application-driven results.',
    icon: Settings2,
    position: 'top',
  },
  {
    title: 'Advanced Technology',
    description: 'State-of-the-art LMS for seamless learning experiences.',
    icon: Cpu,
    position: 'bottom',
  },
  {
    title: 'Diverse Offerings',
    description: 'Courses across industries, skill levels, and emerging fields.',
    icon: ArrowLeftRight,
    position: 'top',
  },
  {
    title: 'Proven Impact',
    description: 'Trusted by leading organizations for measurable ROI.',
    icon: Target,
    position: 'bottom',
  },
  {
    title: 'Flexible Delivery',
    description: 'Online and offline options tailored to your needs.',
    icon: Box,
    position: 'top',
  },
];