import Link from "next/link";
import CartButton from "./cartbutton";
import SearchBar from "./searchbar";
import UserButton from "./userbutton";

function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="container">
        {/* Main Header */}
        <div className="navbar  flex items-center justify-between">
          <div className="flex items-center gap-10 ">
            <div className="h-full text-black dark:text-white">
              <Link href="/" className="cursor-pointer normal-case text-xl">
                Bazar
              </Link>
            </div>
          </div>
          {/* Search Box */}
          <div className="md:block hidden">
            <SearchBar />
          </div>
          <div className="flex-none gap-2">
            {/* Cart Items */}
            <CartButton />
            {/* User */}
            <UserButton />
          </div>
        </div>
        {/* Mobile Search bar */}
        <div className="md:hidden flex justify-center">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}

export default Header;
