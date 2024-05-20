import React from "react";
import { Box, BoxProps } from "@mui/material";

// Define a type that extends BoxProps and includes onClick
interface ClickableBoxProps extends BoxProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const ClickableBox: React.FC<ClickableBoxProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <Box {...props} onClick={onClick} sx={{ cursor: "pointer", ...props.sx }}>
      {children}
    </Box>
  );
};

export default ClickableBox;
