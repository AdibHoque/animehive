"use client";

import {
  ChevronLeft,
  Languages,
  MessagesSquare,
  Radio,
  Search,
  Shuffle,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {
  const location = usePathname();
  return (
    <div
      className={`navbar max-md:bg-base-100 shadow-sm ${
        location == "/" ? "absolute" : ""
      } top-0 md:bg-gradient-to-b from-black/60 from-10% via-black/30 to-transparent z-50`}
    >
      <div className="navbar-start">
        <div className="drawer w-8 flex justify-center items-center z-50">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="drawer-button">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block size-7 font-bold cursor-pointer stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>{" "}
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="space-y-2 bg-base-200 text-base-content min-h-full w-80 p-4 opacity-90 ">
              {/* Sidebar content here */}
              <li>
                <label htmlFor="my-drawer" className="drawer-button">
                  <a className="flex gap-2 my-4 cursor-pointer border-transparent border-2 hover:border-gray-500 py-2 hover:border-2 rounded-3xl">
                    <ChevronLeft />
                    Close Menu
                  </a>
                </label>
                <div className="flex justify-between">
                  <div className="flex flex-col justify-center items-center cursor-pointer">
                    <Radio className="text-green-500" />
                    <h5 className="text-sm font-medium">Watch2gether</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center cursor-pointer">
                    <Shuffle className="text-green-500" />
                    <h5 className="text-sm font-medium">Random</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center cursor-pointer">
                    <Languages className="text-green-500" />
                    <h5 className="text-sm font-medium">AnimeName</h5>
                  </div>
                </div>
              </li>
              <li>
                <a className="flex gap-2 my-4 cursor-pointer  py-2 bg-gray-500/90 font-medium justify-center items-center rounded-3xl">
                  <MessagesSquare className="text-green-500" /> Community
                </a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <Link href="/">
          <h2 className="text-2xl lg:text-3xl font-bold px-2 md:px-6 ">
            Anime<span className="text-green-500">Hive</span>
          </h2>
        </Link>
        <label className="input scheme-light max-xl:hidden">
          <input type="text" className="grow" placeholder="Search Anime" />
          <Search />
          <span className="badge badge-neutral badge-sm">Filter</span>
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* <label className="input scheme-light light">
          <input type="text" className="grow" placeholder="Search Anime" />
          <Search />
          <span className="badge badge-neutral badge-sm">Filter</span>
        </label> */}
      </div>
      <div className="navbar-end flex gap-8">
        <div className="flex gap-6 ml-6 max-lg:hidden">
          <div className="rounded-full size-8 bg-blue-400 flex justify-center items-center">
            <Twitter className="text-white" fill="#ffffff" />
          </div>
          <div className="rounded-full size-8 bg-blue-400 flex justify-center items-center">
            <Twitter className="text-white" fill="#ffffff" />
          </div>
          <div className="rounded-full size-8 bg-blue-400 flex justify-center items-center">
            <Twitter className="text-white" fill="#ffffff" />
          </div>
          <div className="rounded-full size-8 bg-blue-400 flex justify-center items-center">
            <Twitter className="text-white" fill="#ffffff" />
          </div>
        </div>

        <div className="flex justify-between gap-6 max-lg:hidden">
          <div className="flex flex-col justify-center items-center">
            <Radio className="text-green-500" />
            <h5 className="text-sm font-medium">Watch2gether</h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Shuffle className="text-green-500" />
            <h5 className="text-sm font-medium">Random</h5>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <Languages className="text-green-500" />
            <h5 className="text-sm font-medium">AnimeName</h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <MessagesSquare className="text-green-500" />
            <h5 className="text-sm font-medium">Community</h5>
          </div>
        </div>
        <a className="btn bg-green-500 font-bold rounded-lg text-black">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
