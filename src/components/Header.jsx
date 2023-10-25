import { BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Alltodos from "./Alltodos";

function Header() {
  const [tasksArray, setTasksArray] = useState([]);

  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      task: task,
      checked: false,
    };

    setTasksArray([...tasksArray, newTask]);
    setTask(" ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(tasksArray);

  return (
    <div>
      <header className="mobileImg px-10 py-10">
        <div className="flex justify-between py-10">
          <h1 className="text-white tracking-custom-tracking text-4xl font-bold ">
            TODO
          </h1>

          <div className=" flex justify-center items-center">
            <BsFillSunFill color={"white"} size={"2rem"} />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex  px-3 gap-3 py-5 bg-blue-950"
        >
          <input
            type="text"
            value={task}
            onChange={handleChange}
            className="border-none focus:outline-none bg-blue-950 text-white"
            placeholder="Create a new todo..."
          ></input>
          <button onClick={addTask} className="text-white">
            Add
          </button>
        </form>
      </header>

      <Alltodos
        tasksArray={tasksArray}
        setTasksArray={setTasksArray}
      ></Alltodos>
    </div>
  );
}

export default Header;
