import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { addTask } from "../../app/slices/tasksSlice";

export default function TaskPage() {
    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.tasks.tasks);

    const handleAdd =() => {
        dispatch(
            addTask({
                id: Date.now.toString(),
                title,
                completed: false,
            })
        );
        setTitle("");
    }

    return (
        <div className="p-5">
            <h1>Task Manager</h1>

            <input className="border p-2 mr-2"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            type="text" />

            <button className="bg-blue-500 text-white px-8" onClick={() => handleAdd()}>Add</button>

            <ul className="mt-4">
                {
                    tasks.map((task: any) => (
                        <li key={task.id}>{task.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}