import Todo from './Todo';

function TodoList({ todos }) {
  // todos - access to array of strings
  // const { todos } = props
  return todos.map((todo, index) => <Todo key={index} todo={todo} />);
}

export default TodoList;
