// src/components/Footer.tsx
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 4,
        mt: 0,
        textAlign: "center",
      }}
    >
      <Typography variant="body1">© 2025 Sweet Moment Candy Bar</Typography>

    </Box>
  );
}
