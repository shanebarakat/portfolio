const App: React.FC = () => {
  return (
    <div className="bg-black text-white h-screen w-screen flex flex-col justify-start items-center pt-16">
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
      <div className="flex gap-[35px] mt-8">
      <div className="flex flex-col items-start">
    <button>
      <img
        src="https://via.placeholder.com/100"
        alt="Button 1"
        className="w-[700px] h-[400px] rounded-lg hover:opacity-80"
      />
    </button>
    <p className="mt-2 text-white text-lg">Caption for Image 1</p>
    <p className="mt-2 text-grey text-lg">Other info</p>
  </div>
  <div className="flex flex-col items-start">
    <button>
      <img
        src="https://via.placeholder.com/100"
        alt="Button 2"
        className="w-[700px] h-[400px] rounded-lg hover:opacity-80"
      />
    </button>
    <p className="mt-2 text-white text-lg">Caption for Image 2</p>
    <p className="mt-2 text-white text-lg">Other Info</p>
  </div>
      </div>
      
    </div>
    
  );
};

export default App;
