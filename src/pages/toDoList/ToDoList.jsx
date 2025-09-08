import React, { useState } from "react";
import "./ToDoList.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    complexity: "Baixa",
  });

  const handleAddTask = () => {
    if (!newTask.title.trim()) return alert("O título é obrigatório!");
    const task = {
      id: Date.now().toString(),
      title: newTask.title.slice(0, 90),
      description: newTask.description.slice(0, 500),
      complexity: newTask.complexity,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTasks([task, ...tasks]);
    setNewTask({ title: "", description: "", complexity: "Baixa" });
    setIsModalOpen(false);
  };

  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed, updatedAt: new Date() } : t
      )
    );
  };

  const handleEditTask = (id, field, value) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, [field]: value, updatedAt: new Date() } : t
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>Lista de Tarefas</h2>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""} style={{display: 'flex',  justifyContent: 'space-between'}}>

            <div className="task-left">
               <div className="task-header">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
              />
              <input
                type="text"
                value={task.title}
                onChange={(e) =>
                  handleEditTask(task.id, "title", e.target.value.slice(0, 90))
                }
                maxLength={90}
              />
           
            </div>
            <textarea
              value={task.description}
              onChange={(e) =>
                handleEditTask(
                  task.id,
                  "description",
                  e.target.value.slice(0, 500)
                )
              }
              maxLength={500}
            />
            </div>

             <div className="task-actions">

              <button
                className="delete"
                onClick={() => handleDeleteTask(task.id)}
              >
                {/* 🗑️ */} X
              </button>
                 <select
                value={task.complexity}
                onChange={(e) =>
                  handleEditTask(task.id, "complexity", e.target.value)
                }
              >
                <option>Baixa</option>
                <option>Média</option>
                <option>Alta</option>
              </select>
              
            </div>
           
            {/* <div className="task-dates">
              <small>Início: {task.createdAt.toLocaleDateString()}</small>
              <small>Última alteração: {task.updatedAt.toLocaleDateString()}</small>
            </div> */}
          </li>
        ))}
      </ul>

      <button className="add-task-btn" onClick={() => setIsModalOpen(true)}>
        + Nova Tarefa
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Nova Tarefa</h3>
            <input
              type="text"
              placeholder="Título (máx. 90 caracteres)"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              maxLength={90}
            />
            <textarea
              placeholder="Descrição (máx. 500 caracteres)"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              maxLength={500}
            />
            <select
              value={newTask.complexity}
              onChange={(e) =>
                setNewTask({ ...newTask, complexity: e.target.value })
              }
            >
              <option>Baixa</option>
              <option>Média</option>
              <option>Alta</option>
            </select>
            <div className="modal-actions">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </button>
              <button className="save" onClick={handleAddTask}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
