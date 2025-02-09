import {Outlet} from "react-router";

function Root() {
  return (
    <>
      <h1>Hi</h1>
      <Outlet />
      <h1>bye</h1>
    </>
  );
}

export default Root;
