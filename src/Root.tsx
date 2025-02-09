import {Outlet} from "react-router";
import Navbar from "./components/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}

export default Root;
