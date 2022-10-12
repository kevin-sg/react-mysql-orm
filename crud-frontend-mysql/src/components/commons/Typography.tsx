import { Typography as UITypography } from "@mui/material";

interface ITypographyProps {
  text: string;
}

function Typography({ text }: ITypographyProps) {
  return (
    <UITypography variant="h2" component="h1" align="center" margin="20px auto" fontWeight={500}>
      {text}
    </UITypography>
  );
}

export default Typography;
