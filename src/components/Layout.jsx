"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className={`bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>{children}</main>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
