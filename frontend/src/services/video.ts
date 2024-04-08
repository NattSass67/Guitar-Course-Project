import { CourseProps,CourseVideo } from "@/types/course";
import { getToken } from "@/sessions/my-auth";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;


export async function uploadVideo(
    file: File,
    title: string,
    description: string,
    courseId:string,
  ) {
    const formData = new FormData();
    formData.append("video", file);
    formData.append("description", description);
    formData.append("title", title);
    console.log(formData.values);
  
    try {
      const response = await fetch(`${backendUrl}/api/upload/${courseId}`, {
        method: "POST",
        headers: { // Don't use "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: formData,
      });
  
      if (response.ok) {
        alert("File uploaded successfully!");
        return await response.json();
      } else {
        const errorData = await response.json();
        console.error("Error uploading file:", errorData);
        alert("File upload failed. Please try again.");
        return null;
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed. Please try again.");
      return null;
    }
  }
  
  
  export async function deleteCourseVideo(id:string) {
    try {
      const response = await fetch(`${backendUrl}/api/delete-video/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      return null; // Return null or handle the error appropriately
    }
  }
  
  
  export async function fetchRenderVideoLearner(video:CourseVideo|null){
    if(!video){
      return "";
    }
    try {
    
      // Make a GET request to your backend API to fetch the video
      const response = await fetch(`${backendUrl}/api/video/learner/${video._id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}` // Include the bearer token in the request header
        },
      });
  
      if (!response.ok) {
        console.error(`Failed to fetch video: ${response.status} ${response.statusText}`);
        return "";
      }
  
      // Convert the video data to blob
      console.log(response);
      const videoBlob = await response.blob();
      
      // Create a blob URL from the video data received from the server
      const videoUrl = URL.createObjectURL(videoBlob);
      return videoUrl;
      // Set the video URL to play the video
  
    } catch (error) {
      console.error('Error fetching video:', error);
      return "";
    }
  };
  
  export async function fetchRenderVideoCreator(video:CourseVideo|null){
    if(!video){
      return "";
    }
    try {
   
      // Make a GET request to your backend API to fetch the video
      const response = await fetch(`${backendUrl}/api/video/creator/${video._id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}` // Include the bearer token in the request header
        },
      });
  
      if (!response.ok) {
        console.error(`Failed to fetch video: ${response.status} ${response.statusText}`);
        return "";
      }
      
      // Convert the video data to blob
      const videoBlob = await response.blob();
      
      // Create a blob URL from the video data received from the server
      const videoUrl = URL.createObjectURL(videoBlob);
      return videoUrl;
      // Set the video URL to play the video
  
    } catch (error) {
      console.error('Error fetching video:', error);
      return "";
    }
  };
  