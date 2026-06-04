import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";
import BackButton from "../components/BackButton";

export default function MyCourses() {
  return (
    <>
      <Navbar />
      <BackButton />

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          My Courses
        </h1>

        <div className="grid md:grid-cols-3 gap-5">
          {courses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

      </div>
    </>
  );
}