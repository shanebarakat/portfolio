import React, { useEffect, useMemo } from 'react';
import pillThoughtLogo from './assets/Placeholder (3).png';
import pharmasaveVideo from './assets/PillThought Market Video 2.mov';
import originsImage from './assets/origins.png';
import achievementsImage from './assets/achievments.png';
import futureImage from './assets/future.png';

interface AboutProps {}

/**
 * About page component that displays company information and media.
 *
 * This component intentionally has no props. It scrolls the window to top on mount,
 * renders a set of static images and a video, and shows a footer with the last update.
 *
 * Notes:
 * - Media sources are validated before being used to avoid runtime errors if assets are missing.
 * - Window operations are guarded with feature detection and localized try/catch.
 */
const About: React.FC<AboutProps> = () => {
  // Ensure the page loads scrolled to top; guard against environments without window
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.scrollTo !== 'function') return;
    try {
      window.scrollTo(0, 0);
    } catch (error) {
      // Localized error handling: log but do not break rendering
      // This can fail in restrictive environments; not critical to the component
      // eslint-disable-next-line no-console
      console.error('Failed to scroll to top on mount:', error);
    }
  }, []);

  // Memoize static strings and validated media sources to avoid re-computation on re-renders
  const lastUpdateText = useMemo(() => 'Last Update - February 2025', []);
  const companyNameText = useMemo(() => 'Shane Barakat', []);
  const validatedMediaSources = useMemo(() => {
    const isNonEmptyString = (value: unknown): value is string =>
      typeof value === 'string' && value.trim().length > 0;

    return {
      logo: isNonEmptyString(pillThoughtLogo) ? pillThoughtLogo : '',
      video: isNonEmptyString(pharmasaveVideo) ? pharmasaveVideo : '',
      origins: isNonEmptyString(originsImage) ? originsImage : '',
      achievements: isNonEmptyString(achievementsImage) ? achievementsImage : '',
      future: isNonEmptyString(futureImage) ? futureImage : '',
    };
  }, []);

  /**
   * Small helper to render an image if the source is valid.
   * Keeps markup DRY for repeated image blocks.
   */
  const renderImageBlock = (src: string, altText: string) => {
    if (!src) {
      // If an asset failed validation, render nothing to avoid broken images
      return null;
    }
    return (
      <img
        src={src}
        alt={altText}
        className="rounded-lg cursor-pointer w-full h-auto mb-6"
      />
    );
  };

  /**
   * Helper to render the top navigation links row.
   */
  const renderTopLinks = () => (
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
  );

  return (
    <div className="bg-black text-sm sm:text-base text-white min-h-screen w-screen flex flex-col justify-center items-center px-6">
      {/* Container for Links and Content */}
      <div className="w-full max-w-3xl mt-2">
        {/* Top Links */}
        {renderTopLinks()}

        {/* Content */}
        <div className="p-4">
          <h1 className="text-[35px] sm:text-5xl font-hyperlegible font-medium mb-3 text-center">PillThought</h1>
          <h2 className="text-center font-noto">Founding Engineer/COO</h2>
          <h2 className="mb-4 text-gray-500 text-center font-noto">Sept 2023 - April 2025</h2>
          <div className="flex justify-center">
            {renderImageBlock(validatedMediaSources.logo, 'PillThought Logo')}
          </div>

          {/* Detailed Text Section */}
          <div className="text-left">
            <h2 className="text-[25px] sm:text-3xl font-normal mb-4 font-hyperlegible">Summary</h2>
            <p className="sm:text-lg text-[12px] mb-6 leading-relaxed font-noto text-gray-400">
              PillThought Technologies is a software company founded by University of Waterloo and Wilfrid Laurier University students, focused on developing innovative solutions for local pharmacies, healthcare centers, and hospitals. As the Founding Engineer and COO, I <span className = 'text-white'>lead software development </span>initiatives while <span className = 'text-white'>managing the company’s operations and sales teams.</span> Our mission is to modernize the healthcare industry with affordable, effective solutions.
            </p>

            <h2 className="text-[25px] sm:text-3xl font-normal mb-4 font-hyperlegible">Origins</h2>
            {renderImageBlock(validatedMediaSources.origins, 'Origins')}
            <p className="sm:text-lg text-[12px] mb-6 leading-relaxed text-gray-400">
              PillThought started as a vision shared by three close friends during our first year of university: Jay, a Pharmacy student (middle); Alex, a Computational Mathematics student (right); and myself, a Management Engineering student. Our goal was to combine our unique skill sets to address the technological gaps in the healthcare industry. By building impactful and cost-effective software solutions, we aim to make a tangible difference in the field while fostering affordability and accessibility.
            </p>

            <h2 className="text-[20px] sm:text-3xl font-normal mb-4 font-hyperlegible">Campus Pharmasave Mobile App</h2>
            {validatedMediaSources.video ? (
              <video
                src={validatedMediaSources.video}
                className="rounded-lg cursor-pointer w-full h-auto mb-6"
                autoPlay
                muted
                playsInline
                loop
              />
            ) : null}
            <p className="sm:text-lg text-[12px] mb-6 leading-relaxed font-noto text-gray-400">
              One of our standout projects is the Campus Pharmasave Mobile App, developed for the Campus Pharmasave Pharmacy in Waterloo, Ontario. This app serves as a digital coupon book, offering students discounts on medications, vitamins, and other products. It also allows users to book appointments and receive notifications when prescriptions are ready for pickup. The app has been a game-changer, <span className = 'text-white'>increasing the pharmacy’s revenue by 20%</span> while earning a <span className = 'text-white'>5-star rating on the iOS App Store</span>, with glowing reviews from students and pharmacy staff alike.
            </p>

            <h2 className="text-[25px] sm:text-3xl font-normal mb-4 font-hyperlegible">Partners & Achievements</h2>
            {renderImageBlock(validatedMediaSources.achievements, 'Achievements')}
            <p className="sm:text-lg text-[12px] mb-6 leading-relaxed font-noto text-gray-400">
              We’ve built strong partnerships with organizations such as Campus Pharmasave, University of Waterloo Campus Pharmasave, SMG Pharmacy, IronOak Pharmacy, and more. Our efforts have been recognized with a <span className = 'text-white'>Velocity Cornerstone grant </span>from the University of Waterloo's startup incubator and a <span className = 'text-white'> partnership with BMO Bank</span> to introduce tailored financial solutions for pharmacies.
            </p>

            <h2 className="text-[25px] sm:text-3xl font-normal mb-4 font-hyperlegible">Future Goals</h2>
            <p className="sm:text-lg text-[12px] mb-6 leading-relaxed text-gray-400 font-noto">
              Looking ahead, we aim to expand our reach to more pharmacies and healthcare centers across the Waterloo Region and beyond. Our vision includes offering advanced financial solutions to support these institutions, growing our team, and continuing to innovate within the healthcare industry. Every step forward brings us closer to transforming the way pharmacies operate, ensuring that both businesses and their customers thrive.
            </p>
            {renderImageBlock(validatedMediaSources.future, 'Future')}
          </div>
        </div>
      </div>

      <div className="flex bg-b gap-4 mt-8 justify-between w-full box-border border-t-2 border-gray-600">
        <p className="text-gray-400 flex sm:text-base text-xs items-center justify-start py-4 ml-9">{companyNameText}</p>
        <p className="text-gray-400 flex sm:text-base text-xs items-center py-4 justify-end mr-9">{lastUpdateText}</p>
      </div>
    </div>
  );
};

export default About;