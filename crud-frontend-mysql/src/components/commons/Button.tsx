import { ButtonProps, Box, Button as MButton } from "@mui/material";
import type { ReactElement } from "react";

interface IButtonProps extends ButtonProps {
  text: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
  type?: ButtonType;
}

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

function Button(props: IButtonProps): ReactElement {
  const { text, type = "button", variant = "contained", color = "primary", ...buttonProps } = props;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <MButton variant={variant} color={color} type={type} {...buttonProps}>
        {text}
      </MButton>
    </Box>
  );
}

export default Button;
