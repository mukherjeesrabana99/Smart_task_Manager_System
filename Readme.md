# 🧠 Smart Task Manager

A modern full-stack task management application with **LLM-powered task analysis**, built using:

* **Frontend**: React + TypeScript + Vite
* **Backend**: Node.js + Express + MongoDB
* **LLM Integration**: Anthropic

---

## ✨ Features

### Core Features

* Create, update, delete tasks
* Responsive dashboard UI (grid layout)
* Category tagging (Coding, Finance, Personal)
* Difficulty scoring (1–10)

### AI Features

* Automatic task analysis using LLM:

  * Difficulty score
  * Category classification
  * Color coding (green / yellow / red)


* LLM Provider : Anthropic (primary)


### UX Enhancements

* Optimistic UI (instant task creation)
* Loading spinner on submit
* Success + error toast notifications
* Clean, modern UI (Notion/Trello-inspired)

---

## 🏗️ Project Structure

```
root/
│
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── routes/
│   ├── llm/
│   │   |
│   │   ├── llm.anthropic.js
│   │   
│   │   ├── llm.parser.js
│   │   └── llm.prompt.js
│   └── config/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── App.tsx
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/mukherjeesrabana99/Smart_task_Manager_System.git
cd Smart_task_Manager_System
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection

ANTHROPIC_API_KEY=your_key
OPENAI_API_KEY=your_key
```

### Run backend

```bash
npm run dev
```

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App runs at:

```
http://localhost:5173
```

### Environment Variables

Create a `.env` file:

```env
VITE_BACKEND_URL= http://localhost:5000/api
```

---

## 🔁 LLM Routing Logic

The system uses a **fallback strategy**:

1. Anthropic (fast + cheap)
2. Validate response

```js
{
  difficultyScore: 5,
  category: "Personal",
  color: "yellow"
}
```

---

## 🚀 API Endpoints

### Create Task

```
POST /api/tasks
```

### Get All Tasks

```
GET /api/tasks
```

### Update Task

```
PUT /api/tasks/:id
```

### Delete Task

```
DELETE /api/tasks/:id
```

## ⚠️ Known Limitations

* No authentication
* No pagination
* LLM responses may vary slightly
* Polling / real-time sync not fully optimized

---

## 🔮 Future Improvements

* React Query integration
* WebSocket for real-time updates
* Circuit breaker for LLM providers
* Task editing modal
* Drag-and-drop board (Kanban)
