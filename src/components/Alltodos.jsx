import { useEffect, useState } from "react";
import Todo from "./Todo";

function Alltodos({ tasksArray, setTasksArray }) {
  const deleteTask = (id) => {
    console.log("delete", id);
    const filteredArray = tasksArray.filter((item) => {
      return item.id !== id;
    });
    setTasksArray(filteredArray);
  };

  const deleteCompleted = () => {
    const filteredArray = tasksArray.filter((item) => !item.checked);
    setTasksArray(filteredArray);
  };

  return (
    <div className="bg-black pb-10 h-screen">
      <ul>
        {tasksArray.map((item, index) => {
          return (
            <Todo
              key={index}
              task={item.task}
              deleteTask={deleteTask}
              id={item.id}
              index={index}
            ></Todo>
          );
        })}
      </ul>

      {tasksArray.length > 0 && (
        <div>
          <div className="text-white rounded-b-lg bg-blue-950 p-4 mx-10 flex justify-between">
            <p className="text-sm"> {tasksArray.length} items left</p>
            <p className="text-sm" onClick={deleteCompleted}>
              Clear completed
            </p>
          </div>

          <div className="text-white rounded-lg bg-blue-950 p-4 mx-10 flex mt-4 justify-center gap-6">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Alltodos;
