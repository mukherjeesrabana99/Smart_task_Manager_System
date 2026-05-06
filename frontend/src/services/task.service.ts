import axios from "axios";

export type TaskCategory = "Coding" | "Finance" | "Personal";
export type TaskColor = "green" | "yellow" | "red";

export type Task = {
  _id: string;
  title: string;
  description: string;
  difficultyScore: number;
  category: TaskCategory;
  color: TaskColor;
  createdAt: string;
  updatedAt: string;
};

export type CreateTaskInput = {
  title: string;
  description: string;
};

export type UpdateTaskInput = {
  title?: string;
  description?: string;
};


const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL, 
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});


const handleError = (err: any) => {
  const message =
    err?.response?.data?.message ||
    err?.message ||
    "Something went wrong";
  throw new Error(message);
};


export const getTasks = async (): Promise<Task[]> => {
  try {
    const res = await api.get("/tasks");
    return res.data.data;
  } catch (err) {
    handleError(err);
  }
};


export const getTaskById = async (id: string): Promise<Task> => {
  try {
    const res = await api.get(`/tasks/${id}`);
    return res.data.data;
  } catch (err) {
    handleError(err);
  }
};


export const createTask = async (
  payload: CreateTaskInput
): Promise<Task> => {
  try {
    const res = await api.post("/tasks", payload);
    return res.data.data;
  } catch (err) {
    handleError(err);
  }
};


export const updateTask = async (
  id: string,
  payload: UpdateTaskInput
): Promise<Task> => {
  try {
    const res = await api.put(`/tasks/${id}`, payload);
    return res.data.data;
  } catch (err) {
    handleError(err);
  }
};


export const deleteTask = async (id: string): Promise<void> => {
  try {
    await api.delete(`/tasks/${id}`);
  } catch (err) {
    handleError(err);
  }
};