import {
  Typography,
  Checkbox,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: [{ title: string; id: string; completed: boolean }];
  toggleCompleted: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleCompleted,
  deleteTodo,
}) => {
  const handleChange = (id: string, completed: boolean) => {
    toggleCompleted(id, completed);
  };

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  return (
    <>
      <Typography variant="h5">Your Todo Item</Typography>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Completed</TableCell>
              <TableCell align="left">Item</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleCompleted={handleChange}
                deleteTodo={handleDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
