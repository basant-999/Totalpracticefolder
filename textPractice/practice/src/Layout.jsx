import React from 'react';
import { Link,Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul style={{ display: "flex", gap: "10px", padding: 0, margin: 0 }}>
        <li style={{ listStyle: "none" }}>
          <Link to="/home" style={{ textDecoration: "none" }}>Home</Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to="/about" style={{ textDecoration: "none" }}>About</Link>
        </li>

         <li style={{ listStyle: "none" }}>
          <Link to="/redux-practice" style={{ textDecoration: "none" }}>ReduxPrac</Link>
        </li>

        <li style={{ listStyle: "none" }}>
          <Link to="/display/1" style={{ textDecoration: "none" }}>Display</Link>
        </li>
      </ul>

      <Outlet/>
    </>
  );
};

export default Layout;
