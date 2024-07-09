import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSavingNote } from "../../store/journal";
export const NoteView = () => {

  const { active: note } = useSelector( (state) => state.journal)
  const { body, title,date, onInputChange, formState } = useForm(note)
  const dispatch = useDispatch();
  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState))

  }, [formState])
  
  const onSaveNote = () => {
    dispatch(startSavingNote(formState));
  }
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
          {dateString}
        </Typography>
      </Grid>
      <Grid>
        <Button 
        color="primary" 
        sx={{ padding: 2 }}
        onClick={onSaveNote}
        >
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
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      {/* Image gallery */}
      <ImageGallery />
    </Grid>
  );
};
