import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">

      <img
        src={course.image}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">

        <h2 className="font-bold text-xl">
          {course.title}
        </h2>

        <p>{course.instructor}</p>

        <div className="my-3">
          <ProgressBar progress={course.progress} />
        </div>

        <Link
          to={`/course/${course.id}`}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          View Course
        </Link>

      </div>
    </div>
  );
}