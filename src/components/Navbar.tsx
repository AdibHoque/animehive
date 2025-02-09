import {
  ChevronLeft,
  Languages,
  MessagesSquare,
  Radio,
  Search,
  Shuffle,
  Twitter,
} from "lucide-react";
import {Link} from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="drawer w-8 flex justify-center items-center ">
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
            <ul className="space-y-2 bg-base-200 text-base-content min-h-full w-80 p-4 opacity-90">
              {/* Sidebar content here */}
              <li>
                <label htmlFor="my-drawer" className="drawer-button">
                  <a className="flex gap-2 my-4 cursor-pointer hover:text-green-500">
                    <ChevronLeft />
                    Close Menu
                  </a>
                </label>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/">
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
      <div className="navbar-end flex gap-12">
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

        <div className="flex justify-between gap-8 max-lg:hidden">
          <div className="flex flex-col justify-center items-center">
            <Radio className="text-green-500" />
            <h5 className="text-sm font-medium">Watch2gether</h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Shuffle className="text-green-500" />
            <h5 className="text-sm font-medium">Random</h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Languages className="text-green-500" />
            <h5 className="text-sm font-medium">Anime Name</h5>
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
