import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../models/task";

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: [],
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
    },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;