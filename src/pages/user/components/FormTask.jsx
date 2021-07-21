import useNewTask, { KEY_REDUCER } from '../../../hooks/useFormTask'
import { setToken, createNewTask } from '../../../services/task'

export default function FormTask ({ handleNewTask, token }) {
  const [inputValue, dispatch] = useNewTask()
  const handleSubmit = (evt) => {
    evt.preventDefault()
    setToken(token)
    createNewTask({ content: inputValue.task, important: true }).then(res => {
      handleNewTask(res)
    })
    handleClean()
  }
  const handleChange = (evt) => {
    const { name, value } = evt.target
    dispatch({
      type: KEY_REDUCER.FORM_INIT,
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }
  const handleClean = () => {
    dispatch({ type: KEY_REDUCER.FORM_CLEAN })
  }
  return <form onSubmit={handleSubmit}>
    <input
      value={inputValue.task}
      onChange={handleChange}
      // onChange={({ target }) => setTask(target.value)}
      name='task'
      type='text'
      placeholder='Agregar Nueva Tarea'
    ></input>
    <button>Enviar</button>
  </form>
}
