import { TbDots } from "react-icons/tb";

export const TaskBox: React.FC = ({ task }) => {
  const getDifficultyClass = (score: number) => {
    if (score <= 3) return "low";
    if (score <= 7) return "medium";
    return "high";
  };

  return (
    <div className="task-box">
      <div className="priority-menu">
        <div className="priority-left">
          <div
            className={`circle-box ${getDifficultyClass(task.difficultyScore)}`}
          />
          <span
            className={`score-badge ${getDifficultyClass(task.difficultyScore)}`}
          >
            {task.difficultyScore}
          </span>
        </div>

        <TbDots />
      </div>

      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <div className="task-tags">
        <div className="tag tag-category">{task.category}</div>
        <div className="tag tag-status">TO-DO</div>
      </div>
    </div>
  );
};
