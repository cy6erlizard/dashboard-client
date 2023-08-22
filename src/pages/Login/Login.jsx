import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";

import {
  useTheme,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
}));

const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const LoginPage = ({ setAuthenticated }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulate user authentication logic
    if (username === "user" && password === "password") {
      setAuthenticated(true);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper elevation={3}>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <StyledForm noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Sign In
          </StyledButton>
        </StyledForm>
      </StyledPaper>
    </Container>
  );
};

export default LoginPage;
