import React, { useEffect } from 'react';
import PillThought from './assets/Placeholder (3).png';
import PharmasaveVideo from './assets/PillThought Market Video 2.mov';
import Origins from './assets/origins.png';
import achievements from './assets/achievments.png';
import future from './assets/future.png';

const IMAGE_CLASS = 'rounded-lg cursor-pointer w-full h-auto mb-6';
const CONTAINER_MAX_WIDTH = 'w-full max-w-3xl mt-2';

/**
 * Helper to safely render an image element.
 * Performs defensive checks to avoid rendering when src is missing or invalid.
 *
 * @param src - Image source path (may be undefined in some bundling scenarios)
 * @param alt - Alt text for accessibility
 * @returns JSX.Element | null
 */
function renderImage(src: string | undefined, alt: string): JSX.Element | null {
  if (!src || typeof src !== 'string') {
    // Defensive: if image source is not available, return null to avoid broken UI
    return null;
  }
  return <img src={src} alt={alt} className={IMAGE_CLASS} />;
}

/**
 * Helper to render a titled section with optional media and body content.
 * Keeps repeated rendering patterns consolidated and easier to maintain.
 *
 * @param title - Section heading text
 * @param body - Body content (can be any React node)
 * @param media - Optional media node (image/video) to render above the body
 * @returns JSX.Element
 */
function renderSection(title: string, body: React.ReactNode, media?: React.ReactNode): JSX.Element {
  return (
    <div className="text-left">
      <h2 className="text-[25px] sm:text-3xl font-normal mb-4 font-hyperlegible">{title}</h2>
      {media}
      <div>{body}</div>
    </div>
  );
}

const About: React.FC = () => {
  // Scroll to top on mount. Guard with typeof window to support SSR environments.
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.scrollTo) {
        window.scrollTo(0, 0);
      }
    } catch (error) {
      // Fail-safe: if scrolling errors for any reason, avoid crashing the component.
      // Keep error handling minimal and non-intrusive to preserve UX.
      // eslint-disable-next-line no-console
      console.error('Failed to scroll to top on About mount:', error);
    }
  }, []);

  return (
    <div className="bg-black text-sm sm:text-base text-white min-h-screen w-screen flex flex-col justify-center items-center px-6">
      {/* Container for Links and Content */}
      <div className={CONTAINER_MAX_WIDTH}>
        {/* Top Links */}
        <div className="w-full flex justify-between px-6 py-4">
          <a href="/" className="text-gray-500 font-noto hover:text-blue-500 duration-300">
            ← Back to Home
          </a>
          <a
            href="https://pillthought.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 font-noto hover:text-blue-500 duration-300"
          >
            Company Website
          </a>
        </div>

        {/* Content */}
        <div className="p-4">
          <h1 className="text-[35px] sm:text-5xl font-hyperlegible font-medium mb-3 text-center">PillThought</h1>
          <h2 className="text-center font-noto">Founding Engineer/COO</h2>
          <h2 className="mb-4 text-gray-500 text-center font-noto">Sept 2023 - April 2025</h2>
          <div className="flex justify-center">
            {/* Main logo image: use helper for defensive rendering */}
            {renderImage(PillThought, 'PillThought Logo')}
          </div>

          {/* Detailed Text Section */}
          <div className="text-left">
            <h2 className="text-[25px] sm:text-3xl font-normal mb-4 font-hyperlegible">Summary</h2>
            <p className="sm:text-lg text-[12px] mb-6 leading-relaxed font-noto text-gray-400">
              PillThought Technologies is a software company founded by University of Waterloo and Wilfrid Laurier University students, focused on developing innovative solutions for local pharmacies, healthcare centers, and hospitals. As the Founding Engineer and COO, I{' '}
              <span className="text-white">lead software development </span>
              initiatives while <span className="text-white">managing the company’s operations and sales teams.</span> Our mission is to modernize the healthcare industry with affordable, effective solutions.
            </p>

            {renderSection(
              'Origins',
              <p className="sm:text-lg text-[12px] mb-6 leading-relaxed text-gray-400">
                PillThought started as a vision shared by three close friends during our first year of university: Jay, a Pharmacy student (middle); Alex, a Computational Mathematics student (right); and myself, a Management Engineering student. Our goal was to combine our unique skill sets to address the technological gaps in the healthcare industry. By building impactful and cost-effective software solutions, we aim to make a tangible difference in the field while fostering affordability and accessibility.
              </p>,
              // Media: origins image rendered via helper
              renderImage(Origins, 'Origins')
            )}

            <h2 className="text-[20px] sm:text-3xl font-normal mb-4 font-hyperlegible">Campus Pharmasave Mobile App</h2>
            {/* Defensive: ensure video source exists before rendering video element */}
            {PharmasaveVideo ? (
              <video
                src={PharmasaveVideo}
                className={IMAGE_CLASS}
                autoPlay
                muted
                playsInline
                loop
              />
            ) : null}
            <p className="sm:text-lg text-[12px] mb-6 leading-relaxed font-noto text-gray-400">
              One of our standout projects is the Campus Pharmasave Mobile App, developed for the Campus Pharmasave Pharmacy in Waterloo, Ontario. This app serves as a digital coupon book, offering students discounts on medications, vitamins, and other products. It also allows users to book appointments and receive notifications when prescriptions are ready for pickup. The app has been a game-changer, <span className="text-white">increasing the pharmacy’s revenue by 20%</span> while earning a <span className="text-white">5-star rating on the iOS App Store</span>, with glowing reviews from students and pharmacy staff alike.
            </p>

            {renderSection(
              'Partners & Achievements',
              <p className="sm:text-lg text-[12px] mb-6 leading-relaxed font-noto text-gray-400">
                We’ve built strong partnerships with organizations such as Campus Pharmasave, University of Waterloo Campus Pharmasave, SMG Pharmacy, IronOak Pharmacy, and more. Our efforts have been recognized with a <span className="text-white">Velocity Cornerstone grant </span>from the University of Waterloo's startup incubator and a <span className="text-white"> partnership with BMO Bank</span> to introduce tailored financial solutions for pharmacies.
              </p>,
              renderImage(achievements, 'Achievements')
            )}

            <h2 className="text-[25px] sm:text-3xl font-normal mb-4 font-hyperlegible">Future Goals</h2>
            <p className="sm:text-lg text-[12px] mb-6 leading-relaxed text-gray-400 font-noto">
              Looking ahead, we aim to expand our reach to more pharmacies and healthcare centers across the Waterloo Region and beyond. Our vision includes offering advanced financial solutions to support these institutions, growing our team, and continuing to innovate within the healthcare industry. Every step forward brings us closer to transforming the way pharmacies operate, ensuring that both businesses and their customers thrive.
            </p>
            {renderImage(future, 'Future')}
          </div>
        </div>
      </div>
      <div className="flex bg-b gap-4 mt-8 justify-between w-full box-border border-t-2 border-gray-600">
        <p className="text-gray-400 flex sm:text-base text-xs items-center justify-start py-4 ml-9">Shane Barakat</p>
        <p className="text-gray-400 flex sm:text-base text-xs items-center py-4 justify-end mr-9">Last Update - February 2025</p>
      </div>
    </div>
  );
};

export default About;