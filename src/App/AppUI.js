import React from 'react'
import { TodoHeader } from '../TodoHeader';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../LoadingTodos';
import { EmptyTodos } from '../EmptyTodos';
import { EmptySearchResults } from '../EmptySearchResults';

function AppUI() { 
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    totalTodos,
    deleteTodo,
    openModal, 
    searchValue,
  } = React.useContext(TodoContext);
  
  return (
    <>
      <TodoHeader></TodoHeader>
      <TodoCounter />
      <TodoSearch  />

          <TodoList>
          {error && <p>Something went wrong</p>}
          {loading && <TodosLoading/>}
          {loading && new Array(4).fill(1).map((a, i) => <TodosLoading key={i} />)}
          {!totalTodos && !loading  && <EmptyTodos />}
          {searchValue.includes(searchedTodos) && totalTodos > 0 && <EmptySearchResults searchedText={searchValue}/>}

          {searchedTodos.map(todo=> (
            <TodoItem
            
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
            />
        ))}
      </TodoList> 
      
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton
      />
    </>
    );
}

export { AppUI };