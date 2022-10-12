import { Container as Contend } from "@mui/material";
import type { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

function Container({ children }: IContainerProps): React.ReactElement {
  return <Contend maxWidth="sm">{children}</Contend>;
}

export default Container;
