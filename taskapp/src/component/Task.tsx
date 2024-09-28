import { PropsWithChildren } from "react";

// type TaskType = {
//   title: string;
//   children: ReactNode;
// };

type TaskType = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

const Task = ({id, title, children, onDelete }: TaskType) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
        <button onClick={() => onDelete(id)}>Cancella</button>
      </div>
    </article>
  );
};
export default Task;
