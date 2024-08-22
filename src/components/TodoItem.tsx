import {
  Checkbox,
  Button,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

interface TodoItemProps {
  todo: { title: string; id: string; completed: boolean };
  toggleCompleted: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleCompleted,
  deleteTodo,
}) => {
  return (
    <>
      <TableRow
        key={todo.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="left">
          <Checkbox
            name="completed"
            checked={todo.completed}
            onChange={(e) => toggleCompleted(todo.id, e.target.checked)}
          />
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Button variant="text" onClick={(e) => deleteTodo(todo.id)}>
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};
