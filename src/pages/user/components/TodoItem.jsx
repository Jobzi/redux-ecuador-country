import './style.css'
export default function TodoItem ({ task, toogleInportant }) {
  return <>
        <li className='new-li' onClick={() => toogleInportant(task.id)}>{task.content}</li>
        {task.important ? <strong style={{ color: 'red', cursor: 'pointer' }}>Important</strong> : <p style={{ color: 'blue', cursor: 'pointer' }}>Not Important</p>}
    </>
}
