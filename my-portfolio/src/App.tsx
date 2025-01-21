const App: React.FC = () => {
  return (
    <div className="bg-black text-white h-screen w-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-6xl font-bold mb-8">Shane Barakat</h1>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">A</button>
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">B</button>
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">C</button>
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">D</button>
      </div>
    </div>
  );
};

export default App;
