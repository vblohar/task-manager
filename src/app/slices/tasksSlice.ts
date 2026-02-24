// import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import type { Task } from "../models/types";



// interface TasksState {
//     tasks: Task[];
//     loading: boolean;
//     error: string | null;
// }

// const dummyTask: Task[] =[
//     {id: "1", title: "Vaibhav", completed: false },
//     {id: "2", title: "Sarang", completed: false }
// ]

// const initialState: TasksState = {
//     tasks: [],
//     loading: false,
//     error: null
// }

// export const fetchTasks = createAsyncThunk(
//     "tasks/fetchTasks",
//     async () => {
//         const response = await new Promise<any>((resolve) => 
//         setTimeout(() => resolve(
//             dummyTask
//         ), 1000));
//         console.log(response);
//         return response;
//     }
// )

// const tasksSlice = createSlice({
//     name: "tasks",
//     initialState,
//     reducers: {
//         addTask: (state, action: PayloadAction<Task>) => {
//             state.tasks.push(action.payload);
//         },

//         deleteTask: (state, action: PayloadAction<string>) => {
//             state.tasks = state.tasks.filter(task => 
//                 task.id !== action.payload
//             );
//         },

//         toggleTask: (state, action: PayloadAction<string>) => {
//             const task = state.tasks.find(task => task.id === action.payload);
//             if(task) task.completed === !task.completed;
//         },

//         upateTask: (state, action: PayloadAction<{id: string; title: string}>) => {
//             const task = state.tasks.find(task => 
//                 task.id === action.payload.id
//             );
//             if(task) task.title = action.payload.title;
//         }
//     },
//     extraReducers(builder) {
//         builder
//         .addCase(fetchTasks.pending, (state) => {
//             state.loading = true;
//         })
//         .addCase(fetchTasks.fulfilled, (state, action) => {
//             state.loading = false;
//             state.tasks = action.payload;
//         })
//         .addCase(fetchTasks.rejected, (state) => {
//             state.loading = false;
//             state.error = "Failed to fetch tasks";
//         })
//     },
// });

// export const { addTask, deleteTask, upateTask, toggleTask } = tasksSlice.actions;
// export default tasksSlice.reducer;