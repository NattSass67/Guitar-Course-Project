
import { loginFailure, loginStart, loginSuccess, logout } from "./sessionReducers";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

interface LoginCredentials {
  email: string;
  password: string;
}

export const loginUser = (credentials: LoginCredentials) => {
  return async (dispatch:any, getState:any) => {
    dispatch(loginStart()); // Dispatch loginStart action to set loading state
    try {
      // Make API call to backend login endpoint
      const response = await fetch(`${backendUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
   
      if (response.ok) {
        const user = await response.json();
        localStorage.setItem('token',user.token);
        console.log(user);
        //console.log(localStorage.getItem('token'));
        dispatch(loginSuccess(user)); // Dispatch loginSuccess action with user data
      } else {
        dispatch(loginFailure()); // Dispatch loginFailure action if login fails
      }
    } catch (error) {
      dispatch(loginFailure()); // Dispatch loginFailure action if login encounters an error
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(logout()); // Dispatch the logout action to update the Redux state
    localStorage.removeItem('token'); // Remove the token from localStorage
  };
};

export const getToken=()=>{
  return localStorage.getItem('token');
}


export async function register(props:{username:string ,email:string,password:string}) {
    try {
      const response = await fetch(`${backendUrl}/api/auth/create-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(props)
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