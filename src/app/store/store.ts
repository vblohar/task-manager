import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "../../services/taskApi";


export const store = configureStore({
    reducer: {
        // tasks: tasksReducer,
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;