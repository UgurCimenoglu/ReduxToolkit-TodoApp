import * as React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../store/Hooks";
import Todo, { addTodo } from "../store/slice/Todo";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";

export default function TodoInput() {
  const dispatch = useAppDispatch();
  const { Auth } = useAppSelector((state) => state);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (todo) {
      dispatch(addTodo({ id: uuidv4(), isCompleted: false, todo: todo }));
      setTodo("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const [todo, setTodo] = React.useState("");
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={(e: any) => handleSubmit(e)}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FormControl fullWidth>
        <OutlinedInput
          placeholder={
            Auth.User ? "Please enter text" : "Todo eklemek için giriş yapınız!"
          }
          onChange={handleInputChange}
          value={todo}
          disabled={!Auth.User}
        />
      </FormControl>
      <Button type="submit" variant="outlined" disabled={!Auth.User}>
        Add
      </Button>
    </Box>
  );
}
