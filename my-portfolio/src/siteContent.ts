export const SITE_URL = 'https://shanebarakat.com';
export const SITE_NAME = 'Shane Barakat';

export type NavItem = { id: string; label: string; href: string };
export type SocialLink = { label: string; href: string };
export type WorkEntry = {
  title?: string;
  href?: string;
  meta?: string;
  role?: string;
  description?: string;
};
export type ProjectEntry = {
  title: string;
  href?: string;
  description: string;
  image?: string;
};
export type ResearchEntry = {
  title: string;
  meta: string;
  role: string;
  pdf: string;
  description: string;
};

export const NAV: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'research', label: 'Research', href: '/research' },
];

export const HOME = {
  intro:
    "I'm currently building Polarity, an applied research lab building self-improving models, on leave from engineering at UWaterloo.",
  introLinks: [{ label: 'Polarity', href: 'https://polarity.cc' }],
  manifesto: `I'm passionate about building agents and post-training research. The field moves fast and I find that exciting. My take on the future is that the frontier era is almost over, the moat is drying up, and the models that define what comes next will be open-source and built through RL, not gated behind a handful of labs. I want to work on systems that improve from their own experience instead of waiting on the next release.`,
};

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/shanebarakat' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shane-barakat/' },
  { label: 'X', href: 'https://x.com/shanebarakat_' },
];

export const WORK = {
  currently: [
    {
      title: 'Polarity',
      href: 'https://polarity.cc',
      meta: '(Present)',
      role: 'Co-Founder & CTO',
      description:
        'Post-training models to build collective intelligence. Backed by Afore Capital.',
    },
  ] satisfies WorkEntry[],
  previously: [
    {
      title: 'Shopify',
      href: 'https://www.shopify.com/ca',
      meta: '(2025)',
      role: 'Engineering',
      description: 'Built and rolled out onboarding agents to millions of merchants.',
    },
    {
      title: 'IntouchCX',
      href: 'https://www.intouchcx.com',
      meta: '(2025)',
      role: 'Engineering',
      description: 'Built out enterprise internal workflow systems end to end.',
    },
    {
      title: 'UWaterloo',
      meta: '(2025)',
      role: 'Undergraduate Research Assistant under Dr. Ken McKay',
      description: 'Built models and solutions for the Chicago Bureau of Police.',
    },
    {
      meta: '(2024 and before)',
      description: 'A bunch of startups and other roles.',
    },
  ] satisfies WorkEntry[],
};

export const PROJECTS: ProjectEntry[] = [
  {
    title: 'Zenith',
    href: 'https://zenith.polarity.so/',
    description:
      'Sub-millisecond p95 at a billion rows. Beats Postgres and ClickHouse on agent trace benchmarks. 130+ GitHub stars.',
  },
  {
    title: 'Palkia',
    description:
      "RAG context engine for retrieving relevant codebase context and generating structured bug reports. Won Google's AI Innovation Award.",
  },
];

export const RESEARCH: ResearchEntry[] = [
  {
    title: 'Behavioral Hot Paths',
    meta: '(2026)',
    role: 'Author, Polarity Labs',
    pdf: '/research/hotpaths.pdf',
    description:
      'Discrete, cost-aware discovery of recurring agent behaviors for self-specializing agents.',
  },
  {
    title: 'QA-Bench',
    meta: '(2026)',
    role: 'Co-author, Polarity Labs',
    pdf: '/research/qa-bench.pdf',
    description:
      'Benchmark for evaluating agent QA across bug detection, test generation, and regression testing on 506 real-world tasks.',
  },
  {
    title: 'Omnigrep',
    meta: '(2025)',
    role: 'Co-author, Polarity Labs',
    pdf: '/research/omnigrep.pdf',
    description:
      'Multi-turn agentic code search. 33% relative improvement over Claude Code on CodeSearchEval.',
  },
];

export const SITE_CONTENT = {
  name: SITE_NAME,
  url: SITE_URL,
  nav: NAV,
  home: HOME,
  socials: SOCIALS,
  work: WORK,
  projects: PROJECTS,
  research: RESEARCH,
} as const;