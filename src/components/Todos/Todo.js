import styles from './Todo.module.css';
// console.log(styles);

function Todo({ todo }) {
  return (
    <div className={styles.todo}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
