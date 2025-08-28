import React, { useCallback, useMemo } from 'react';
import Intouch from './assets/Placeholder (2).png';
import PillThought from './assets/Placeholder (3).png';
import Watonomous from './assets/future (1).png';
import Palkia from './assets/future (4).png';
import { useNavigate } from 'react-router-dom';
import PocketATS from './assets/pocket_ats_logo_no_shadow (1).png';
import UWaterloo from './assets/Waterloo logo.png';
import Shopify from './assets/Shopify.png';
import Googlelogo from './assets/Google Logo.svg';
import Palkialogo from './assets/Palkia_Logo-removebg-preview.png';
import Intouchlogo from './assets/IntouchCX logo.png';
import ShopifyLogo from './assets/Shopify Logo.png';
import PolarityLogo from './assets/startup (1).png';
import Polarity from './assets/Polarity (2).png';
import AforeLogo from './assets/Afore.jpg';

/* ===========================
   Types
   =========================== */

/**
 * Social link descriptor used to render social icon anchors.
 */
type SocialLink = {
  href: string;
  title?: string;
  ariaLabel?: string;
  element: JSX.Element;
};

/* ===========================
   Helpers
   =========================== */

/**
 * Safely opens an external URL in a new tab/window.
 * This is defensive: it validates the URL and guards against
 * environments where window is undefined. Errors are caught
 * and logged instead of thrown to avoid breaking the UI.
 *
 * @param url - The external URL to open.
 * @param target - Optional window target (default: "_blank").
 */
const safeOpenExternalUrl = (url: string, target: string = '_blank'): void => {
  try {
    if (!url || typeof url !== 'string') {
      console.error('safeOpenExternalUrl: invalid url', url);
      return;
    }
    if (typeof window === 'undefined' || typeof window.open !== 'function') {
      // Graceful no-op in non-browser environments
      console.warn('safeOpenExternalUrl: window.open not available in this environment');
      return;
    }
    window.open(url, target);
  } catch (error) {
    // Do not rethrow; log for diagnostics
    // keeping app resilient to unexpected failures
    // eslint-disable-next-line no-console
    console.error('safeOpenExternalUrl error', error);
  }
};

/**
 * Create the social links array with SVG icons.
 * Extracted to keep JSX concise and to centralize icon definitions.
 *
 * @returns Array of SocialLink objects for mapping in the UI.
 */
const createSocialLinks = (): SocialLink[] => [
  {
    href: 'https://github.com/shanebarakat',
    title: 'GitHub',
    ariaLabel: 'GitHub profile',
    element: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github transition-colors duration-300 hover:stroke-white">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/shane-barakat/',
    title: 'LinkedIn',
    ariaLabel: 'LinkedIn profile',
    element: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin transition-colors duration-300 hover:stroke-white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: 'mailto:srbaraka@uwaterloo.ca',
    title: 'Email',
    ariaLabel: 'Send email',
    element: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail transition-colors duration-300 hover:stroke-white">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    href: 'https://drive.google.com/file/d/1K2uE4zAwysAU6qhHIvyrjAnHwrpMt3s1/view?usp=sharing',
    title: 'Resume',
    ariaLabel: 'View resume',
    element: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-user transition-colors duration-300 hover:stroke-white">
        <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
        <path d="M15 18a3 3 0 1 0-6 0"/>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/>
        <circle cx="12" cy="13" r="2"/>
      </svg>
    ),
  },
];

/* ===========================
   Components / Subcomponents
   =========================== */

/**
 * SocialIconsRow renders a horizontal list of social icon anchors.
 *
 * @param props.links - SocialLink array to render.
 * @returns JSX element for a row of social links.
 */
const SocialIconsRow: React.FC<{ links: SocialLink[] }> = ({ links }) => {
  return (
    <>
      {links.map((linkItem) => (
        <a
          key={linkItem.href}
          href={linkItem.href}
          target="_blank"
          rel="noreferrer"
          title={linkItem.title}
          aria-label={linkItem.ariaLabel}
        >
          {linkItem.element}
        </a>
      ))}
    </>
  );
};

/* ===========================
   Main Component
   =========================== */

/**
 * Home
 *
 * Primary landing page component that showcases the author's profile,
 * recent accomplishments, and portfolio grid. This component:
 * - Uses memoization for static content arrays to avoid re-creating arrays on render.
 * - Centralizes external navigation through safe helper functions to improve testability.
 * - Provides defensive guards for browser APIs and external inputs.
 *
 * The visual structure and functionality are preserved from the original file,
 * while improving readability, maintainability, and safety.
 */
