"use client";

import { uploadVideo } from "@/services/video";
import { useRouter } from "next/navigation";
import { useState } from "react";
import VideoPreview from "./video-preview";

export default function VideoUploadForm(props: { courseId: string }) {
  const router=useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleFileChange = (event: any) => {
    console.log(event);
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }
    const result = await uploadVideo(selectedFile, title, description ,props.courseId);
    if(result.success){
      router.push(`/creator/my-course/${props.courseId}`);
    }
  };

  return (
    <div className="h-screen block w-3/4">
      <div className="flex flex-col sm:flex-row">
        <div className="h-full sm:w-1/2 w-full p-4 block">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white p-4">
            Video Title
          </label>
          <textarea
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="message"
            rows={1}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white p-4">
            Video Description
          </label>
          <textarea
            onChange={handleDescriptionChange}
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className=" w-full sm:w-1/2 p-4 flex flex-col">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white p-4">
            Video Preview
          </label>
          <VideoPreview file={selectedFile} />
        </div>
      </div>

      <div className="flex p-8 justify-center">
        <input
          className="block w-128 text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
        />
        <button
          className="block text-sm text-slate-500
      mr-4 py-2 px-4
      rounded-full border-0
      text-sm font-semibold
      bg-violet-50 text-violet-700
      hover:bg-violet-100"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
