import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  name: string | null;
  role: string | null;
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
      state.accessToken = action.payload.accessToken;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUserInfo } = authSlice.actions;

export default authSlice;
