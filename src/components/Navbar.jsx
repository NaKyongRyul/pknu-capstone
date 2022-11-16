import React from "react";
import { Link } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

export default function Navbar() {
  //   const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="w-full flex justify-between p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <GiTeacher className="text-4xl text-blue-300" />
        <h1 className="font-bold ml-4 text-3xl">pknu-live-coaching</h1>
      </Link>
      <button
        onClick={toggleDarkMode}
        className="text-2xl mr-4 cursor-pointer bg-transparent text-[color:var(--color-darkBtn)] hover:text-[color:var(--color-accent)] hover:scale-150"
      >
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
    </header>
  );
}
