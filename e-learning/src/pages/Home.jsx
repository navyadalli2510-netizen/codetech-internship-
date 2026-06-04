import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <BackButton />

      <section className="min-h-screen bg-gradient-to-r from-indigo-700 to-purple-700 text-white flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-6xl font-bold">
            Learn Engineering Skills
          </h1>

          <p className="mt-4 text-xl">
            Java • React • DSA • AI • Cloud
          </p>

          <Link
            to="/courses"
            className="bg-white text-indigo-700 px-6 py-3 rounded-lg mt-5 inline-block"
          >
            Explore Courses
          </Link>

        </div>

      </section>
    </>
  );
}