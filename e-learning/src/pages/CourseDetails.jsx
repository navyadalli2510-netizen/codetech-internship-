import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";
import BackButton from "../components/BackButton";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find(
    c => c.id === Number(id)
  );

  return (
    <div className="p-8">
        <BackButton />
      <img
        src={course.image}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-4xl mt-4 font-bold">
        {course.title}
      </h1>

      <p className="my-3">
        Learn everything from basics to advanced.
      </p>

      <Link
        to={`/learn/${course.id}`}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Start Learning
      </Link>

    </div>
  );
}