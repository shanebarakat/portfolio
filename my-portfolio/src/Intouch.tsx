import React from 'react';
import Intouch from './assets/Placeholder (2).png';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen w-screen flex justify-center items-center px-6">
      {/* Container for Links and Content */}
      <div className="w-full max-w-3xl">
        {/* Top Links */}
        <div className="w-full flex justify-between px-6 py-4">
          <a href="/" className="text-gray-500 hover:underline">
            ← Back to Home
          </a>
          <a
            href="https://www.intouchcx.com/solutions/intouchai-automation/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:underline"
          >
            Company Website
          </a>
        </div>

        {/* Content */}
        <div className="p-4">
          <h1 className="text-5xl font-bold mb-3 text-center">IntouchCX</h1>
          <h2 className="text-center">Software Engineer Intern</h2>
          <h2 className="mb-4 text-gray-500 text-center">Jan 2025 - April 2025</h2>
          <div className="flex justify-center">
            <img
              src={Intouch}
              alt="IntouchCX"
              className="rounded-lg cursor-pointer w-full  h-auto mb-6"
            />
          </div>

          {/* Skills and Summary Section (Side by Side) */}
          <div className="flex justify-between items-start mb-8 gap-7">
            {/* Skills Section */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <ul className="list-none space-y-2 text-lg leading-relaxed">
                <li>AWS</li>
                <li>C#</li>
                <li>.Net</li>
                <li>Javascript</li>
                <li>Vue</li>
                <li>TypeScript</li>
                <li>UI Path</li>
              </ul>
            </div>

            {/* Summary Section */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Summary</h3>
              <p className="text-lg leading-relaxed">
                IntouchCX is a global leader in CX with major cleints .... As a software engineer, I worked on various projects to automate and improve internal practices. I worked in Automation Development, Product Design and Intouch AI Solutions.<br></br> 
                See more below:
              </p>
            </div>
          </div>

          {/* Detailed Text Section */}
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4" >Summary</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Currently in this role! Updates to come.....
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
