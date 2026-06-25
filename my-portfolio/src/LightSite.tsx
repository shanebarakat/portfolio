import React, { useEffect, useState } from 'react';
import PalkiaRecognition from './assets/Palkia Recognition.png';

/**
 * LightSite — the main, light/white version of the portfolio.
 *
 * A small classic personal-site format: serif throughout, blue text links,
 * a top nav, and the name as a large bold heading on every page. The site is
 * a static SPA (Vercel rewrites every path to index.html), so we pick the
 * page from the current pathname instead of pulling in a router. Nav items
 * are plain <a> links (a full reload is fine for a tiny static site).
 *
 *   "/"          → Home
 *   "/work"      → Work
 *   "/projects"  → Projects
 *   "/research"  → Research
 */

const NAME = 'Shane Barakat';

type PageId = 'home' | 'work' | 'projects' | 'research';

const NAV: { id: PageId; label: string; href: string }[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'research', label: 'Research', href: '/research' },
];

/* ===========================
   Shared inline pieces
   =========================== */

/** A blue text link (no underline until hover) — matches the reference site. */
const A: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-900"
  >
    {children}
  </a>
);

/** A bold serif section heading, e.g. "Currently:" / "Socials". */
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className="mb-3 mt-9 text-xl font-bold text-zinc-900">{children}</h2>
);

function useOverlayLock(onClose: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
}

/** Full-screen image overlay, centered. Click outside or press Escape to close. */
const ImageLightbox: React.FC<{
  src: string;
  alt: string;
  onClose: () => void;
}> = ({ src, alt, onClose }) => {
  useOverlayLock(onClose);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[85vh] max-w-full rounded-sm object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

/** Embedded PDF viewer with download. Click outside or press Escape to close. */
const PdfLightbox: React.FC<{
  src: string;
  title: string;
  downloadName: string;
  onClose: () => void;
}> = ({ src, title, downloadName, onClose }) => {
  useOverlayLock(onClose);

  return (
    <div
      className="fixed inset-0 z-50 flex bg-black/70 p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="mx-auto flex h-full w-full max-w-4xl flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="font-serif text-lg font-bold text-white">{title}</span>
          <a
            href={src}
            download={downloadName}
            className="shrink-0 text-sm text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
          >
            Download
          </a>
        </div>
        <iframe
          src={src}
          title={title}
          className="min-h-0 flex-1 rounded-sm border-0 bg-white shadow-2xl"
        />
      </div>
    </div>
  );
};

/** One Work/Research entry: company name, optional role, then what you did. */
const Entry: React.FC<{
  title?: string;
  href?: string;
  onTitleClick?: () => void;
  meta?: string;
  role?: string;
  children?: React.ReactNode;
}> = ({ title, href, onTitleClick, meta, role, children }) => (
  <div className="mb-5">
    {(title || meta) && (
      <p className="text-[16px]">
        {title &&
          (onTitleClick ? (
            <button
              type="button"
              onClick={onTitleClick}
              className="font-bold text-zinc-900 hover:underline"
            >
              {title}
            </button>
          ) : href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-zinc-900 hover:underline"
            >
              {title}
            </a>
          ) : (
            <span className="font-bold text-zinc-900">{title}</span>
          ))}
        {meta && (
          <span className="text-zinc-500">
            {title ? ' ' : ''}
            {meta}
          </span>
        )}
      </p>
    )}
    {role && (
      <p className="mt-0.5 text-[16px] text-zinc-600">{role}</p>
    )}
    {children && (
      <p className="mt-1 text-[16px] leading-relaxed text-zinc-900">
        {children}
      </p>
    )}
  </div>
);

/* ===========================
   Pages
   =========================== */

const Home: React.FC = () => (
  <>
    <p className="mb-5 text-[16px] font-semibold leading-relaxed text-zinc-900">
      I'm currently building <A href="https://polarity.cc">Polarity</A>, an
      applied research lab building self-improving models, on leave from
      engineering at <A href="https://uwaterloo.ca">UWaterloo</A>.
    </p>
    <p className="mb-5 text-[16px] font-semibold leading-relaxed text-zinc-900">
      I'm passionate about building agents and post-training research. The field
      moves fast and I find that exciting. My take on the future is that the
      frontier era is almost over, the moat is drying up, and the models that
      define what comes next will be open-source and built through RL, not gated
      behind a handful of labs. I want to work on systems that improve from
      their own experience instead of waiting on the next release.
    </p>
    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-1 text-[16px]">
      <A href="https://github.com/shanebarakat">GitHub</A>
      <A href="https://www.linkedin.com/in/shane-barakat/">LinkedIn</A>
      <A href="https://x.com/shanebarakat_">X</A>
    </div>
  </>
);

