// components/VideoPreview.js
"use client";

import React, { useState, useEffect } from "react";

interface VideoProp {
  file: any;
}

export default function VideoPreview(params: VideoProp) {
  const file = params.file;
  const [previewURL, setPreviewURL] = useState< string |null >(null);

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();
    
    // The onload event is triggered when the FileReader has successfully read the file. 
    // That means it triggers after reader.readAsDataURL(file);
    reader.onload = () => {
      // The result property contains the data URL representing the file's content.
      setPreviewURL(reader.result as string); //use as to tell typescript to trust me.
    };

    // The readAsDataURL method reads the contents of the specified file as a data URL.
    reader.readAsDataURL(file);
  }, [file]);

  return (
    <div className="flex h-full justify-center">
      {previewURL ? (
        <video controls className="h-full bg-black">
          <source src={previewURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>No preview available</p>
      )}
      
    </div>
  );
}
