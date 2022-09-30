import './index.css'

const TodoItem = props => {
  const {id, title, deleteTodo} = props
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-list-container">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
