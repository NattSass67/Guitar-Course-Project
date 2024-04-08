import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
   username: string ;
   token:string;
   creator:boolean;
  // Add more user properties as needed
}

interface SessionState {
  isLoggedIn: boolean;
  user: User|null;
  loading: boolean; // Add loading state to track API request status
}

const initialState: SessionState = {
  isLoggedIn: false,
  user: null,
  loading: false, // Initialize loading state
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true; // Set loading state to true when login starts
    },
    loginSuccess(state, action) {
      console.log("Action :",action)
      state.loading = false; // Set loading state to false when login succeeds
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailure(state) {
      state.loading = false; // Set loading state to false when login fails
    },
    logout(state) { 
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  sessionSlice.actions;

export default sessionSlice.reducer;
