import React, { useEffect } from 'react';
import PalkiaVideo from './assets/Black Playful Animated Welcome Channel Youtube Intro Video.mp4';
import TechStack from './assets/Palkia Tech Stack (2).png'
import TechRec from './assets/Palkia Recognition.png'

/**
 * About component for displaying information about Palkia AI.
 * @returns {JSX.Element} The JSX element for the About page.
 */
const About: React.FC = () => {

  // This useEffect hook scrolls the window to the top when the component mounts to reset the view
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="bg-black text-white text-sm sm:text-base min-h-screen w-screen flex flex-col justify-center items-center px-6">
      {/* Container for Links and Content */}
      <div className="w-full max-w-3xl mt-2">
        {/* Top Links */}
        <div className="w-full flex justify-between px-6 py-4">
          <a href="/" className="text-gray-500 font-noto hover:text-purple-900 duration-300">
            ← Back to Home
          </a>
          <a
            href="https://palkia.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 font-noto hover:text-purple-900 duration-300"
          >
            Wailist
          </a>
        </div>

        {/* Content */}
        <div className="p-4">
          <h1 className="text-[35px] sm:text-5xl font-hyperlegible font-medium mb-3 font-hyperlegible font-medium text-center font-negligle">Palkia AI</h1>
          <h2 className="text-center font-noto">Project - Google AI Innovation Award Recipient</h2>
          <h2 className="mb-4 text-gray-500 font-noto text-center">2025</h2>
          <div className="flex justify-center">
          <video
              src={PalkiaVideo}
              className="rounded-lg cursor-pointer w-full h-auto mb-6"
              autoPlay
              muted
              playsInline
              loop
            ></video>
          </div>

          {/* Skills and Summary Section (Side by Side) */}
          <div className="flex justify-between items-start mb-8 gap-7">
            {/* Skills Section */}
            <div className="flex-1">
              <h3 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Stack</h3>
              <ul className="list-none space-y-q sm:text-lg text-[12px] leading-relaxed text-gray-400 font-noto ">
                <li>Python</li>
                <li>React</li>
                <li>Typescript</li>
                <li>Supabase</li>
                <li>SQLlite</li>
                <li>Gemini API</li>
              </ul>
            </div>

            {/* Summary Section */}
            <div className="flex-1">
              <h3 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Summary</h3>
              <p className="sm:text-lg text-[12px] font-noto text-gray-400 leading-relaxed">
  My partner <a className="text-white" href="https://alexungureanu.com/">Alex</a> and I built an AI platform that analyzes your codebase and transforms vague bug descriptions into 
  detailed, actionable tickets.
</p>

            </div>
          </div>

          {/* Detailed Text Section */}
          <div className="text-left">
            <h2 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4" >Overview</h2>
            <p className="sm:text-lg text-[12px] mb-6 font-noto text-gray-400 leading-relaxed">
            Palkia AI addresses a critical challenge in software development: the miscommunication between non-technical team members and developers when reporting bugs. This disconnect often leads to inefficiencies as developers spend time deciphering vague descriptions and locating issues within complex codebases. By harnessing AI, Palkia <span className='text-white'>transforms natural-language bug reports into developer-friendly tickets</span>, streamlining the debugging process and promoting seamless collaboration between teams. This innovation is particularly valuable in agile development environments, where speed and clarity are vital for maintaining productivity and delivering high-quality software.
            </p>
            
          </div>

          <div className="text-left">
            <h2 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4" >Tech Stack</h2>
            <img
              src={TechStack}
              alt="Origins"
              className="rounded-lg cursor-pointer w-full h-auto mb-6"
            />
            <p className="sm:text-lg text-[12px] mb-6 font-noto text-gray-400 leading-relaxed">
            Palkia AI utilizes a large technology stack to deliver its innovative functionality. The frontend, built in <span className= 'text-white'>React with TypeScript</span>, provides a seamless user interface, including a landing page, dashboard, and sandbox. The backend leverages <span className= 'text-white'>FastAPI</span> for AI calls and core functions, while <span className= 'text-white'>SQLite</span> handles local data storage in the admin dashboard, and <span className= 'text-white'>Supabase</span> manages user credentials. <span className='text-white'>Marqo</span> serves as a vector database to support <span className='text-white'>RAG</span> implementations, enhancing the Palkia Context Engine. Additionally, <span className='text-white'>Docker</span> ensures smooth concurrent deployment of the frontend and backend, and <span className='text-white'>Jest</span> is used for  code testing, ensuring a reliable and efficient platform.
            </p>
            
          </div>

          <div className="text-left">
            <h2 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4" >The Palkia Context Engine</h2>
            <p className="sm:text-lg text-[12px] mb-6 font-noto text-gray-400 leading-relaxed">
            At the heart of Palkia AI lies the <span className='text-white'>Palkia Context Engine</span>, a preprocessing framework designed to enhance large language models (LLMs) for software engineering tasks. The engine optimizes contextual awareness by systematically filtering and structuring input data, ensuring the model processes only the most relevant codebase components. Combining <span className='text-white'>Retrieval-Augmented Generation (RAG)</span> with <span className='text-white'>Graph Neural Networks (GNNs)</span>, the engine refines the understanding of software dependencies. This enables Palkia to excel in tasks such as <span className='text-white'>code completion</span>, <span className='text-white'>bug detection</span>, and <span className='text-white'>software refactoring</span>, offering developers precise and context-aware solutions.
            </p>
            
          </div>

          <div className="text-left">
            <h2 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4" >Recognition and Future</h2>
            <img
              src={TechRec}
              alt="Origins"
              className="rounded-lg cursor-pointer w-full h-auto mb-6"
            />
            <p className="sm:text-lg text-[12px] mb-6 font-noto text-gray-400 leading-relaxed">
            Palkia AI has already demonstrated its potential by winning the <span className='text-white'>AI Innovation Award</span> from <span className='text-white'>Google</span> at the Manitoba AI Innovation Showcase, where it was presented to an audience of over 170 people. This accolade highlights the transformative impact Palkia can have on development workflows, showcasing its ability to bridge the gap between technical and non-technical team members. By streamlining communication, enhancing debugging efficiency, and improving collaboration, Palkia AI sets a new standard for how development teams operate in agile and fast-paced environments.
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