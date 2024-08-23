import { TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

interface TodoFormProps {
  onSubmit: (todo: { title: string; completed: boolean; id: string }) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ title: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Typography variant="h5">Add Todo Item</Typography>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            id="title"
            label="Title"
            variant="standard"
            required
            onChange={handleChange}
            value={formData.title}
          />
          <Button variant="contained" type="submit">
            Add
          </Button>
        </form>
        <hr />
      </div>
    </>
  );
};
