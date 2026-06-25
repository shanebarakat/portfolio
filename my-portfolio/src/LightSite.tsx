import React, { useEffect, useState } from 'react';
import PalkiaRecognition from './assets/Palkia Recognition.png';
import {
  NAV,
  PROJECTS,
  RESEARCH,
  SITE_NAME,
  SOCIALS,
  WORK,
  HOME,
  type ResearchEntry,
} from './siteContent';

/**
 * LightSite — the main, light/white version of the portfolio.
 *
 * Agent-readable mirrors are generated at build time:
 *   /content.json, /llms.txt, and static HTML under /work, /projects, /research.
 */

type PageId = 'home' | 'work' | 'projects' | 'research';

/* ===========================
   Shared inline pieces
   =========================== */

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

const Entry: React.FC<{
  title?: string;
  href?: string;
  pdfHref?: string;
  onTitleClick?: () => void;
  meta?: string;
  role?: string;
  children?: React.ReactNode;
}> = ({ title, href, pdfHref, onTitleClick, meta, role, children }) => {
  const titleNode = title ? (
    onTitleClick ? (
      <a
        href={pdfHref ?? '#'}
        onClick={(e) => {
          e.preventDefault();
          onTitleClick();
        }}
        className="font-bold text-zinc-900 hover:underline"
      >
        {title}
      </a>
    ) : href ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="font-bold text-zinc-900 hover:underline"
      >
        {title}
      </a>
    ) : pdfHref ? (
      <a href={pdfHref} className="font-bold text-zinc-900 hover:underline">
        {title}
      </a>
    ) : (
      <span className="font-bold text-zinc-900">{title}</span>
    )
  ) : null;

  return (
    <div className="mb-5">
      {(title || meta) && (
        <p className="text-[16px]">
          {titleNode}
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
};

/* ===========================
   Pages
   =========================== */

const Home: React.FC = () => (
  <>
    <p className="mb-5 text-[16px] font-semibold leading-relaxed text-zinc-900">
      I'm currently building <A href="https://polarity.cc">Polarity</A>, an
      applied research lab building self-improving models, on leave from
      engineering at UWaterloo.
    </p>
    <p className="mb-5 text-[16px] font-semibold leading-relaxed text-zinc-900">
      {HOME.manifesto}
    </p>
    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-1 text-[16px]">
      {SOCIALS.map((s) => (
        <A key={s.label} href={s.href}>
          {s.label}
        </A>
      ))}
    </div>
  </>
);

const Work: React.FC = () => (
  <>
    <SectionHeading>Currently:</SectionHeading>
    {WORK.currently.map((entry) => (
      <Entry
        key={entry.title}
        title={entry.title}
        href={entry.href}
        meta={entry.meta}
        role={entry.role}
      >
        {entry.description}
      </Entry>
    ))}

    <SectionHeading>Previously:</SectionHeading>
    {WORK.previously.map((entry, i) => (
      <Entry
        key={entry.title ?? entry.meta ?? i}
        title={entry.title}
        href={entry.href}
        meta={entry.meta}
        role={entry.role}
      >
        {entry.description}
      </Entry>
    ))}
  </>
);

const Projects: React.FC = () => {
  const [showPalkiaPhoto, setShowPalkiaPhoto] = useState(false);

  return (
    <>
      {PROJECTS.map((project) =>
        project.title === 'Palkia' ? (
          <Entry
            key={project.title}
            title={project.title}
            onTitleClick={() => setShowPalkiaPhoto(true)}
          >
            {project.description}
          </Entry>
        ) : (
          <Entry
            key={project.title}
            title={project.title}
            href={project.href}
          >
            {project.description}
          </Entry>
        ),
      )}
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

const Research: React.FC = () => {
  const [openPaper, setOpenPaper] = useState<ResearchEntry | null>(null);

  return (
    <>
      {RESEARCH.map((paper) => (
        <Entry
          key={paper.title}
          title={paper.title}
          meta={paper.meta}
          role={paper.role}
          pdfHref={paper.pdf}
          onTitleClick={() => setOpenPaper(paper)}
        >
          {paper.description}
        </Entry>
      ))}
      {openPaper && (
        <PdfLightbox
          src={openPaper.pdf}
          title={openPaper.title}
          downloadName={`${openPaper.title.toLowerCase().replace(/\s+/g, '-')}.pdf`}
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

function currentPage(): PageId {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const match = NAV.find((n) => n.href === path);
  return (match?.id as PageId) ?? 'home';
}

const LightSite: React.FC = () => {
  const active = currentPage();
  const Page = PAGES[active];

  return (
    <div className="min-h-screen w-full bg-stone-50 font-serif font-medium text-zinc-900 antialiased">
      <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
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

        <h1 className="mb-7 text-4xl font-bold tracking-tight text-zinc-900">
          {SITE_NAME}
        </h1>

        <Page />
      </main>
    </div>
  );
};

export default LightSite;