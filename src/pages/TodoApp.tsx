import { Box, Card, Typography, CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { TODOS_KEY } from "../constants";
import localStorageHelper from "../helpers/localStorageHelper";

interface Todo {
  title: string;
  completed: boolean;
  id: string;
}

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem(TODOS_KEY);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = (newTodo: Todo) => {
    const data: Todo[] = [
      ...todos,
      { ...newTodo, completed: false, id: uuidv4() },
    ];
    setTodos(data);

    localStorageHelper.setItem(TODOS_KEY, data);
  };

  const handleToggleCompleted = (id: string, completed: boolean) => {
    const data = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });

    setTodos(data);
    localStorageHelper.setItem(TODOS_KEY, data);
  };

  const handleDeleteTodo = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirmed) {
      const data = todos.filter((todo) => todo.id !== id);
      setTodos(data);
      localStorageHelper.setItem(TODOS_KEY, data);
    }
  };

  const card = (
    <CardContent>
      <Typography variant="h2">Todo</Typography>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList
        todos={todos}
        toggleCompleted={handleToggleCompleted}
        deleteTodo={handleDeleteTodo}
      />
    </CardContent>
  );

  return (
    <Box
      sx={{
        minWidth: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0 auto",
      }}
    >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
