import Image from "next/image";
import burger from "/public/burger.avif";
import pasta from "/public/pasta.avif";
import salaad from "/public/salaad.avif";
import salmon from "/public/salmon.avif";

function Menu() {
  return (
    <main id="menu" className="w-full text-center py-8 px-4 md:px-12"> {/* Added the id "menu" */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Our Menu</h1>
        <p className="text-xl mt-6 text-gray-500">Discover our carefully curated selection of dishes, prepared with the finest ingredients</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Burger */}
        <div className="bg-white w-full h-auto rounded-lg shadow-md overflow-hidden">
          <Image src={burger} alt="Wagyu Burger" className="object-cover h-48 w-full" />
          <div className="flex justify-between m-3">
            <h1 className="font-semibold">Wagyu Burger</h1>
            <span className="font-semibold text-orange-500">$ 29.99</span>
          </div>
          <p className="w-full text-sm md:text-lg ml-3">Premium wagyu beef with caramelized onions and special sauce</p>
          <button className="bg-orange-400 w-full h-12 text-xl rounded-md mt-3 text-white font-semibold">
            Add to Order
          </button>
        </div>

        {/* Pasta */}
        <div className="bg-white w-full h-auto rounded-lg shadow-md overflow-hidden">
          <Image src={pasta} alt="Truffle Pasta" className="object-cover h-48 w-full" />
          <div className="flex justify-between m-3">
            <h1 className="font-semibold">Truffle Pasta</h1>
            <span className="font-semibold text-orange-500">$ 24.99</span>
          </div>
          <p className="w-full text-sm md:text-lg ml-3">Fresh homemade pasta with black truffle and parmesan cream sauce</p>
          <button className="bg-orange-400 w-full h-12 text-xl rounded-md mt-3 text-white font-semibold">
            Add to Order
          </button>
        </div>

        {/* Salad */}
        <div className="bg-white w-full h-auto rounded-lg shadow-md overflow-hidden">
          <Image src={salaad} alt="Mediterranean Salad" className="object-cover h-48 w-full" />
          <div className="flex justify-between m-3">
            <h1 className="font-semibold">Mediterranean Salad</h1>
            <span className="font-semibold text-orange-500">$ 14.99</span>
          </div>
          <p className="w-full text-sm md:text-lg ml-3">Fresh greens with feta, olives, and house dressing</p>
          <button className="bg-orange-400 w-full h-12 text-xl rounded-md mt-3 text-white font-semibold">
            Add to Order
          </button>
        </div>

        {/* Salmon */}
        <div className="bg-white w-full h-auto rounded-lg shadow-md overflow-hidden">
          <Image src={salmon} alt="Salmon" className="object-cover h-48 w-full" />
          <div className="flex justify-between m-3">
            <h1 className="font-semibold">Salmon</h1>
            <span className="font-semibold text-orange-500">$ 14.99</span>
          </div>
          <p className="w-full text-sm md:text-lg ml-3">Fresh greens with feta, olives, and house dressing</p>
          <button className="bg-orange-400 w-full h-12 text-xl rounded-md mt-3 text-white font-semibold">
            Add to Order
          </button>
        </div>
      </div>
    </main>
  );
}

export default Menu;
