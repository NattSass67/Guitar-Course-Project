"use client";
import { getLearnerCourseById } from "@/services/course";
import { fetchRenderVideoLearner } from "@/services/video";
import { CourseData, CourseVideo } from "@/types/course";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import VideoPlayer from "../Video/VideoPlayer";
import VideoTabLearner from "../Video/VideoTabLearner";

interface CoursePageProps {
  id: string;
}

export default function CoursePlayer(props: CoursePageProps) {
  const [data, setData] = useState<CourseData | null>(null);
  const [refresh, setRefresh] = useState<boolean>(true);
  const [video, setVideo] = useState<CourseVideo | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const exec = async () => {
      const course = await getLearnerCourseById(props.id);
      console.log(course);
      setData(course);
    };
    if (refresh) {
      exec();
      setRefresh(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  useEffect(() => {
    const renderVideo = async () => {
      const res = await fetchRenderVideoLearner(video);
      setVideoUrl(res);
    };

    renderVideo();
  }, [video]);


  const videoBar = data?.videos.map((video, index) => {
    return (
      <VideoTabLearner
        key={index}
        video={video}
        setVideo={setVideo}
      />
    );
  });

  return (
    <>
      <div>
        <p className="font-bold text-2xl text-center mb-4">{data?.title}</p>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="flex md:row-span-2 md:col-span-2 bg-neutral-900 items-center overflow-y-auto sm:h-[400px] h-[250px] md:h-[500px]">
            <VideoPlayer videoURL={videoUrl} />
          </div>
          <div className="md:row-span-2 col-span-1 bg-stone-200 overflow-y-auto sm:h-[400px] h-[250px] md:h-[500px]">
            {videoBar}
          </div>
        </div>
      </div>
    </>
  );
}
