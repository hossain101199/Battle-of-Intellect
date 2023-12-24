import { configureStore } from "@reduxjs/toolkit";
import { API } from "./api/apiSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,

    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
