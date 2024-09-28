import Header from "./component/Header";
import headerImg from "./assets/header.svg";
import { useState } from "react";
import TaskList from "./component/TaskList";
import NewTask from "./component/NewTask";

export type TaskType = {
  id: number;
  title: string;
  description: string;
};

const App = () => {
  const [tasks, setTask] = useState<Array<TaskType>>([]);

  const handleAddTask = (task: string, details: string) => {
    setTask((prevTask) => {
      const newTask: TaskType = {
        id: Math.random(),
        title: task,
        description: details,
      };

      return [...prevTask, newTask];
    });
  };

  const handleDeleteTask = (id: number) => {
    setTask(prevTask => prevTask.filter(task => task.id !== id))

  };
  return (
    <main>
      <Header image={{ src: headerImg, alt: "A simple To-Do App" }}>
        <h1>Cose-da-fare</h1>
      </Header>
      <NewTask onAddTask={handleAddTask} />
      <TaskList task={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  );
};

export default App;
