// VideoPlayer.tsx
import React, { useEffect, useRef } from "react";

interface VideoProp {
  videoURL: any;
}

export default function VideoPlayer(params: VideoProp) {

/*
The ref={videoRef} attribute attaches the videoRef to the <video> element.
After the component is mounted, videoRef.current will point to the underlying HTML video element
*/

  const videoRef = useRef<HTMLVideoElement | null>(null); // can be either vid or null

  useEffect(() => {
    if (params.videoURL && videoRef.current) {
      videoRef.current.src = params.videoURL;
      videoRef.current.load();
    }
  }, [params.videoURL]);

  return (
    <div>
      {params.videoURL &&
        <video controls ref={videoRef} className="object-contain" >
          Your browser does not support the video tag.
        </video>
      }
    </div>
  );
}
