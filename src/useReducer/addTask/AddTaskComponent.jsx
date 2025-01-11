import React, { useState } from 'react';

export default function AddTaskComponent({onAddTask}) {
  const [task, setTask] = useState('');
  return (
    <>
      <input type="text" placeholder='Add task' value={task} onChange={(e) => {
        setTask(e.target.value);
      }} />
      <button onClick={() => {
        setTask('');
        onAddTask(task);
      }}>
        Add
      </button>
    </>
  )
}