import { useEffect, useState } from "react";
import "./App.css";
import { TaskList } from "./pages/TaskList";
import { getTasks, type Task } from "./services/task.service";
import { TaskForm } from "./pages/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <TaskForm onSuccess={fetchTasks} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
