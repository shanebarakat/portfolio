import React, { useEffect, useMemo, useCallback } from 'react';
import IntouchImage from './assets/Placeholder (2).png';

/**
 * Type alias for a list of skill strings.
 */
type SkillList = string[];

/**
 * Validate that the provided value is an array of strings.
 * Returns a safe array (never null/undefined).
 *
 * @param maybeArray - value to validate
 */
const getValidatedStringArray = (maybeArray: unknown): SkillList => {
  if (!Array.isArray(maybeArray)) return [];
  return maybeArray.filter((item): item is string => typeof item === 'string');
};

/**
 * Safely scrolls the window to the top. Wrapped in try/catch to prevent
 * runtime exceptions in environments where window might be undefined.
 */
const safeScrollToTop = (): void => {
  try {
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo(0, 0);
    }
  } catch (err) {
    // Surface a controlled error log, but do not alter UX.
    // eslint-disable-next-line no-console
    console.error('safeScrollToTop failed:', err);
  }
};

/**
 * Safely opens an external link. This prevents default navigation and attempts
 * to open the URL in a new tab while handling potential errors gracefully.
 *
 * @param url - destination URL to open
 * @param event - mouse event from the anchor element
 */
const safeOpenExternalLink = (url: string, event: React.MouseEvent<HTMLAnchorElement>): void => {
  event.preventDefault();
  try {
    const features = 'noopener,noreferrer';
    // window.open may be blocked by popup blockers; wrap in try/catch
    window.open(url, '_blank', features);
  } catch (err) {
    // Log the error without changing user experience
    // eslint-disable-next-line no-console
    console.error('Failed to open external link:', err, url);
    // Fall back to default navigation if possible
    try {
      // As a last resort, set location (this will navigate current window)
      // but keep this as a fallback only; do not throw further.
      window.location.href = url;
    } catch (fallbackErr) {
      // eslint-disable-next-line no-console
      console.error('Fallback navigation failed:', fallbackErr);
    }
  }
};

/**
 * Handler for image load errors. Logs the error in a controlled manner.
 *
 * @param event - synthetic event from the image element
 */
const handleImageLoadError = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  // eslint-disable-next-line no-console
  console.error('Image failed to load:', event?.currentTarget?.src);
};

/**
 * About component representing IntouchCX internship details.
 *
 * Behavior-preserving refactor: extracts small helpers, adds validation,
 * and memoizes derived values to avoid synchronous work during render.
 *
 * Note: Component has no props.
 */
const About: React.FC = () => {
  // Scroll to top on mount using a memoized callback for testability
  const onMountScrollToTop = useCallback(() => {
    safeScrollToTop();
  }, []);

  useEffect(() => {
    onMountScrollToTop();
  }, [onMountScrollToTop]);

  // Static data memoized for stable references across renders.
  const skills: SkillList = useMemo(
    () =>
      getValidatedStringArray([
        'Vue.js',
        'C#',
        '.Net',
        'Javascript',
        'Docker',
        'TypeScript',
        'UI Path',
      ]),
    []
  );

  // Memoize small derived strings to avoid recreating during render.
  const companyWebsiteUrl = useMemo(
    () => 'https://www.intouchcx.com/solutions/intouchai-automation/',
    []
  );

  const lastUpdateLabel = useMemo(() => 'Last Update - April 2025', []);

  return (
    <div className="bg-black text-white text-sm sm:text-base min-h-screen w-screen flex flex-col justify-center items-center px-6">
      {/* Container for Links and Content */}
      <div className="w-full max-w-3xl mt-2">
        {/* Top Links */}
        <div className="w-full flex justify-between px-6 py-4">
          <a href="/" className="text-gray-500 font-noto hover:text-green-400 duration-300">
            ← Back to Home
          </a>
          <a
            href={companyWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => safeOpenExternalLink(companyWebsiteUrl, e)}
            className="text-gray-500 font-noto hover:text-green-400 duration-300"
          >
            Company Website
          </a>
        </div>

        {/* Content */}
        <div className="p-4">
          <h1 className="text-[35px] sm:text-5xl font-hyperlegible font-medium mb-3 font-hyperlegible font-medium text-center font-negligle">
            IntouchCX
          </h1>
          <h2 className="text-center font-noto">Software Engineer Intern</h2>
          <h2 className="mb-4 text-gray-500 font-noto text-center">Jan 2025 - April 2025</h2>
          <div className="flex justify-center">
            <img
              src={IntouchImage}
              alt="IntouchCX"
              onError={handleImageLoadError}
              className="rounded-lg cursor-pointer w-full  h-auto mb-6"
            />
          </div>

          {/* Skills and Summary Section (Side by Side) */}
          <div className="flex justify-between items-start mb-8 sm:gap-7">
            {/* Skills Section */}
            <div className="flex-1">
              <h3 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Skills</h3>
              <ul className="list-none space-y-q sm:text-lg text-[12px] leading-relaxed text-gray-400 font-noto ">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Summary Section */}
            <div className="flex-1">
              <h3 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Summary</h3>
              <p className="sm:text-lg text-[12px] font-noto text-gray-400 leading-relaxed">
                IntouchCX is a global customer experience provider serving leading tech clients. As a
                Software Engineer Intern, I developed automation pipelines and integrated AI-driven
                tools to streamline internal workflows, reduce manual overhead, and enhance
                scalability across high-volume support operations.
              </p>
            </div>
          </div>

          {/* Detailed Text Section */}
          <div className="text-left">
            <h2 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Overview</h2>
            <p className="sm:text-lg text-[12px] font-noto mb-6 text-gray-400 leading-relaxed">
              • Developed enterprise-grade automations using{' '}
              <span className="text-white">C#/.NET</span> for multiple high-profile clients,
              resulting in over <span className="text-white">$50,000</span> in annual labor
              savings
              <br />
              <br />
              • Built and deployed a full-stack internal translation platform with{' '}
              <span className="text-white">React</span>, <span className="text-white">Node.js</span>,
              and <span className="text-white">SQL Server</span>, saving over{' '}
              <span className="text-white">10,000+ hours annually</span> for{' '}
              <span className="text-white">500+</span> global employees
              <br />
              <br />
              • Engineered scalable <span className="text-white">CI/CD pipelines</span> using{' '}
              <span className="text-white">Jenkins</span> and integrated automated test suites,
              increasing test coverage by <span className="text-white">35%</span> and reducing
              release time
              <br />
              <br />
              • Integrated internal tools with third-party APIs to streamline reporting and reduce
              manual workflows by over <span className="text-white">70%</span>
              <br />
              <br />
            </p>

            <h2 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Conclusion</h2>
            <p className="sm:text-lg text-[12px] font-noto text-gray-400 leading-relaxed">
              Living and working in Winnipeg for several months was a unique and rewarding
              experience. It gave me the chance to grow both personally and professionally while
              being part of an incredible team at IntouchCX. I’m truly thankful for the opportunity
              to contribute to impactful projects and collaborate with talented individuals who
              constantly inspired innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-b gap-4 mt-8 justify-between w-full box-border border-t-2 border-gray-600">
        <p className="text-gray-400 sm:text-base text-xs flex items-center justify-start py-4 ml-9">
          Shane Barakat
        </p>
        <p className="text-gray-400 sm:text-base text-xs flex items-center py-4 justify-end mr-9">
          {lastUpdateLabel}
        </p>
      </div>
    </div>
  );
};

export default About;