import { Button, IconButton } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../store/Hooks";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { completeTodo, removeTodo } from "../store/slice/Todo";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import EditModal from "./EditModal";
import { useState } from "react";

export default function TodoItem() {
  const { Todo, Auth } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string | null>(null);

  //#region func
  const handleCompleteTodo = (id: string) => {
    dispatch(completeTodo(id));
  };
  const handleDeleteTodo = (id: string) => {
    dispatch(removeTodo(id));
  };
  const onSetModalOpen = (success: boolean, id: string) => {
    setOpen(success);
    setId(id);
  };
  const handleClose = () => {
    setOpen(false);
    setId(null);
  };
  //#endregion

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
              {Auth.User && (
                <>
                  {!t.isCompleted && (
                    <>
                      <IconButton onClick={() => handleCompleteTodo(t.id)}>
                        <AddTaskIcon />
                      </IconButton>
                      <IconButton onClick={() => onSetModalOpen(true, t.id)}>
                        <ModeEditOutlinedIcon />
                      </IconButton>
                    </>
                  )}

                  <IconButton onClick={() => handleDeleteTodo(t.id)}>
                    <DeleteForeverOutlinedIcon />
                  </IconButton>
                </>
              )}
            </>
          }
        >
          {t.todo}
        </Alert>
      ))}
      {!!id && <EditModal open={open} handleClose={handleClose} id={id} />}
    </Stack>
  );
}
