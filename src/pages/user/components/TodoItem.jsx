import './style.css'
export default function TodoItem ({ task, toogleInportant }) {
  return <div className='grid-content'>
        <li className='new-li'>{task.content}</li>
        <div onClick={() => toogleInportant(task.id)}>
          {task.important
            ? <strong style={{ color: 'red', cursor: 'pointer' }}>Important</strong>
            : <strong style={{ color: 'blue', cursor: 'pointer' }}>Not Important</strong>}
        </div>
    </div>
}
