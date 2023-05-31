import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import "./layout.css";
function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
