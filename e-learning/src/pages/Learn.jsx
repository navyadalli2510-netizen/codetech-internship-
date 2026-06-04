import { useParams } from "react-router-dom";
import courses from "../data/courses";
import BackButton from "../components/BackButton";

export default function Learn() {

  const { id } = useParams();

  const course = courses.find(
    c => c.id === Number(id)
  );

  return (
    
    <div className="max-w-6xl mx-auto p-6">

      <BackButton />

      <h1 className="text-3xl font-bold mb-5">
        {course.title}
      </h1>

      <div className="aspect-video">

        <iframe
          className="w-full h-full rounded-xl"
          src={course.video}
          title="course-video"
          allowFullScreen
        />

      </div>

    </div>
  );
}