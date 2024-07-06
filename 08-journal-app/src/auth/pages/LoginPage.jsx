import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks";

export const LoginPage = () => {

  const distpatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "user@test.com",
    password: "123456",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    distpatch(checkingAuthentication(email, password));
    console.log({ email, password });
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    distpatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@test.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            ></TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 3 }}>
          <Grid item xs={12} sm={6}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
          <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
