import { useReducer } from 'react'
import AddTaskComponent from './AddTaskComponent'
import TaskList from './TaskList'

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Learn JavaScript', done: true },
  { id: 1, text: 'Learn React', done: true },
  { id: 2, text: 'Learn TypeScript', done: false },
]

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    }
    case 'EDIT_TASK': {
      return tasks && tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task
        } else {
          return task
        }
      })
    }
    case 'DELETE_TASK': {
      return tasks && tasks.filter((task) => task.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}


export default function AddTask() {

const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  function handleAddTask(text) {
    dispatch({ type: 'ADD_TASK', id: nextId++, text });
  }

  function handleEditTask(task) {
    dispatch({ type: 'EDIT_TASK', task: task });
  }

  function handleDeleteTask(taskId) {
    dispatch({ type: 'DELETE_TASK', id: taskId })
  }

  return (
    <>
      <h2>AddTask</h2>
      <AddTaskComponent onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}






