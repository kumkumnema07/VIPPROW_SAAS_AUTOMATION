// app/routesfeedback//data/feedbackApi.ts - (using RTK Query)

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "~/utils/auth";

interface PaginationParams {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
}

interface Feedback {
    _id?: string;
    title: string;
    slug?: string;
    category?: string | null;
    short_description?: string;
    description?: string;
    thumbnail?: string | null;
    gallery_images?: string[];
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        metaKeywords?: string[];
    };
    isActive?: boolean;
    isFeature?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export const feedbackApi = createApi({
    reducerPath: "feedbackApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/`,
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) headers.set("Authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    tagTypes: ["Feedback"],

    endpoints: (builder) => ({
        /* ------------------ 🟢 PUBLIC ------------------ */
        getPublicFeedbacks: builder.query<
            { data: Feedback[]; pagination: any },
            PaginationParams
        >({
            query: ({ page = 1, limit = 10, search = "" }) =>
                `feedback?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`,
            providesTags: ["Feedback"],
        }),

        getFeedbackById: builder.query<{ data: Feedback }, string>({
            query: (id) => `feedback/${id}`,
            providesTags: (result, error, id) => [{ type: "Feedback", id }],
        }),

        /* ------------------ 🔒 ADMIN ------------------ */
        getFeedbacks: builder.query<
            { data: Feedback[]; pagination: any },
            { page?: number; limit?: number; search?: string; sortBy?: string; sortOrder?: string; filter?: string }
        >({
            query: ({
                page = 1,
                limit = 10,
                search = "",
                sortBy = "createdAt",
                sortOrder = "desc",
                filter = "all",
            }) =>
                `feedback/admin/all?page=${page}&limit=${limit}&search=${encodeURIComponent(
                    search
                )}&sortBy=${sortBy}&sortOrder=${sortOrder}&filter=${filter}`,
            providesTags: ["Feedback"],
        }),


        createFeedback: builder.mutation<{ message: string; data: Feedback }, FormData>({
            query: (formData) => ({
                url: `feedback/admin`,
                method: "POST",
                body: formData,
            }),
            invalidatesTags: ["Feedback"],
        }),

        updateFeedback: builder.mutation<
            { message: string; data: Feedback },
            { id: string; formData: FormData }
        >({
            query: ({ id, formData }) => ({
                url: `feedback/admin/${id}`,
                method: "PUT",
                body: formData,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: "Feedback", id },
                "Feedback",
            ],
        }),

        partiallyUpdateFeedback: builder.mutation<
            { message: string; data: Feedback },
            { id: string; data: Partial<Feedback> }
        >({
            query: ({ id, data }) => ({
                url: `feedback/admin/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Feedback"],
        }),

        deleteFeedback: builder.mutation<{ message: string }, string>({
            query: (id) => ({
                url: `feedback/admin/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Feedback"],
        }),
    }),
});

export const {
    useGetPublicFeedbacksQuery,
    useGetFeedbackByIdQuery,
    useGetFeedbacksQuery,
    useCreateFeedbackMutation,
    useUpdateFeedbackMutation,
    usePartiallyUpdateFeedbackMutation,
    useDeleteFeedbackMutation,
} = feedbackApi;
