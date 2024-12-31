import Image from "next/image";
import rightsideimage from "/public/rightsideimage.png";

function Hero() {
  return (
    <main
      id="home" // Add the ID here
      className="flex flex-col md:flex-row min-h-[42rem] px-4 md:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Left side section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-16 text-center md:text-left">
        <div className="md:ml-8 lg:ml-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider">
            Welcome to
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-green-600 font-bold mt-2">
            TastyGo.
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
            & Enjoy Delicious Food
          </h2>

          <p className="mt-6 md:mt-10 text-lg md:text-xl px-4 md:px-0 max-w-2xl">
          &quot;Step into a warm and inviting atmosphere where every meal is prepared
            with passion and precision. Whether you&apos;re here for a casual meal
            with friends or a special celebration, our team is dedicated to making
            your visit memorable from start to finish.&quot;
          </p>

          <button className="mt-8 md:mt-10 bg-gray-400 h-12 w-44 rounded-md font-semibold hover:bg-gray-500 transition-all mx-auto md:mx-0 md:ml-52">
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Right Side Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center mt-8 md:mt-0">
        <div className="relative w-72 md:w-96 h-72 md:h-96 md:ml-20 md:mt-8">
          <Image
            className="object-contain bg-white"
            src={rightsideimage}
            alt="Tasty food presentation"
            fill
            priority
            sizes="(max-width: 768px) 18rem, 24rem"
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
