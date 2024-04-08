"use client";
import { createCourse } from "@/services/course";
import { useAppSelector } from "@/sessions/store";
import { CourseProps } from "@/types/course";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CourseCreatePage() {
  const [title, setTitle] = useState<string>("");
  const [instructor, setInstructor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const router = useRouter();
  const selector = useAppSelector((state) => {
    return state.mySession;
  });

  useEffect(() => {
    if (!selector.isLoggedIn) {
      router.push("/auth/login");
    }
  }, [selector, router]);

  if (!selector.isLoggedIn) {
    return <></>;
  }

  const handleCreateCourse = async () => {
    const courseData: CourseProps = { description, instructor, title };
    try {
      if (selector.user) {
        const response = await createCourse(courseData);
        console.log(response);
        router.push("/creator/my-course")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-200 p-8 justify-center bg-cover md:h-screen">
      <div className="justify-center flex border border-gray-200 rounded-lg shadow-lg shadow-cyan-500/50 dark:bg-gray-800">
        <div className="hidden md:flex w-1/3 rounded-l-lg ">
          <Image src="/guitar.jpg" alt="" width={1000} height={1000} className="w-full h-full rounded-l-lg"></Image>
        </div>
        <div className="w-full flex flex-col ">
          <div className="p-8 ">
            <h3>Course Instructor</h3>
            <input
              value={instructor}
              onChange={(e) => {
                setInstructor(e.target.value);
              }}
              type="text"
              className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <h3>Course Title/Name</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <h3>Course Overview</h3>
            <textarea
              rows={5}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              id="message"
              className="block p-2 w-full h-1/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
            <button
              onClick={()=>{handleCreateCourse()}}
              type="button"
              className="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
