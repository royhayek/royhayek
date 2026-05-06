import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata = {
  title: "Roy El Hayek's Portfolio",
  description: "Portfolio of Roy El Hayek, a software engineer based in Lebanon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
