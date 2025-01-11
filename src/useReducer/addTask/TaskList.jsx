import React, { useState } from 'react';

export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    <ul>
      {tasks &&
        tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
            />
          </li>
        ))}
    </ul>
  )
}


function Task({ task, onEditTask, onDeleteTask }) {
  const [isEditing, setEditing] = useState(false)
  let taskContent
  if (isEditing) {
    taskContent = (
      <>
      <input
        type="text"
        value={task.text}
        onChange={(e) => {
          // onEditTaskの引数にはtext更新後のtaskオブジェクトを渡している。
          onEditTask({
            ...task,
            text: e.target.value,
          })
        }}
      />
      <button onClick={() => {
        setEditing(false)
      }}>
        Save
      </button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          onClick={() => {
            setEditing(true)
          }}
        >
          Edit
        </button>
      </>
    )
  }

  return (
    <label>
      <input type="checkbox" checked={task.done} onChange={() => {


      }} />
      {taskContent}
      <button onClick={() => {
        onDeleteTask(task.id)
      }}>Delete</button>
    </label>
  )
}