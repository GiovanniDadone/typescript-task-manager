import { ReactNode } from "react";
import { TaskType } from "../App";
import InfoBox from "./InfoBox";
import Task from "./Task";

type TaskListType = {
  task: TaskType[];
  onDeleteTask: (id: number) => void;
};

const TaskList = ({ task, onDeleteTask }: TaskListType) => {
  if (task.length === 0) {
    return (
      <InfoBox mode={"hint"}>
        <p>Nessun impegno, inizia ad aggiungerne</p>
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (task.length >= 6) {
    warningBox = (
      <InfoBox
        mode={"warning"}
        severity={"low"}>
        <p>Wow non stai esagerando? Cerca di darti tregua</p>
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            <Task
              id={task.id}
              title={task.title}
              onDelete={onDeleteTask}>
              <p>{task.description}</p>
            </Task>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
