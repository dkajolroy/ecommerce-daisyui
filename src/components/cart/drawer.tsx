"use client";

import { useState } from "react";
import { CartArrowNext, CartClose, CartInfo } from "../assets/icons";
import CartItem from "./cartitem";

function Drawer() {
  const [active, setActive] = useState(true);
  return (
    <div>
      <div
        id="drawer-example bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
        className={`fixed top-0 right-0 transition-transform ${
          !active && "translate-x-full"
        } z-40 h-screen p-4 overflow-y-auto  bg-white w-80 dark:bg-gray-800`}
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <CartInfo />
          Cart items
        </h5>
        {/* Close Drawer */}
        <button
          type="button"
          onClick={() => setActive(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CartClose />
          <span className="sr-only">Close menu</span>
        </button>
        {/* All Products */}
        <>
          <div className="w-full my-5 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Total items: {10}
              </h5>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {Array.from("cdc").map((item, i) => (
                  <CartItem key={i} />
                ))}
              </ul>
            </div>
          </div>
        </>
        {/* Action button */}
        <div className="grid grid-cols-2 gap-4">
          <button className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Learn more
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Checkout
            <CartArrowNext />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
