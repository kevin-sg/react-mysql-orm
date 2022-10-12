import { SxProps, Theme, Modal as UIModal, Box, Typography, TextField, Button } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

import { useForm } from "@/hooks";

const style: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  display: "flex",
  gap: 2,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  bgcolor: "background.paper",
  border: "1px solid #c1c1c1",
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
};

interface IModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function Modal({ isOpen, setIsOpen }: IModalProps): React.ReactElement {
  const { formData, handleChange, handleSubmit } = useForm();

  return (
    <UIModal
      open={isOpen}
      onClose={() => setIsOpen((prev) => !prev)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" sx={style} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography id="modal-modal-title" variant="h4" component="h4" align="center">
          Add User
        </Typography>
        <TextField
          error={false}
          helperText=""
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          value={formData.username}
          type="text"
          onChange={handleChange}
        />
        <TextField
          error={false}
          helperText=""
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          type="email"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Create user
        </Button>
      </Box>
    </UIModal>
  );
}

export default Modal;