const Home: React.FC = () => {
  // Router navigation function with a descriptive name
  const navigateTo = useNavigate();

  /**
   * Safe wrapper around router navigation to avoid throwing in unexpected contexts.
   * Uses useCallback to ensure stable identity for handlers.
   *
   * @param path - internal route path to navigate to.
   */
  const safeNavigateTo = useCallback((path: string): void => {
    try {
      if (!path || typeof path !== 'string') {
        console.error('safeNavigateTo: invalid path', path);
        return;
      }
      navigateTo(path);
    } catch (error) {
      // Log and fail silently to keep UI responsive
      // eslint-disable-next-line no-console
      console.error('safeNavigateTo error', error);
    }
  }, [navigateTo]);

  /**
   * Memoized array of social links to be rendered in both mobile and desktop headers.
   * Keeps JSX concise and avoids duplication.
   */
  const socialLinks = useMemo(() => createSocialLinks(), []);

  /**
   * Stable callbacks for item-specific navigation handlers.
   * Kept minimal and pure (no side-effects outside safeOpenExternalUrl and safeNavigateTo).
   */
  const handleOpenIntouch = useCallback((): void => safeNavigateTo('/intouchcx'), [safeNavigateTo]);
  const handleOpenPillThought = useCallback((): void => safeNavigateTo('/pillthought'), [safeNavigateTo]);
  const handleOpenPalkia = useCallback((): void => safeNavigateTo('/palkia'), [safeNavigateTo]);

  const handleOpenExternal = useCallback((url: string) => {
    safeOpenExternalUrl(url, '_blank');
  }, []);

  /* ===========================
     Memoized content arrays for grid and recent items
     These are primarily static content; memoizing avoids reallocation
     across renders and clarifies the data model.
     =========================== */

  const portfolioGridItems = useMemo(() => [
    {
      imgSrc: Polarity,
      altText: 'Polarity',
      captionTitle: 'Co-Founder/CTO - Polarity (Backed by Afore Capital)',
      captionSubtitle: 'June 2025 - Present',
      onClick: () => handleOpenExternal('https://polarity.cc'),
    },
    {
      imgSrc: Shopify,
      altText: 'Shopify',
      captionTitle: 'Incoming SWE Intern - Shopify',
      captionSubtitle: 'Sept 2025 - Dec 2025',
      onClick: () => handleOpenExternal('https://www.shopify.com/ca'),
    },
    {
      imgSrc: Intouch,
      altText: 'IntouchCX',
      captionTitle: 'SWE Intern - IntouchCX',
      captionSubtitle: 'Jan 2025 - Apr 2025',
      onClick: handleOpenIntouch,
    },
    {
      imgSrc: Palkia,
      altText: 'Palkia',
      captionTitle: 'Project - Palkia',
      captionSubtitle: '2025',
      onClick: handleOpenPalkia,
    },
    {
      imgSrc: PillThought,
      altText: 'PillThought',
      captionTitle: 'Founding Engineer / COO - PillThought',
      captionSubtitle: 'Sept 2023 - April 2025',
      onClick: handleOpenPillThought,
    },
    {
      imgSrc: Watonomous,
      altText: 'WATO',
      captionTitle: 'Software Engineer - WATO Design Team',
      captionSubtitle: 'Jan 2025 - May 2025',
      onClick: () => handleOpenExternal('https://www.watonomous.ca/about'),
    },
  ], [handleOpenExternal, handleOpenIntouch, handleOpenPalkia, handleOpenPillThought]);

  /* ===========================
     Render
     =========================== */

  return (
    <div className="bg-black bg-[radial-gradient(circle,rgba(180,180,180,0.2)_1px,rgba(0,9,29,0)_1px)] bg-[size:20px_20px] no-scrollbar text-white min-h-screen w-screen flex flex-col justify-start items-center pt-16 px-0 scrollbar-y-hide">
      
      {/* Mobile header - Only visible on small screens */}
      <div className="lg:hidden flex flex-col items-center"> 
        <h1 className="text-[45px] sm:text-6xl sm:mb-6 font-hyperlegible font-semibold">Shane Barakat</h1>
        <h2 className="text-xl font-medium  text-center font-noto mb-6">
            Engineering Student at UWaterloo <br/>
            Seeking Summer 2026 Internship Oppurtunities 
          </h2>
        <div className="flex gap-4">
          <SocialIconsRow links={socialLinks} />
        </div> 
      </div>

      {/* Desktop header - visible only on large screens */}
      <div className="hidden lg:flex w-full max-w-screen-xl px-4 justify-between">
        {/* Left column with name and social links */}
        <div className="flex-col items-start flex w-[48%]">
          <h1 className="text-5xl font-hyperlegible font-semibold mb-4">Shane Barakat</h1>
          <h2 className="text-xl font-medium font-noto mb-6">
            Management Engineering Student at UWaterloo <br/>
            Seeking Summer 2026 Co-Op Oppurtunities (SWE, Data, Product)
          </h2>
          <div className="flex gap-4 mb-4">
            <SocialIconsRow links={socialLinks} />
          </div>
        </div>
        
        {/* Right column with Recently section - with offset to align with Palkia image */}
        <div className="w-[48%] pl-1">
          <h3 className="text-2xl font-hyperlegible font-semibold mb-3">Recently, I...</h3>
          <ul className="space-y-2 font-noto text-gray-300">
            <li className="flex items-center flex-wrap gap-1">
            → Founded 
            <a href="https://www.polarity.cc" target="_blank" rel="noreferrer" className="group inline-flex items-center">
              <img 
              src={PolarityLogo} 
              className='w-[17px] mr-1 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-8' 
              alt="Polarity"
              /> 
              <span className="text-gray-200 transition-all duration-300 group-hover:text-white group-hover:underline">
              Polarity
              </span>
            </a>
            , won SPURHACKS ($10k), now backed by <a href="https://www.afore.vc/portfolio" target="_blank" rel="noreferrer" className="group inline-flex items-center"><img 
              src={AforeLogo} 
              className='w-[17px] mr-1 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-8' 
              alt="Afore Capital"
              />  <span className="text-blue-400 transition-all duration-300 group-hover:text-blue group-hover:underline">
              Afore Capital
              </span> 
            </a>
            </li>
            <li className="flex items-center flex-wrap gap-1">
              → Secured Fall 2025 Co-Op at <a href="https://www.shopify.com/ca" target="_blank" rel="noreferrer" className="group inline-flex items-center">
              <img 
                src={ShopifyLogo} 
                className='w-[17px] ml-1 mr-1 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-8' 
                alt="Shopify"
              /> <span className="text-green-200 transition-all duration-300 group-hover:text-green-500 group-hover:underline">
              Shopify
              </span></a> as a Software Engineer Intern
            </li>
            <li className="flex items-center flex-wrap gap-1">
              → Built 
              <a href="https://pocket-ats.live" target="_blank" rel="noreferrer" className="group inline-flex items-center">
                <img 
                  src={PocketATS} 
                  className='w-[15px] ml-1 mr-1 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110' 
                  alt="Pocket ATS"
                />
                <span className="text-blue-300 transition-all duration-300 group-hover:text-blue-400 group-hover:underline">
                  Pocket ATS
                </span>
              </a> 
              and scaled to <span className="text-white">1500+ users</span> in one month
            </li>

            <li className="flex items-center flex-wrap gap-1">
              → Started <img src={UWaterloo} className='w-[22px] ml-1'/> Research role building <span className="text-white">AI/ML solutions</span> for Chicago Bureau of Police
            </li>

            <li className="flex items-center flex-wrap gap-1">
              → Won <img src={Googlelogo} className='w-[15px] ml-1'/> <span className="text-white">oogle's AI Innovation Award</span> for 
              <a href="https://palkia.me" target="_blank" rel="noreferrer" className="group inline-flex items-center">
                <img 
                  src={Palkialogo} 
                  className='w-[20px] ml-1 mr-1 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-6' 
                  alt="Palkia"
                />
                <span className="text-purple-400 transition-all duration-300 group-hover:text-purple-300 group-hover:underline">
                  Palkia
                </span>
              </a>
            </li>

            <li className="flex items-center flex-wrap gap-1">
              → Completed SWE Co-Op at 
              <a href="https://www.intouchcx.com/solutions/intouchai-automation/" target="_blank" rel="noreferrer" className="group inline-flex items-center">
                <img 
                  src={Intouchlogo} 
                  className='w-[20px] ml-1 mr-1 transform transition-all duration-300 group-hover:scale-110 group-hover:brightness-125' 
                  alt="IntouchCX"
                />
                <span className="text-green-400 transition-all duration-300 group-hover:text-green-300 group-hover:underline">
                  IntouchCX
                </span>
              </a> 
              building enterprise tech tools
            </li>

            <li className="text-white font-medium pt-1">See more of what I'm working on below ↓</li>
          </ul>
        </div>
      </div>
  
      {/* Grid Layout for all screen sizes */}
      <div className="w-full max-w-screen-xl mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {portfolioGridItems.map((gridItem) => (
            <div key={gridItem.altText + gridItem.captionTitle} className="flex flex-col items-start">
              <img
                src={gridItem.imgSrc}
                alt={gridItem.altText}
                className="rounded-lg hover:opacity-60 cursor-pointer w-full max-w-[800px] h-auto duration-300"
                onClick={() => {
                  try {
                    // Defensive guard for onClick handlers
                    if (typeof gridItem.onClick === 'function') {
                      gridItem.onClick();
                    }
                  } catch (error) {
                    // Log and swallow to avoid breaking the UI
                    // eslint-disable-next-line no-console
                    console.error('portfolio grid onClick error', error);
                  }
                }}
              />
              <p className="mt-2 text-5px sm:text-xl text-white font-noto">{gridItem.captionTitle}</p>
              <p className="text-base text-gray-400 font-noto">{gridItem.captionSubtitle}</p>
            </div>
          ))}

        </div>
      </div>

      {/* Footer */}
      <div className="flex bg-b gap-4 mt-8 justify-between w-full box-border border-t-2 bg-black border-gray-600">
        <p className="text-white flex items-center justify-start sm:text-base text-xs py-4 ml-9">Shane Barakat</p>
        <p className="text-white flex items-center py-4 justify-end sm:text-base text-xs mr-9">Last Update - May 2025</p>
      </div>
    </div>
  );
};

export default Home;