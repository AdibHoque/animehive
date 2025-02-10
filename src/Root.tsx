import {Outlet} from "react-router";
import Navbar from "./components/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
