import { Box, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

export default function Section({
  label,
  children,
}: {
  label: ReactNode;
  children: ReactNode;
}) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: 2,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.palette.grey["500"],
        position: "relative",
      }}
    >
      <Box
        component={"h3"}
        sx={{
          fontSize: 14,
          position: "absolute",
          left: 12,
          top: "0px",
          px: 1,
          background: theme.palette.background.default,
          transform: "translateY(-50%)",
          margin: 0,
        }}
      >
        {label}
      </Box>
      {children}
    </Box>
  );
}
