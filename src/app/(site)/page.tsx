import Auth from "@/components/auth";
import Drawer from "@/components/cart/drawer";
import Hero from "@/components/hero";
import Product from "@/components/product";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-5">
      <Drawer />
      <Auth />
      <Hero />

      <div className="container">
        <div className="grid gap-3 lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
          {Array.from("d44f5f5f55").map((item, i) => (
            <Product key={i} />
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-end mt-5">
          <div className="join">
            <button className="join-item border border-gray-300 btn ">
              Prev
            </button>
            <button className="join-item border border-gray-300 btn">1</button>
            <button className="join-item border border-gray-300 btn btn-active">
              2
            </button>
            <button className="join-item border border-gray-300 btn">3</button>
            <button className="join-item border border-gray-300 btn">4</button>

            <button className="join-item btn btn-disabled">...</button>
            <button className="join-item border border-gray-300 btn">
              255
            </button>
            <button className="join-item border border-gray-300 btn ">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
