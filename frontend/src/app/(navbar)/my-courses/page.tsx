"use client";
import CardLearner from "@/components/Learner/LearnerCourseCard";
import { getEnrolledCourse } from "@/services/course";
import { CourseData } from "@/types/course";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/sessions/store";
import { useRouter } from "next/navigation";

export default function MyCourse() {
  const [data, setData] = useState<CourseData[]>([]);
  const isLoggedIn = useAppSelector((state) => state.mySession.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    const getData = async function () {
      const result = await getEnrolledCourse();
      if (result) {
        console.log(result);
        setData(result.data);
      } else {
        setData([]);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
    }
  }, [isLoggedIn,router]);

  const courseList = data.map((object, index) => {
    return (
      <CardLearner
        key={index}
        title={object.title}
        courseId={object._id}
        description={object.description}
      />
    );
  });

  return (
    <>
      <div className="flex flex-wrap px-8 justify-center">{courseList}</div>
    </>
  );
}
