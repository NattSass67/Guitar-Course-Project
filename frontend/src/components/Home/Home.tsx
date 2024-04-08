"use client";

import Card from "@/components/Home/PublicCoursecard";
import { getPublishedCourse } from "@/services/course";
import { CourseData } from "@/types/course";
import { useEffect, useState } from "react";



export default function HomePage() {
  const [data, setData] = useState<CourseData[]>([]);

  useEffect(() => {
    const getData = async function () {
      const result = await getPublishedCourse();
      setData(result.data);
    };
    getData();
  }, []);

  const courseList = data.map((object, index) => {
    return <Card key={index} title={object.title} courseId={object._id} description={object.description} />;
  });

  return (
    <>
      <div className="flex flex-wrap ">{courseList}</div>
    </>
  );
}
