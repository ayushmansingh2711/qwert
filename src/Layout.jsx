import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoToTop from "./GoToTop";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <GoToTop />
    </>
  );
};

export default Layout;
