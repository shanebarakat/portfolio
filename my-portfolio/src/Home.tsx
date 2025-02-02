import PlaceholderImage from './assets/Placeholder (1).png';
import Intouch from './assets/Placeholder (2).png';
import PillThought from './assets/Placeholder (3).png';
import icon from './assets/20308214691623491653.svg';
import icon2 from "./assets/13880855881556105710.svg";
import icon3 from "./assets/17952689171595156226.svg";
import icon4 from "./assets/12090117491553664904.svg";
import { useNavigate } from 'react-router-dom';


const App: React.FC = () => {


  const navigate = useNavigate(); // Initialize the navigate function

  const openIntouch = () => {
    navigate('/intouchcx'); // Navigate to the route
  };

  const openPillThougth = () => {
    navigate('/pillthought'); // Navigate to the route
  }






  return (
    <div className="  bg-black no-scrollbar text-white min-h-screen w-screen flex flex-col justify-start items-center pt-16 px-0 scrollbar-y-hide">
      <h1 className="text-6xl mb-6 font-hyperlegible font-medium">Shane Barakat</h1>
      <h2 className="text-xl font-medium font-noto mb-6 max-w-[500px] text-center ">
        Management Engineering Student at UWaterloo Exploring Software, Product, and Data Roles
      </h2>
      <div className="flex gap-4 ">
  <a href="https://github.com/shanebarakat" target="_blank" rel="noreferrer">
  <img
    src={icon4}
    className="w-12 h-12 transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
    alt="Icon 1"
  />
  </a>
  <a href="https://www.linkedin.com/in/shane-barakat/" target="_blank" rel="noreferrer">
  <img
    src={icon2}
    className="w-11 h-12 transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
    alt="Icon 2"
  />
  </a>
  <a href= "mailto:srbaraka@uwaterloo.ca" target="_blank" rel="noreferrer">
  <img
    src={icon3}
    className="w-12 h-12 transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
    alt="Icon 3"
  />
  </a>
  
  <img
    src={icon}
    className="w-12 h-12 transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
    alt="Icon 4"
  />
</div>


      <div className="flex flex-col gap-8 mt-8 justify-center max-w-screen px-4 box-border">
  {/* Row 1 */}
  <div className="flex flex-col md:flex-row gap-4 justify-cente ">
    {/* Image 1 */}
    <div className="flex flex-col items-start">
      <img
        src={Intouch}
        alt="Image 1"
        className="rounded-lg hover:opacity-80 cursor-pointer w-full max-w-[700px] h-auto"
        onClick={openIntouch}
      />
      <p className="mt-2 text-white text-lg font-noto">SWE Intern - IntouchCX</p>
      <p className=" text-gray-400 text-lg font-noto">Jan 2025 - Present</p>
    </div>
    {/* Image 2 */}
    <div className="flex flex-col items-start">
      <img
        src={PillThought}
        alt="Image 2"
        className="rounded-lg hover:opacity-80 cursor-pointer w-full max-w-[700px] h-auto"
        onClick = {openPillThougth}
      />
      <p className="mt-2 text-white text-lg font-noto">Founding Engineer / COO - PillThought</p>
      <p className=" text-gray-400 text-lg font-noto">September 2023 - Present</p>
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-4 justify-center">
    {/* Image 1 */}
    <div className="flex flex-col items-start">
      <img
        src={PlaceholderImage}
        alt="Image 1"
        className="rounded-lg hover:opacity-80 cursor-pointer w-full max-w-[700px] h-auto"
      />
      <p className="mt-2 text-white text-lg">Caption for Image 1</p>
      <p className="mt-2 text-gray-400 text-lg">Other Info</p>
    </div>
    {/* Image 2 */}
    <div className="flex flex-col items-start">
      <img
        src={PlaceholderImage}
        alt="Image 2"
        className="rounded-lg hover:opacity-80 cursor-pointer w-full max-w-[700px] h-auto "
      />
      <p className="mt-2 text-white text-lg">Caption for Image 2</p>
      <p className=" text-gray-400 text-lg">Other Info</p>
    </div>
  </div>

  

  {/* Additional rows can be added here */}
</div>
<div className="flex bg-b gap-4 mt-8 justify-between w-full box-border border-t-2 border-gray-600">
  <p className="text-gray-400 flex items-center justify-start py-4 ml-9">Shane Barakat</p>
  <p className="text-gray-400 flex items-center py-4 justify-end mr-9">Last Update - February</p>
</div>


    </div>



  );
  
};



export default App;
