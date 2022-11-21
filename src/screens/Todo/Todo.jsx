import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";


import "./todo.css";
import AddTask from '../../components/AddTask/AddTask';
import Tasks from '../../Tasks/tasks';


export default function Todo() {

  
const [tasks, setTasks] = useState([
  {
    id: "1",
    title: "Estudar Programacao",
    completed: false,
  },
  {
    id: "2",
    title: "Ler livros",
    completed: true,
  },
]);

const handleTaskClick = (taskId) => {
  const newTasks = tasks.map(task => {
    if (task.id === taskId) return{...task, completed: !task.completed}
    return task;
  });

  setTasks(newTasks);
}

const handleTaskAddition = (taskTitle) => {
  const newTask = [...tasks,{
    title: taskTitle,
    id: uuidv4(),
    completed: false,
  },
];

setTasks(newTask);
}

const handleTaskDeletion = (taskId) => {
  const newTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(newTasks);
}

return (
    <>
  
      <div className="container">
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks tasks={tasks} handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}/>
      </div>

      <div>
<Link to="/tela-principal"><button className="glow-on-hover">Voltar</button></Link>

</div>
    </>
    
);


}