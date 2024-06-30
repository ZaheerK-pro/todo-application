import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
      ))}
    </div>
  );
}

export default TaskList;
