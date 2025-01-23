import PlaceholderImage from './assets/Placeholder (1).png';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen w-screen flex flex-col justify-start items-center pt-16 px-0 scrollbar-y-hide">
      <h1 className="text-6xl font-bold mb-8">Shane Barakat</h1>
      <h2 className="text-xl font-bold mb-8 max-w-[500px] text-center">
        Management Engineering Student at UWaterloo Exploring Software, Product, and Data Roles
      </h2>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">A</button>
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">B</button>
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">C</button>
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">D</button>
      </div>
      <div className="flex flex-col gap-8 mt-8 justify-center w-screen px-4">
  {/* Row 1 */}
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
        className="rounded-lg hover:opacity-80 cursor-pointer w-full max-w-[700px] h-auto"
      />
      <p className="mt-2 text-white text-lg">Caption for Image 2</p>
      <p className="mt-2 text-gray-400 text-lg">Other Info</p>
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex flex-col md:flex-row gap-4 justify-center">
    {/* Image 3 */}
    <div className="flex flex-col items-start">
      <img
        src={PlaceholderImage}
        alt="Image 3"
        className="rounded-lg hover:opacity-80 cursor-pointer w-full max-w-[700px] h-auto"
      />
      <p className="mt-2 text-white text-lg">Caption for Image 3</p>
      <p className="mt-2 text-gray-400 text-lg">Other Info</p>
    </div>
    {/* Image 4 */}
    <div className="flex flex-col items-start">
      <img
        src={PlaceholderImage}
        alt="Image 4"
        className="rounded-lg hover:opacity-80 cursor-pointer w-full max-w-[700px] h-auto"
      />
      <p className="mt-2 text-white text-lg">Caption for Image 4</p>
      <p className="mt-2 text-gray-400 text-lg">Other Info</p>
    </div>
  </div>

  {/* Additional rows can be added here */}
</div>
      
    </div>
  );
};

export default App;
