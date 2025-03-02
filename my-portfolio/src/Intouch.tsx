import React, {useEffect} from 'react';
import Intouch from './assets/Placeholder (2).png';

const About: React.FC = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


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
            href="https://www.intouchcx.com/solutions/intouchai-automation/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 font-noto hover:text-green-400 duration-300"
          >
            Company Website
          </a>
        </div>

        {/* Content */}
        <div className="p-4">
          <h1 className="text-[35px] sm:text-5xl font-hyperlegible font-medium mb-3 font-hyperlegible font-medium text-center font-negligle">IntouchCX</h1>
          <h2 className="text-center font-noto">Software Engineer Intern</h2>
          <h2 className="mb-4 text-gray-500 font-noto text-center">Jan 2025 - April 2025</h2>
          <div className="flex justify-center">
            <img
              src={Intouch}
              alt="IntouchCX"
              className="rounded-lg cursor-pointer w-full  h-auto mb-6"
            />
          </div>

          {/* Skills and Summary Section (Side by Side) */}
          <div className="flex justify-between items-start mb-8 sm:gap-7">
            {/* Skills Section */}
            <div className="flex-1">
              <h3 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Skills</h3>
              <ul className="list-none space-y-q sm:text-lg text-[12px] leading-relaxed text-gray-400 font-noto ">
                <li>AWS</li>
                <li>C#</li>
                <li>.Net</li>
                <li>Javascript</li>
                <li>Docker</li>
                <li>TypeScript</li>
                <li>UI Path</li>
              </ul>
            </div>

            {/* Summary Section */}
            <div className="flex-1">
              <h3 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Summary</h3>
              <p className="sm:text-lg text-[12px] font-noto text-gray-400 leading-relaxed">
                IntouchCX is a global leader in CX with huge clients. As a software engineer, I worked on various projects to automate and improve internal practices. I worked in Automation Development, and AI Solutions.<br></br> 
                See more below!
              </p>
            </div>
          </div>

          {/* Detailed Text Section */}
          <div className="text-left">
            <h2 className="text-3xl font-medium font-hyperlegible mb-4" >Overview</h2>
            <p className="text-lg mb-6 font-noto text-gray-400 leading-relaxed">
              Currently in this role! Updates to come.....
            </p>
            
          </div>
        </div>
      </div>
      <div className="flex bg-b gap-4 mt-8 justify-between w-full box-border border-t-2 border-gray-600">
  <p className="text-gray-400 sm:text-base text-xs flex items-center justify-start py-4 ml-9">Shane Barakat</p>
  <p className="text-gray-400 sm:text-base text-xs flex items-center py-4 justify-end mr-9">Last Update - March 2025</p>
</div>
    </div>
  );
};

export default About;
