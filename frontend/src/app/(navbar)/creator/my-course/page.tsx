"use client";

import Card from "@/components/CourseEditor/CreatorCourseCard";
import { getAllCourseCreator } from "@/services/course";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface CourseData {
  title: string;
  _id: string;
}

export default function MyCourse() {
  const [data, setData] = useState<CourseData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async function () {
      const result = await getAllCourseCreator();
      if (result) {
        setData(result.data);
      } else {
        setData([]);
      }
    };
    getData();
  }, []);

  const courseList = data.map((object, index) => {
    return <Card key={index} title={object.title} courseId={object._id} />;
  });

  return (
    <>
      <div className="fixed top-36 left-10">
        <svg
          onClick={()=>{router.push('/creator/createcourse')}}
          fill="#000000"
          width="64px"
          height="64px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-105"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>{" "}
          </g>
        </svg>
      </div>
      <div className="flex flex-wrap px-8 justify-center">{courseList}</div>
    </>
  );
}
