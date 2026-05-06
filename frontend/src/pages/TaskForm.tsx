import { useState } from "react";
import { createTask } from "../services/task.service";
import "../styles/TaskForm.css";

export const TaskForm = ({ onSuccess }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !description || loading) return;

    try {
      setLoading(true);

      await createTask({ title, description });

      setTitle("");
      setDescription("");
      onSuccess();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? <span className="spinner" /> : "Add Task"}
      </button>
    </form>
  );
};