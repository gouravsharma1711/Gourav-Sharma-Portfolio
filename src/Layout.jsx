import React from "react";
import NavBar from "./components/NavBar/NavBar";

function Layout({ children,loadingAnimationDone }) {
  return (
    <>
      {loadingAnimationDone && <NavBar />}
      <main>{children}</main>
    </>
  );
}

export default Layout;
