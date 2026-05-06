"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import { AppProvider, useApp } from "@/context/AppContext";

function LayoutInner({ children }) {
  const { darkMode } = useApp();

  // Render nothing until theme is detected (avoids flash)
  if (darkMode === null) return null;

  return (
    <div className={`${darkMode ? "dark" : ""} ambient-bg min-h-screen transition-colors duration-300`}>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

const Layout = ({ children }) => (
  <AppProvider>
    <LayoutInner>{children}</LayoutInner>
  </AppProvider>
);

export default Layout;
