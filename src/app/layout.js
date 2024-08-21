import { Inter } from "next/font/google";
import "./globals.css";

import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roy el Hayek's Portfolio",
  description: "Portfolio of Roy el Hayek, a software engineer based in Lebanon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
