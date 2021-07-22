import TodoItem from './TodoItem'
import './style.css'
export default function TodoList ({ tasks, toogleInportant }) {
  return <div className='tasks-content'>
        {tasks.map((task) => {
          return <TodoItem key={task.id} task={task} toogleInportant={toogleInportant}/>
        })}
     </div>
}
