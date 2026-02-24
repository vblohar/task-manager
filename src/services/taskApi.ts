import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Task } from "../app/models/types";


export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api",
    }),
    tagTypes: ["Task"],
    endpoints: (builder) => ({
        getTasks: builder.query<Task[], void>({
            query: () => ({ url: "tasks"}),
                providesTags: ["Task"],
        }),

        createTask: builder.mutation<Task, Partial<Task>>({
            query: (task) => ({
            url: "create",
            method: "POST",
            body: task
            }),
            invalidatesTags: ["Task"] 
        }),

        deleteTask: builder.mutation<void, string>({
            query: (id) => ({
                url: `tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Task"],
        }),
        
    }),
});

export const {
    useGetTasksQuery,
    useCreateTaskMutation,
    useDeleteTaskMutation,
} = taskApi;