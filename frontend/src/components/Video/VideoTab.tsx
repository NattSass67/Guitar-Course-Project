import { deleteCourseVideo } from "@/services/video";
import { CourseVideo } from "@/types/course";
export default function VideoTab(props: {
  video: CourseVideo;
  setRefresh: Function;
  setVideo:Function;
}) {
  const onEdit = () => {};
  const onDelete = async () => {
    await deleteCourseVideo(props.video._id);
    props.setRefresh(true);
  };

  return (
    <div className="bg-white border-b-2 border-t-2 border-sky-200 p-4 grid grid-cols-2 hover:bg-sky-200 h-16">
      <div onClick={()=>{
        props.setVideo(props.video);
      }} className="font-bold text-center">{props.video.title}</div>
      <div className="flex justify-center grid-cols-2 gap-x-2">
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#6f4d4d"
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
              opacity="0.15"
              d="M4 20H8L14 14L10 10L4 16V20Z"
              fill="#2c2525"
            ></path>{" "}
            <path
              d="M10 10L4 16V20H8L14 14M10 10L13 7L17 11L14 14M10 10L14 14M14 20H20V4H4V10"
              stroke="#2c2525"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <svg
          width="32px"
          height="32px"
          viewBox="0 -0.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          onClick={onDelete}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>delete [#1487]</title> <desc>Created with Sketch.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              {" "}
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-179.000000, -360.000000)"
                fill="#000000"
              >
                {" "}
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                    id="delete-[#1487]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}
