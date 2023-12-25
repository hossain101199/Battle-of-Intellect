import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  accessToken?: string | null;
  name?: string | null;
  role?: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  name: null,
  role: null,
};

export const authSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {
    setLoggedInUserInfo: (state, action: PayloadAction<AuthState>) => {
      if (action.payload.accessToken !== undefined) {
        state.accessToken = action.payload.accessToken;
      }
      if (action.payload.name !== undefined) {
        state.name = action.payload.name;
      }
      if (action.payload.role !== undefined) {
        state.role = action.payload.role;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUserInfo } = authSlice.actions;

export default authSlice;
