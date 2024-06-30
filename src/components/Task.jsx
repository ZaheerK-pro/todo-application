import React, { useState } from 'react';

function Task({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);

  const handleEdit = () => {
    if (isEditing) {
      updateTask({ ...task, name: taskName });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task">
      {isEditing ? (
        <input 
          type="text" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
        />
      ) : (
        <span className={task.completed ? 'completed' : ''}>{task.name}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => updateTask({ ...task, completed: !task.completed })}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
}

export default Task;
