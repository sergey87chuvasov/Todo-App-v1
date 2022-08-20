import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  // todos - access to array of strings
  // const { todos } = props
  return (
    <div className={styles.todoListContainer}>
      {/* if arr.length = 0 we will show text info */}
      {/* {todos.length === 0 && <h2>Todo list is empty</h2>} */}
      {/* best praсtice  !arr - give us true*/}
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
