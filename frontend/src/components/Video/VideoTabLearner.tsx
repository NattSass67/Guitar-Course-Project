
import { CourseVideo } from "@/types/course";
export default function VideoTabLearner(props: {
  video: CourseVideo;
  setVideo:Function;
}) {
  const onEdit = () => {};
  

  return (
    <div className="bg-white border-b-2 border-t-2 border-sky-200 p-4 grid grid-cols-2 hover:bg-sky-200 h-16">
      <div onClick={()=>{
        props.setVideo(props.video);
      }} className="font-bold text-center">{props.video.title}</div>
      
    </div>
  );
}
