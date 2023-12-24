import { API } from "../../api/apiSlice";

interface ProfileData {
  name: string;
  email: string;
}

const profileAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: `/profile`,
      }),
      providesTags: ["profileUpdated"],
    }),

    updateProfile: builder.mutation<void, Partial<ProfileData>>({
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
