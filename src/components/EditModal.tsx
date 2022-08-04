import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../store/Hooks";
import { useEffect, useState } from "react";
import { Todo } from "../store/slice/Todo";
import { Button, FormControl, OutlinedInput } from "@mui/material";
import { updateTodo } from "../store/slice/Todo";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  id: string | null;
}

export default function EditModal({ open, handleClose, id }: Props) {
  const { Todo } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [todoItem, setTodoItem] = useState<Todo | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    todoItem && dispatch(updateTodo(todoItem));
    handleClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    todoItem && setTodoItem({ ...todoItem, todo: e.target.value });
  };

  useEffect(() => {
    const data = Todo.find((t) => t.id === id);
    data && setTodoItem(data);
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ margin: "0 0 20px 10px" }}
          >
            Update Todo
          </Typography>
          {todoItem && (
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
                  placeholder="Please enter text"
                  defaultValue={todoItem?.todo}
                  onChange={handleInputChange}
                />
              </FormControl>
              <Button type="submit" variant="outlined">
                Update
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
}
