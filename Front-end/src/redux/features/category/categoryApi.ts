import { API } from "@/redux/api/apiSlice";

const categoryAPIs = API.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: `/categories`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["category"],
    }),

    getCategories: builder.query({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useCreateCategoryMutation, useGetCategoriesQuery } =
  categoryAPIs;
