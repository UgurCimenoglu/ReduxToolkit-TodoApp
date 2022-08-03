import { Button, IconButton } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../store/Hooks";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { completeTodo, removeTodo } from "../store/slice/Todo";

export default function TodoItem() {
  const { Todo } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleCompleteTodo = (id: string) => {
    dispatch(completeTodo(id));
  };
  const handleDeleteTodo = (id: string) => {
    console.log(id);
    dispatch(removeTodo(id));
  };
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {Todo.map((t, i) => (
        <Alert
          sx={{ marginTop: "20px" }}
          variant="outlined"
          key={i}
          severity={t.isCompleted ? "info" : "warning"}
          action={
            <>
              <IconButton onClick={() => handleCompleteTodo(t.id)}>
                <AddTaskIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteTodo(t.id)}>
                <DeleteForeverOutlinedIcon />
              </IconButton>
            </>
          }
        >
          {t.todo}
        </Alert>
      ))}
    </Stack>
  );
}
