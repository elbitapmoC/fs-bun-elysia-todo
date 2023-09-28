import { useState } from "react";
import IconCheck from "./IconCheck";
import IconEdit from "./IconEdit";
import IconTrash from "./IconTrash";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
  editMode: boolean;
}

const ToDoList = ({ todos, setTodos }: { todos: any; setTodos: any }) => {
  const handleDelete = (id: string) => {
    // Makes a shallow copy of our array.
    // That copy will contain the elements that pass the test.
    setTodos(todos.filter((td: Todo) => td.id !== id));
  };

  const getObjLocation = (id: string) => {
    return todos.findIndex((todo: any) => todo.id === id);
  };

  const handleComplete = (id: string) => {
    const objectToReplace = getObjLocation(id);
    todos[objectToReplace].completed = !todos[objectToReplace].completed;
    setTodos([...todos]);
  };

  const handleEdit = (id: string) => {
    const objectToReplace = getObjLocation(id);
    todos[objectToReplace].editMode = !todos[objectToReplace].editMode;
    setTodos([...todos]);
  };

  const handleKeyDown = (e: any, id: string) => {
    if (e.key === "Enter" || e.key === "Escape") {
      const objectToReplace = getObjLocation(id);
      todos[objectToReplace].task = e.target.value;
      todos[objectToReplace].editMode = false;
      setTodos([...todos]);
    }
  };

  const EmptyState = () => {
    return (
      <>
        <p>No tasks found!</p>
      </>
    );
  };

  if (todos.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Task
            </th>
            <th scope="col" className="py-3 px-6 ">
              Modify
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map(
            ({ id, task, completed, editMode }: Todo, index: number) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  {!editMode ? (
                    <th
                      scope="row"
                      className={`py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white ${
                        completed ? "line-through" : null
                      }`}
                    >
                      {task}
                    </th>
                  ) : (
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <input
                        type="text"
                        name="toDoTask"
                        id="toDoTask"
                        placeholder={task}
                        className="p-2.5 border bg-transparent"
                        onKeyDown={(e) => handleKeyDown(e, id)}
                      />
                    </th>
                  )}

                  <td className="py-4 px-6">
                    <button onClick={() => handleComplete(id)}>
                      <IconCheck />
                    </button>
                    <button onClick={() => handleEdit(id)}>
                      <IconEdit />
                    </button>
                    <button onClick={() => handleDelete(id)}>
                      <IconTrash />
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
