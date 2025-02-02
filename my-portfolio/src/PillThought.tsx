import React from 'react';
import PillThought from './assets/Placeholder (3).png';
import PharmasaveVideo from './assets/PillThought Market Video 2.mov';
import Origins from './assets/origins.png';
import achievements from './assets/achievments.png';
import future from './assets/future.png';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen w-screen flex justify-center items-center px-6">
      {/* Container for Links and Content */}
      <div className="w-full max-w-3xl mt-2">
        {/* Top Links */}
        <div className="w-full flex justify-between px-6 py-4">
          <a href="/" className="text-gray-500 font-noto hover:text-blue-500">
            ← Back to Home
          </a>
          <a
            href="https://pillthought.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 font-noto hover:text-blue-500"
          >
            Company Website
          </a>
        </div>

        {/* Content */}
        <div className="p-4">
          <h1 className="text-5xl font-hyperlegible font-medium mb-3 text-center">PillThought</h1>
          <h2 className="text-center font-noto">Founding Engineer/COO</h2>
          <h2 className="mb-4 text-gray-500 text-center font-noto">Sept 2023 - Present</h2>
          <div className="flex justify-center">
            <img
              src={PillThought}
              alt="PillThought Logo"
              className="rounded-lg cursor-pointer w-full h-auto mb-6"
            />
          </div>

          {/* Detailed Text Section */}
          <div className="text-left">
            <h2 className="text-3xl font-normal mb-4 font-hyperlegible">Summary</h2>
            <p className="text-lg mb-6 leading-relaxed font-noto text-gray-400">
              PillThought Technologies is a software company founded by University of Waterloo and Wilfrid Laurier University students, focused on developing innovative solutions for local pharmacies, healthcare centers, and hospitals. As the Founding Engineer and COO, I lead software development initiatives while managing the company’s operations and sales teams. Our mission is to modernize the healthcare industry with affordable, effective solutions.
            </p>

            <h2 className="text-3xl font-normal mb-4 font-hyperlegible">Origins</h2>
            <img
              src={Origins}
              alt="Origins"
              className="rounded-lg cursor-pointer w-full h-auto mb-6"
            />
            <p className="text-lg mb-6 leading-relaxed text-gray-400">
              PillThought started as a vision shared by three close friends during our first year of university: Jay, a Pharmacy student; Alex, a Computational Mathematics student; and myself, a Management Engineering student. Our goal was to combine our unique skill sets to address the technological gaps in the healthcare industry. By building impactful and cost-effective software solutions, we aim to make a tangible difference in the field while fostering affordability and accessibility.
            </p>

            <h2 className="text-3xl font-normal mb-4 font-hyperlegible">Campus Pharmasave Mobile App</h2>
            <video
              src={PharmasaveVideo}
              className="rounded-lg cursor-pointer w-full h-auto mb-6"
              autoPlay
              muted
              playsInline
              loop
            ></video>
            <p className="text-lg mb-6 leading-relaxed font-noto text-gray-400">
              One of our standout projects is the Campus Pharmasave Mobile App, developed for the Campus Pharmasave Pharmacy in Waterloo, Ontario. This app serves as a digital coupon book, offering students discounts on medications, vitamins, and other products. It also allows users to book appointments and receive notifications when prescriptions are ready for pickup. The app has been a game-changer, increasing the pharmacy’s revenue by 20% while earning a 5-star rating on the iOS App Store, with glowing reviews from students and pharmacy staff alike.
            </p>

            <h2 className="text-3xl font-normal mb-4 font-hyperlegible">Partners & Achievements</h2>
            <img
              src={achievements}
              alt="Achievements"
              className="rounded-lg cursor-pointer w-full h-auto mb-6"
            />
            <p className="text-lg mb-6 leading-relaxed font-noto text-gray-400">
              We’ve built strong partnerships with organizations such as Campus Pharmasave, University of Waterloo Campus Pharmasave, SMG Pharmacy, IronOak Pharmacy, and more. Our efforts have been recognized with a Velocity Cornerstone grant from the University of Waterloo's startup incubator and a partnership with BMO Bank to introduce tailored financial solutions for pharmacies.
            </p>

            <h2 className="text-3xl font-normal mb-4 font-hyperlegible">Future Goals</h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-400 font-noto">
              Looking ahead, we aim to expand our reach to more pharmacies and healthcare centers across the Waterloo Region and beyond. Our vision includes offering advanced financial solutions to support these institutions, growing our team, and continuing to innovate within the healthcare industry. Every step forward brings us closer to transforming the way pharmacies operate, ensuring that both businesses and their customers thrive.
            </p>
            <img
              src={future}
              alt="Future"
              className="rounded-lg cursor-pointer w-full h-auto mb-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
