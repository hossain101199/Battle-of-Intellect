import { API } from "../../api/apiSlice";

const profileAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: `/profile`,
        method: "GET",
      }),
      providesTags: ["profileUpdated"],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/profile`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["profileUpdated"],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileAPI;
