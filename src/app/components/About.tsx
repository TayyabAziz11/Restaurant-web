import Image from "next/image";
import aboutimage from "/public/aboutimage.png";

function About() {
  return (
    <main id="about" className="flex flex-col md:flex-row h-auto px-4 md:px-12 py-8">
      {/* Left side section */}
      <div className="w-full md:w-[45%] mb-8 md:mb-0 md:mt-16 md:ml-18 flex justify-center">
        <Image
          src={aboutimage}
          alt="Delicious healthy food served at the restaurant"
          className="object-contain w-full md:w-auto"
        />
      </div>

      {/* Right side section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-16 md:ml-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wider">
          We Serve Healthy & <br />
          Tasty <span className="text-green-500">Food.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
          "At our restaurant, we take pride in serving food that is both healthy
          and delicious. Every dish is carefully prepared using fresh,
          high-quality ingredients to ensure it’s packed with nutrients while
          never compromising on taste. From wholesome grains to vibrant
          vegetables and lean proteins, our menu is designed to nourish your body
          and delight your senses. Whether you’re looking for a light snack or a
          hearty meal, we offer a variety of options that cater to all tastes and
          dietary needs. Enjoy a satisfying dining experience that’s as good for
          you as it is tasty."
        </p>

        <div className="mt-10 flex justify-center md:justify-start">
          <button className="bg-gray-400 h-12 w-40 rounded-lg font-semibold hover:bg-gray-500 transition-all">
            Explore More
          </button>
        </div>
      </div>
    </main>
  );
}

export default About;
