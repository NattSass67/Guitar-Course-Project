import { CourseProps,CourseVideo } from "@/types/course";
import { getToken } from "@/sessions/my-auth";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getAllCourseCreator() {
  try {
    const response = await fetch("http://localhost:5000/api/creator-course", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
      
    }
    return response.json();
  } catch (err) {
    console.log("Error!!", err);
    return null;
  }
}

export async function getCreatorCourseById(id: string) {
  try {
    const response = await fetch(`${backendUrl}/api/creator-course/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.log("Error!!", err);
    return null;
  }
}

export async function getLearnerCourseById(id: string) {
  try {
    const response = await fetch(`${backendUrl}/api/learner-course/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.log("Error!!", err);
    return null;
  }
}


export async function createCourse(course: CourseProps) {
  try {
    const response = await fetch("http://localhost:5000/api/create-course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(course),
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



export async function publishCourse(id:string) {
  try {
    const response = await fetch(`${backendUrl}/api/course/publish/${id}`, {
      method: "PUT",
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



export async function setPrivateCourse(id:string) {
  try {
    const response = await fetch(`${backendUrl}/api/course/private/${id}`, {
      method: "PUT",
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

export async function getPublishedCourse() {
  try {
    const response = await fetch(`${backendUrl}/api/published-course`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (err) {
    console.log("Error!!", err);
    return [];
  }
}


export async function enrollCourse(id:string) {
  try {
    const response = await fetch(`${backendUrl}/api/enroll-course`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body:JSON.stringify({
        courseId:id
      })
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


export async function getEnrolledCourse() {
  try {
    const response = await fetch(`${backendUrl}/api/enrolled-course`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (err) {
    console.log("Error!!", err);
    return null;
  }
}
