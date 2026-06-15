import React from 'react';

// Company / project logos
import PolarityLogo from './assets/polarity.png';
import UWaterloo from './assets/Waterloo logo.png';
import ShopifyLogo from './assets/Shopify Logo.png';
import Intouchlogo from './assets/IntouchCX logo.png';
import Palkialogo from './assets/Palkia_Logo-removebg-preview.png';
import GoogleLogo from './assets/Google Logo.svg';

/* ===========================
   Inline building blocks
   =========================== */

/** A logo chip rendered inline before a company/project name. Vertically
 *  offset so it sits centered on the text without lifting the text baseline. */
const Logo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="mr-1.5 inline-block h-4 w-4 rounded-[4px] object-contain align-[-0.18em]"
  />
);

/** An external link rendered as bold + underlined, optionally with a leading
 *  logo. Inline (not flex) so the text shares the surrounding baseline. */
const Ref: React.FC<{
  href: string;
  logo?: string;
  alt?: string;
  children: React.ReactNode;
}> = ({ href, logo, alt, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group whitespace-nowrap font-semibold text-white underline decoration-zinc-600 decoration-1 underline-offset-[3px] transition-colors hover:decoration-white"
  >
    {logo && <Logo src={logo} alt={alt ?? ''} />}
    {children}
  </a>
);

/** Top-level "◆" bullet row. */
const Diamond: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-3 leading-relaxed">
    <span aria-hidden className="mt-[2px] select-none text-[10px] text-zinc-600">
      ◆
    </span>
    <span className="flex-1">{children}</span>
  </li>
);

/** Nested "↳" sub-bullet row. */
const Sub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-2 leading-relaxed text-zinc-400">
    <span aria-hidden className="select-none text-zinc-600">
      ↳
    </span>
    <span className="flex-1">{children}</span>
  </li>
);

/* ===========================
   Social icons
   =========================== */

type Social = { href: string; label: string; svg: JSX.Element };

const iconClass = 'transition-colors duration-300 stroke-zinc-500 group-hover:stroke-white';

const socials: Social[] = [
  {
    href: 'https://github.com/shanebarakat',
    label: 'GitHub',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/shane-barakat/',
    label: 'LinkedIn',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/shaneislocked/',
    label: 'Instagram',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: 'mailto:srbaraka@uwaterloo.ca',
    label: 'Email',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const SocialRow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-5 ${className}`}>
    {socials.map((s) => (
      <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label} className="group">
        {s.svg}
      </a>
    ))}
  </div>
);

/* ===========================
   Page
   =========================== */

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black font-sans text-zinc-300 antialiased">
      <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-white">shane barakat</h1>
          <nav className="flex items-center gap-5 text-sm text-zinc-500">
            <SocialRow />
          </nav>
        </header>

        {/* Status line */}
        <div className="mb-8 flex gap-3 text-[15px] leading-relaxed text-zinc-400">
          <span aria-hidden className="mt-[2px] select-none text-[10px] text-transparent">◆</span>
          <span className="flex-1">
            Co-Founder / CTO @ <Ref href="https://polarity.cc" logo={PolarityLogo} alt="Polarity">Polarity</Ref>
          </span>
        </div>

        {/* Now / building / previously */}
        <ul className="space-y-3 text-[15px]">
          <Diamond>
            on leave from Management Engineering @{' '}
            <Ref href="https://uwaterloo.ca" logo={UWaterloo} alt="UWaterloo">UWaterloo</Ref>
          </Diamond>
          <Diamond>
            <span className="italic text-zinc-200">what i've been working on:</span>
            <ul className="mt-2 space-y-2">
              <Sub>
                founded{' '}
                <Ref href="https://polarity.cc" logo={PolarityLogo} alt="Polarity">Polarity</Ref>
                {' '}— Building Self Improving Models
              </Sub>
              <Sub>
                turned down a{' '}
                <span className="whitespace-nowrap text-zinc-200">
                  <Logo src={GoogleLogo} alt="Google" />Google
                </span>{' '}
                SWE internship to build{' '}
                <Ref href="https://polarity.cc" logo={PolarityLogo} alt="Polarity">Polarity</Ref>
                {' '}full-time
              </Sub>
              <Sub>
                grew{' '}
                <Ref href="https://www.instagram.com/shaneislocked/" alt="shaneislocked">@shaneislocked</Ref>
                {' '}to <span className="text-zinc-200">2.9k followers</span> and{' '}
                <span className="text-zinc-200">6M+ views</span>
              </Sub>
            </ul>
          </Diamond>

          <Diamond>
            <span className="italic text-zinc-200">previously:</span>
            <ul className="mt-2 space-y-2">
              <Sub>
                SWE Intern @{' '}
                <Ref href="https://www.shopify.com/ca" logo={ShopifyLogo} alt="Shopify">Shopify</Ref>
                {' '}<span className="text-zinc-600">· 2025</span>
              </Sub>
              <Sub>
                SWE Intern @{' '}
                <Ref href="https://www.intouchcx.com" logo={Intouchlogo} alt="IntouchCX">IntouchCX</Ref>
                {' '}<span className="text-zinc-600">· 2025</span>
              </Sub>
              <Sub>
                research @{' '}
                <Ref href="https://uwaterloo.ca" logo={UWaterloo} alt="UWaterloo">UWaterloo</Ref>
                {' '}<span className="text-zinc-600">· 2025</span>
              </Sub>
              <Sub>
                Founding Engineer @ <span className="font-semibold text-white">PillThought</span>
                {' '}<span className="text-zinc-600">· 2023–2025</span>
              </Sub>
              <Sub>
                Software Engineer @{' '}
                <Ref href="https://www.watonomous.ca/about" alt="WATO">WATO Design Team</Ref>
                {' '}<span className="text-zinc-600">· 2025</span>
              </Sub>
              <Sub>
                won{' '}
                <span className="whitespace-nowrap text-zinc-200">
                  <Logo src={GoogleLogo} alt="Google" />Google's
                </span>{' '}
                <span className="text-zinc-200">AI Innovation Award</span> for{' '}
                <Ref href="https://www.linkedin.com/posts/shane-barakat_google-just-gave-me-an-award-this-week-ugcPost-7301402456578494465-FcdB/" logo={Palkialogo} alt="Palkia">Palkia</Ref>
                {' '}<span className="text-zinc-600">· 2025</span>
              </Sub>
            </ul>
          </Diamond>
        </ul>

        {/* Footer */}
        <footer className="mt-16 border-t border-zinc-900 pt-8 text-center">
          <span className="text-xs text-zinc-600">2026 © Shane Barakat</span>
        </footer>
      </main>
    </div>
  );
};

export default Home;
