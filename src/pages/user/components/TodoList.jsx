import TodoItem from './TodoItem'
export default function TodoList ({ tasks, toogleInportant }) {
  return <ul>
      {tasks.map((task) => {
        return <TodoItem key={task.id} task={task} toogleInportant={toogleInportant}/>
      })}
  </ul>
}