const Work: React.FC = () => (
  <>
    <SectionHeading>Currently:</SectionHeading>
    <Entry
      title="Polarity"
      href="https://polarity.cc"
      meta="(Present)"
      role="Co-Founder & CTO"
    >
      Post-training models to build collective intelligence. Backed by Afore
      Capital.
    </Entry>

    <SectionHeading>Previously:</SectionHeading>
    <Entry
      title="Shopify"
      href="https://www.shopify.com/ca"
      meta="(2025)"
      role="Engineering"
    >
      Built and rolled out onboarding agents to millions of merchants.
    </Entry>
    <Entry
      title="IntouchCX"
      href="https://www.intouchcx.com"
      meta="(2025)"
      role="Engineering"
    >
      Built out enterprise internal workflow systems end to end.
    </Entry>
    <Entry
      title="UWaterloo"
      href="https://uwaterloo.ca"
      meta="(2025)"
      role="Undergraduate Research Assistant under Dr. Ken McKay"
    >
      Built models and solutions for the Chicago Bureau of Police.
    </Entry>
    <Entry meta="(2024 and before)">
      A bunch of startups and other roles.
    </Entry>
  </>
);

const Projects: React.FC = () => {
  const [showPalkiaPhoto, setShowPalkiaPhoto] = useState(false);

  return (
    <>
      <Entry title="Zenith" href="https://zenith.polarity.so/">
        Sub-millisecond p95 at a billion rows. Beats Postgres and ClickHouse on
        agent trace benchmarks. 130+ GitHub stars.
      </Entry>
      <Entry
        title="Palkia"
        onTitleClick={() => setShowPalkiaPhoto(true)}
      >
        RAG context engine for retrieving relevant codebase context and
        generating structured bug reports. Won Google's AI Innovation Award.
      </Entry>
      {showPalkiaPhoto && (
        <ImageLightbox
          src={PalkiaRecognition}
          alt="Shane Barakat with the Google AI Innovation Award for Palkia"
          onClose={() => setShowPalkiaPhoto(false)}
        />
      )}
    </>
  );
};

type ResearchPaper = {
  title: string;
  meta: string;
  role: string;
  pdf: string;
  downloadName: string;
  description: string;
};

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    title: 'Behavioral Hot Paths',
    meta: '(2026)',
    role: 'Author, Polarity Labs',
    pdf: '/research/hotpaths.pdf',
    downloadName: 'behavioral-hot-paths.pdf',
    description:
      'Discrete, cost-aware discovery of recurring agent behaviors for self-specializing agents.',
  },
  {
    title: 'Omnigrep',
    meta: '(2025)',
    role: 'Co-author, Polarity Labs',
    pdf: '/research/omnigrep.pdf',
    downloadName: 'omnigrep.pdf',
    description:
      'Multi-turn agentic code search. 33% relative improvement over Claude Code on CodeSearchEval.',
  },
];

const Research: React.FC = () => {
  const [openPaper, setOpenPaper] = useState<ResearchPaper | null>(null);

  return (
    <>
      {RESEARCH_PAPERS.map((paper) => (
        <Entry
          key={paper.title}
          title={paper.title}
          meta={paper.meta}
          role={paper.role}
          onTitleClick={() => setOpenPaper(paper)}
        >
          {paper.description}
        </Entry>
      ))}
      {openPaper && (
        <PdfLightbox
          src={openPaper.pdf}
          title={openPaper.title}
          downloadName={openPaper.downloadName}
          onClose={() => setOpenPaper(null)}
        />
      )}
    </>
  );
};

const PAGES: Record<PageId, React.FC> = {
  home: Home,
  work: Work,
  projects: Projects,
  research: Research,
};

/* ===========================
   Layout + router
   =========================== */

function currentPage(): PageId {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const match = NAV.find((n) => n.href === path);
  return match ? match.id : 'home';
}

const LightSite: React.FC = () => {
  const active = currentPage();
  const Page = PAGES[active];

  return (
    <div className="min-h-screen w-full bg-stone-50 font-serif font-medium text-zinc-900 antialiased">
      <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
        {/* Nav */}
        <nav className="mb-9 flex flex-wrap gap-x-6 gap-y-1 text-base">
          {NAV.map((n) =>
            n.id === active ? (
              <span key={n.id} className="font-bold text-zinc-900">
                {n.label}
              </span>
            ) : (
              <a
                key={n.id}
                href={n.href}
                className="text-zinc-500 hover:text-zinc-900 hover:underline"
              >
                {n.label}
              </a>
            ),
          )}
        </nav>

        {/* Name */}
        <h1 className="mb-7 text-4xl font-bold tracking-tight text-zinc-900">
          {NAME}
        </h1>

        {/* Page content */}
        <Page />
      </main>
    </div>
  );
};

export default LightSite;
