"use client";
import {
  getCreatorCourseById,
  publishCourse,
  setPrivateCourse,
} from "@/services/course";
import { fetchRenderVideoCreator } from "@/services/video";
import { CourseData, CourseVideo } from "@/types/course";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import VideoPlayer from "../Video/VideoPlayer";
import VideoTab from "../Video/VideoTab";

interface CoursePageProps {
  id: string;
}

export default function Editor(props: CoursePageProps) {
  const [data, setData] = useState<CourseData | null>(null);
  const [refresh, setRefresh] = useState<boolean>(true);
  const [video, setVideo] = useState<CourseVideo | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [isPublish, setIsPublish] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const exec = async () => {
      const course = await getCreatorCourseById(props.id);
      console.log(course);
      if (course) {
        setData(course);
        setIsPublish(course.publish);
      }
    };
    console.log("refresh trigger", refresh);
    if (refresh) {
      exec();
      setRefresh(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  useEffect(() => {
    const renderVideo = async () => {
      const res = await fetchRenderVideoCreator(video);
      setVideoUrl(res);
    };

    renderVideo();
  }, [video]);

  const onSave = async () => {
    if (isPublish) {
      await publishCourse(props.id);
    } else {
      await setPrivateCourse(props.id);
    }
    router.push("/creator/my-course");
  };

  const videoBar = data?.videos.map((video, index) => {
    return (
      <VideoTab
        key={index}
        video={video}
        setRefresh={setRefresh}
        setVideo={setVideo}
      />
    );
  });

  return (
    <>
      <div>
        <p className="font-bold text-2xl text-center mb-4">{data?.title}</p>
        <div className="grid grid-cols-3 ">
          <div className="flex row-span-2 col-span-3 md:col-span-2 bg-neutral-900 items-center overflow-hidden sm:h-[400px] h-[250px] md:h-[500px]">
            <VideoPlayer videoURL={videoUrl} />
          </div>
          <div className="row-span-2 md:col-span-1 col-span-2 bg-stone-200 overflow-y-auto sm:h-[400px] h-[250px] md:h-[500px]">
            {videoBar}
          </div>
          <div className="md:col-span-3 col-span-1  overflow-y-auto border-sky-200 md:flex gap-x-4 ">
            <a
              href={`/creator/my-course/${props.id}/upload`}
              className="hover:bg-gray-200 h-16"
            >
              {" "}
              <div className="p-4 flex gap-x-4">
                {" "}
                <div className="font-semibold">Add video</div>
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14.7295 5.86V2.5C14.7295 2.22 14.5095 2 14.2295 2H9.76953C9.48953 2 9.26953 2.22 9.26953 2.5V5.86C9.26953 6.14 9.48953 6.36 9.76953 6.36H14.2295C14.5095 6.36 14.7295 6.14 14.7295 5.86Z"
                      fill="#292D32"
                    ></path>{" "}
                    <path
                      d="M7.24851 2.0207C4.68851 2.1807 2.93851 3.5007 2.28851 5.7007C2.18851 6.0307 2.42851 6.3607 2.76851 6.3607H7.26851C7.54851 6.3607 7.76851 6.1407 7.76851 5.8607V2.5207C7.76851 2.2407 7.52851 2.0007 7.24851 2.0207Z"
                      fill="#292D32"
                    ></path>{" "}
                    <path
                      d="M16.7505 2.00898C19.3105 2.16898 21.0605 3.48898 21.7105 5.68898C21.8105 6.01898 21.5705 6.34898 21.2305 6.34898H16.7305C16.4505 6.34898 16.2305 6.12898 16.2305 5.84898V2.50898C16.2305 2.22898 16.4705 1.98898 16.7505 2.00898Z"
                      fill="#292D32"
                    ></path>{" "}
                    <path
                      d="M22 15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C15.69 21.99 15.7 22 15.71 22C16.46 22.63 17.43 23 18.5 23C20.14 23 21.57 22.12 22.35 20.82C22.58 20.43 22.76 20 22.87 19.55C22.96 19.21 23 18.86 23 18.5C23 17.44 22.63 16.46 22 15.7ZM20.18 19.23H19.25V20.2C19.25 20.61 18.91 20.95 18.5 20.95C18.09 20.95 17.75 20.61 17.75 20.2V19.23H16.82C16.41 19.23 16.07 18.89 16.07 18.48C16.07 18.07 16.41 17.73 16.82 17.73H17.75V16.84C17.75 16.43 18.09 16.09 18.5 16.09C18.91 16.09 19.25 16.43 19.25 16.84V17.73H20.18C20.59 17.73 20.93 18.07 20.93 18.48C20.93 18.89 20.6 19.23 20.18 19.23Z"
                      fill="#292D32"
                    ></path>{" "}
                    <path
                      d="M22 8.35937V12.7394C22 13.1094 21.61 13.3494 21.28 13.1794C20.44 12.7394 19.48 12.4994 18.5 12.4994C16.89 12.4994 15.32 13.1594 14.2 14.3094C13.1 15.4294 12.5 16.9194 12.5 18.4994C12.5 19.3094 12.82 20.3494 13.22 21.2194C13.38 21.5694 13.14 21.9994 12.75 21.9994H7.81C4.6 21.9994 2 19.3994 2 16.1894V8.35937C2 8.07937 2.22 7.85938 2.5 7.85938H21.5C21.78 7.85938 22 8.07937 22 8.35937Z"
                      fill="#292D32"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </a>

            <div className="flex items-center p-4">
              <input
                type="checkbox"
                checked={isPublish}
                onChange={(e) => {
                  setIsPublish(e.target.checked);
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Publish
              </label>
            </div>

            <button
              onClick={onSave}
              className="m-4 px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
