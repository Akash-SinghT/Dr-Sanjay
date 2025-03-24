"use client";

const Header = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-24"
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to the World of <br />
          <span className="text-blue-600">Nuclear Medicine Excellence</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Pioneering advancements in Nuclear Medicine, Research, and Academic
          Leadership
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Get In Touch
          </button>
          <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-600 hover:text-white transition duration-300">
            View Research
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative w-[400px] h-[470px] md:w-[400px] md:h-[470px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://wallpapers.com/images/hd/money-heist-professor-focused-portrait-nvrk1vd6lwnyt7hi.jpg"
            alt="Nuclear Medicine Excellence"
            className="object-cover w-full h-70"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
