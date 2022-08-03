import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function TodoCard() {
  return (
    <Box
      sx={{
        minWidth: 275,
        marginTop: "10px",
        p: 2,
        border: "1px solid #c1c1c1",
        borderRadius: "3px",
      }}
    >
      <TodoInput />
      <TodoItem />
    </Box>
  );
}
