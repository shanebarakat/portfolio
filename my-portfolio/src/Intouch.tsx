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
          <a href="https://www.intouchcx.com/solutions/intouchai-automation/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
            Website
          </a>
        </div>

        {/* Content */}
        <div className="p-4 text-center">
          <h1 className="text-5xl font-bold mb-3">IntouchCX</h1>
          <h2>Software Engineer Intern</h2>
          <h2 className= "mb-4 text-gray-500">Jan 2025 - April 2025</h2>
          <div className = "flex justify-center">
          <img
            src={Intouch}
            alt="IntouchCX"
            className="  rounded-lg justicursor-pointer w-full max-w-[700px] h-auto mb-6"
          />
          </div>

          <p>Summary</p>





          <p className="text-lg mb-6 leading-relaxed">
            I am currently a Management Engineering student at the University of Waterloo. I am passionate about exploring roles in software development, product management, and data analytics. My academic journey has equipped me with a strong foundation in problem-solving, critical thinking, and technical skills, allowing me to excel in fast-paced environments.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Recently, I joined IntouchCX as a Software Engineering Intern. In this role, I have been actively contributing to the development of scalable and efficient software solutions. Working closely with a team of experienced engineers, I have gained hands-on experience in designing, coding, and deploying features that enhance user experiences and operational efficiency.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            At IntouchCX, I focus on collaborating with cross-functional teams to understand project requirements and deliver high-quality solutions. I’ve been exposed to technologies such as <em>React</em>, <em>TypeScript</em>, and <em>Node.js</em>, enabling me to build robust and maintainable codebases. My role also involves participating in code reviews, debugging complex issues, and optimizing performance.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            This experience has deepened my understanding of software engineering practices and reinforced my passion for creating impactful digital solutions. I am committed to continuously learning and growing, aiming to make meaningful contributions in every opportunity I pursue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
