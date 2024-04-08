"use client";
import CoursePlayer from "@/components/Learner/CoursePlayer";

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default function CourseEditor(props: CoursePageProps) {
 
  return (
    <>
      <CoursePlayer id={props.params.id}/>
    </>
  );
}
