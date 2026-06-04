import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-bold text-2xl">
          EduTech
        </h1>

        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/mycourses">My Courses</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col p-4 gap-3 bg-indigo-800">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/mycourses">My Courses</Link>
          <Link to="/profile">Profile</Link>
        </div>
      )}
    </nav>
  );
}