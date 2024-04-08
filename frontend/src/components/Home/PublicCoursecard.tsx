"use client";
import { enrollCourse } from "@/services/course";
import { useAppSelector } from "@/sessions/store";
import { useRouter } from "next/navigation";

export default function Card(params: {
  title: string;
  courseId: string;
  description: string;
}) {
  const isAllowed = useAppSelector((state) => state.mySession.isLoggedIn);
  const router = useRouter();
  const onEnroll = async () => {
    if (isAllowed) {
      const response = await enrollCourse(params.courseId);
      console.log(response);
      router.push("/my-courses");
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8 overflow-hidden transition ease-in-out hover:-translate-y-1 hover:scale-105">
        <img src={"/guitar.jpg"} alt="Image" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {params.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.{params.description}
          </p>
          <button
            onClick={onEnroll}
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Enroll / Checkout
          </button>
        </div>
      </div>
    </>
  );
}
