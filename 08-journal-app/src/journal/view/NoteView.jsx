import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { ImageGallery } from "../components";
export const NoteView = () => {
  return (
    <Grid
      container
      className="animate__animated animate__fadeIn animate__faster"
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ mb: 1 }}
    >
      <Grid>
        <Typography fontSize={39} fontWeight={light}>
          28 de agosto, 2024
        </Typography>
      </Grid>
      <Grid>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
        />
      </Grid>
      {/* Image gallery */}
      <ImageGallery />
    </Grid>
  );
};
