import Image from "next/image";
import storyimage from "/public/storyimage.avif";

function Story() {
  return (
    <main className="flex flex-col md:flex-row py-8 px-4 md:px-12">

      {/* Left side section */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="font-bold text-3xl md:text-4xl mt-10 md:ml-16">Our Story</h1>
        <p className="text-xl mt-7 md:mt-4 md:ml-16 max-w-3xl mx-auto md:mx-0">
          Founded in 1990, TastyGo has been serving exceptional cuisine for over three decades. Our passion for culinary excellence and commitment to using the finest ingredients has made us a beloved destination for food enthusiasts.
        </p>

        <div className="mt-12 md:mt-8 md:ml-16">
          <p className="text-xl">
            <span className="font-semibold text-orange-500">Timings:</span> Mon-Sun: 11:00 AM - 10:00 PM
          </p>
          <p className="mt-5 text-xl">
            <span className="font-semibold text-orange-500">Address:</span> 123 Culinary Street, Foodville, FC 1234
          </p>
          <p className="mt-5 text-xl">
            <span className="font-semibold text-orange-500">Phone:</span> +1 (555) 123-4567
          </p>
        </div>
      </div>

      {/* Right Side Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
        <Image className="rounded-lg object-contain md:h-[30rem]" src={storyimage} alt="Story image" />
      </div>

    </main>
  );
}

export default Story;
