import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
// import { addTask, deleteTask, fetchTasks, toggleTask, upateTask } from "../../app/slices/tasksSlice";
import { useCreateTaskMutation, useDeleteTaskMutation, useGetTasksQuery } from "../../services/taskApi";

export default function TaskPage() {
    const [title, setTitle] = useState("");
    // const [editId, setEditId] = useState<string | null>(null);

    const { data: tasks = [], isLoading } = useGetTasksQuery();
    const [createTask] = useCreateTaskMutation();
    const [deleteTask] = useDeleteTaskMutation();
   
    // const dispatch = useAppDispatch();
    // const tasks = useAppSelector((state) => state.tasks.tasks);

    // const handleSubmit = () => {
    //     if (editId) {
    //         dispatch(
    //             upateTask({
    //                 id: editId,
    //                 title,
    //             })
    //         );
            
    //         setEditId(null);
    //     } else if(title.length > 0) dispatch(
    //         addTask({
    //             id: Date.now().toString(),
    //             title,
    //             completed: false,
    //         })
    //     );
    //     setTitle("");
    // }

    // useEffect(() =>{
    //    dispatch(fetchTasks());
    // },[])

    const handleAdd = async () => {
        if(!title.trim()) return;

        await createTask({
            title,
            completed: false,
        });

        setTitle("");
    };

    if (isLoading) return <p>Loading....</p>;

    return (
        <div className="p-5 flex flex-col items-center">
            <h1 className="text-3xl font-bold p-6">Task Manager</h1>

            <input className="border p-2 mr-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text" />

            {/* <button className="bg-blue-500 text-white px-8 mt-4" onClick={() => handleSubmit()}>{editId ? "Save" : "Add"}</button> */}
               <button className="bg-blue-500 text-white px-8 mt-4" onClick={() => handleAdd()}>Add</button>

            <ul className="mt-4">
                {
                    tasks.map((task) => (
                        <li key={task.id} className="mb-2 flex justify-between">
                            <div>
                            <span className={`mr-8 ${task.completed ? "line-through" : ""
                                }`}
                            >
                                {task.title}
                            </span>
                            </div>
                            <div className="flex justify-end">
                            {/* <button onClick={() => dispatch(toggleTask(task.id))}>
                                ✔
                            </button> */}
                            {/* <button className="ml-2" onClick={() => {
                                setEditId(task.id);
                                setTitle(task.title);
                            }}>
                                ✏
                            </button> */}
                            <button className="ml-2 text-red-500" onClick={() => deleteTask(task.id)}>
                                ❌
                            </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}