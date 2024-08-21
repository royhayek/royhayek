import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="text-xl font-burtons">Portfolio</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" />
        </li>
        <li>
          <Link
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="/docs/cv.pdf"
            download
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
