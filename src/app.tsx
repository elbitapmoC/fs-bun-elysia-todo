import { react } from "react";
import { createRoot } from "react-dom/client";

import ToDoList from "./Components/ToDoList";
import Title from "./Components/Title";
import Form from "./Components/Form";

const root = createRoot(document.getElementById("root"));

interface ToDoType {
  id: string;
  task: string;
  completed: boolean;
  editMode: boolean;
}

const App = () => {
  const [todos, setTodos] = react.useState<ToDoType[]>([]);

  react.useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <Title title="Todo List App" />
      <Form todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </>
  );
};

root.render(<App />);
