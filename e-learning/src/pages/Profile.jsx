import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

export default function Profile() {
  return (
    <>
      <Navbar />
        <BackButton />
      <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">

        <img
          src="https://i.pravatar.cc/150"
          className="rounded-full mx-auto"
        />

        <h2 className="text-center text-2xl font-bold mt-4">
          Engineering Student
        </h2>

        <p className="text-center">
          React Developer
        </p>

      </div>
    </>
  );
}