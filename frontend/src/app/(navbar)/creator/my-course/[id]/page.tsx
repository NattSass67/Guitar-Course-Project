"use client";
import Editor from "@/components/CourseEditor/Editor";

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default function CourseEditor(props: CoursePageProps) {
 
  return (
    <>
      <Editor id={props.params.id}/>
    </>
  );
}
