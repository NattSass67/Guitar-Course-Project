import VideoUploadForm from "@/components/video-upload";

interface CoursePageProps {
    params: {
      id: string;
    };
  }

export default function UploadVideo(props:CoursePageProps) {
  return (
    <>
      <div className="flex justify-center items-center">
        <VideoUploadForm courseId={props.params.id}/>
      </div>
    </>
  );
}
