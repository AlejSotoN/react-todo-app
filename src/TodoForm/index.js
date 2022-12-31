import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  // New TODO state
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  // Function to update the state of the new TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  
  // Close modal function
  const onCancel = () => {
    setOpenModal(false);
  };
  
  // Add TODO function
  const onSubmit = (event) => {
    event.preventDefault();
    // add the new todo
    if (newTodoValue.length <= 0) return;
    addTodo(newTodoValue);
    // Close modal
    setOpenModal(false);
    // reset form
    setNewTodoValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new Task</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Wash the dishes..."
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { TodoForm };