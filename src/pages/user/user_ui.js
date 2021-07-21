import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import UserContext from '../../context/userContext'
import TodoList from './components/TodoList'
import FormTask from './components/FormTask'

// eslint-disable-next-line no-unused-vars
import { getAllTask, createNewTask, setToken } from '../../services/task'

export default function UserUI () {
  const [, navigate] = useLocation()
  const { user } = useContext(UserContext)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (!user) {
      navigate('/')
      console.log('no logged')
    }
  }, [user])

  useEffect(() => {
    getAllTask().then(setTasks)
  }, [])

  const handleNewTask = (newTask) => {
    setTasks(tasks => [...tasks, newTask])
  }

  const toogleInportant = (id) => {
    setTasks(() => tasks.map(task => {
      if (task.id === id) {
        return { ...task, important: !task.important }
      }
      return task
    }))
  }
  return (
    <div>
        <h1>Hola!, {user ? user.user : 'Usuario'}</h1>
        <FormTask handleNewTask ={handleNewTask} token={user.token}/>
        <TodoList tasks={tasks} toogleInportant={toogleInportant}/>
    </div>
  )
}
