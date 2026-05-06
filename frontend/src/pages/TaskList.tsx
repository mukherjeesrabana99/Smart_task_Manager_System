import React from "react";
import "../styles/Task.css"
import "../styles/Dashboard.css"
import { TaskBox } from "../components/TaskBox";

type TaskCategory = "Coding" | "Finance" | "Personal";
type TaskColor = "green" | "yellow" | "red";

type Task = {
  _id: string;
  title: string;
  description: string;
  difficultyScore: number;
  category: TaskCategory;
  color: TaskColor;
};

type TaskListProps = {
  tasks: Task[];
};

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <div className="task-container">
      {tasks.map((task) => (
        <div
          key={task._id}
          
        >

          <TaskBox task={task} />
        
        </div>
      ))}
    </div>
  );
};