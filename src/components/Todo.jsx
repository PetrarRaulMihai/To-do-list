import { useState } from "react";

function Todo({ task, deleteTask, id, index, tasksArray, setTasksArray }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <li
      className={`list-none flex justify-between px-4 border-b border-gray-400 focus:outline-none bg-blue-950 text-white p-4 mx-10 ${
        index === 0 ? "rounded-t-lg" : ""
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-4 w-4"
          onChange={handleChange}
          checked={checked}
        ></input>
        <p className={`pl-4 text-xl ${checked ? "line-through" : ""}`}>
          {task}
        </p>
      </div>

      <button onClick={() => deleteTask(id)} className="text-xl">
        X
      </button>
    </li>
  );
}

export default Todo;
