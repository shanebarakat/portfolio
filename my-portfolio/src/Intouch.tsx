/**
 * About component
 *
 * Responsibilities:
 * - Render a static "About" / internship summary page for IntouchCX.
 * - Provide a consistent layout and styling for the content.
 *
 * Side effects:
 * - On mount, the component scrolls the window to the top to ensure the user
 *   starts at the beginning of the page.
 *
 * Notes:
 * - This file centralizes display strings and arrays into named constants to
 *   avoid magic strings and to improve maintainability.
 * - The scroll-to-top behavior has been extracted into a helper function to
 *   reduce component body size and improve readability.
 */

import React, { useEffect } from 'react';
import Intouch from './assets/Placeholder (2).png';

type Props = {};

const COMPANY_NAME = 'IntouchCX';
const ROLE_TITLE = 'Software Engineer Intern';
const DATE_RANGE = 'Jan 2025 - April 2025';
const COMPANY_WEBSITE_URL = 'https://www.intouchcx.com/solutions/intouchai-automation/';
const BACK_TO_HOME_TEXT = '← Back to Home';
const AUTHOR_NAME = 'Shane Barakat';
const LAST_UPDATE_TEXT = 'Last Update - April 2025';
const IMAGE_ALT_TEXT = 'IntouchCX';
const MAX_CONTENT_WIDTH_CLASS = 'max-w-3xl';

const SKILLS: readonly string[] = [
  'Vue.js',
  'C#',
  '.Net',
  'Javascript',
  'Docker',
  'TypeScript',
  'UI Path',
];

/**
 * Scrolls the window to the top. Extracted for clarity and easier testing.
 */
function scrollToTopOnMount(): void {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo(0, 0);
  }
}

const About: React.FC<Props> = () => {
  useEffect(() => {
    scrollToTopOnMount();
  }, []);

  return (
    <div className="bg-black text-white text-sm sm:text-base min-h-screen w-screen flex flex-col justify-center items-center px-6">
      {/* Container for Links and Content */}
      <div className={`w-full ${MAX_CONTENT_WIDTH_CLASS} mt-2`}>
        {/* Top Links */}
        <div className="w-full flex justify-between px-6 py-4">
          <a href="/" className="text-gray-500 font-noto hover:text-green-400 duration-300">
            {BACK_TO_HOME_TEXT}
          </a>
          <a
            href={COMPANY_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 font-noto hover:text-green-400 duration-300"
          >
            Company Website
          </a>
        </div>

        {/* Content */}
        <div className="p-4">
          <h1 className="text-[35px] sm:text-5xl font-hyperlegible font-medium mb-3 font-hyperlegible font-medium text-center font-negligle">{COMPANY_NAME}</h1>
          <h2 className="text-center font-noto">{ROLE_TITLE}</h2>
          <h2 className="mb-4 text-gray-500 font-noto text-center">{DATE_RANGE}</h2>
          <div className="flex justify-center">
            <img
              src={Intouch}
              alt={IMAGE_ALT_TEXT}
              className="rounded-lg cursor-pointer w-full  h-auto mb-6"
            />
          </div>

          {/* Skills and Summary Section (Side by Side) */}
          <div className="flex justify-between items-start mb-8 sm:gap-7">
            {/* Skills Section */}
            <div className="flex-1">
              <h3 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Skills</h3>
              <ul className="list-none space-y-q sm:text-lg text-[12px] leading-relaxed text-gray-400 font-noto ">
                {SKILLS.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Summary Section */}
            <div className="flex-1">
              <h3 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Summary</h3>
              <p className="sm:text-lg text-[12px] font-noto text-gray-400 leading-relaxed">
                IntouchCX is a global customer experience provider serving leading tech clients. As a Software Engineer Intern, I developed automation pipelines and integrated AI-driven tools to streamline internal workflows, reduce manual overhead, and enhance scalability across high-volume support operations.
              </p>
            </div>
          </div>

          {/* Detailed Text Section */}
          <div className="text-left">
            <h2 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4" >Overview</h2>
            <p className="sm:text-lg text-[12px] font-noto mb-6 text-gray-400 leading-relaxed">
  • Developed enterprise-grade automations using <span className="text-white">C#/.NET</span> for multiple high-profile clients, resulting in over <span className="text-white">$50,000</span> in annual labor savings<br /><br />
  
  • Built and deployed a full-stack internal translation platform with <span className="text-white">React</span>, <span className="text-white">Node.js</span>, and <span className="text-white">SQL Server</span>, saving over <span className="text-white">10,000+ hours annually</span> for <span className="text-white">500+</span> global employees<br /><br />
  
  • Engineered scalable <span className="text-white">CI/CD pipelines</span> using <span className="text-white">Jenkins</span> and integrated automated test suites, increasing test coverage by <span className="text-white">35%</span> and reducing release time<br /><br />

  
  • Integrated internal tools with third-party APIs to streamline reporting and reduce manual workflows by over <span className="text-white">70%</span><br /><br />
</p>

<h2 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4" >Conclusion</h2>
<p className="sm:text-lg text-[12px] font-noto text-gray-400 leading-relaxed">
  Living and working in Winnipeg for several months was a unique and rewarding experience. It gave me the chance to grow both personally and professionally while being part of an incredible team at IntouchCX. I’m truly thankful for the opportunity to contribute to impactful projects and collaborate with talented individuals who constantly inspired innovation.
</p>


            
          </div>
        </div>
      </div>
      <div className="flex bg-b gap-4 mt-8 justify-between w-full box-border border-t-2 border-gray-600">
  <p className="text-gray-400 sm:text-base text-xs flex items-center justify-start py-4 ml-9">{AUTHOR_NAME}</p>
  <p className="text-gray-400 sm:text-base text-xs flex items-center py-4 justify-end mr-9">{LAST_UPDATE_TEXT}</p>
</div>
    </div>
  );
};

export default About;