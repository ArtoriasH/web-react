import React, {useState} from 'react';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import Input from '@mui/material/Input';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';

const FormComunidad = () => {
  const [categoria, setCategoria] = React.useState('');

  const handleChange = (event) => {
    setCategoria(event.target.value);
  };

  const [admin, setAdmin] = React.useState('');

  const handleChangeAdmin = (event) => {
    setAdmin(event.target.value);
  };

  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  //https://codefrontend.com/file-upload-reactjs/#:~:text=To%20upload%20a%20single%20file,contents%20as%20the%20request%20body%3A&text=First%2C%20we%20add%20an%20input,it%20from%20the%20onChange%20event.

  return (

    <Box sx={{ mx:10,mb:0,mt:5,p:1}}>
      <Box sx={{p:2, bgcolor:'lavender',borderTopLeftRadius:20,borderTopRightRadius:20  }}>
        <Typography sx={{color:'black',m:3}} variant='h3'>Administrar tu BBL</Typography>
        <Box maxWidth={400} alignItems={'center'} sx={{margin:'auto',p:2}}>
        <Stack
          component="form"
          sx={{
            maxWidth: '45ch'
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField variant="filled" placeholder="Titulo" />

          <TextField  variant="filled" multiline rows={4} fullWidth placeholder="Descripcion" />
          <FormControl variant="filled"  sx={{ m: 1, minWidth: 120 }}>
          <Typography variant='h6' sx={{color:'black'}}>Categorias</Typography>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={categoria}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Videojuegos'}>Videojuegos</MenuItem>
            <MenuItem value={'Escuela'}>Escuela</MenuItem>
            <MenuItem value={'Potoshop'}>Potoshop</MenuItem>
          </Select>
          </FormControl>

          <TextField  variant="filled" fullWidth placeholder="Nueva Categoria" />
          <Button variant="outlined">+</Button>
          <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} 
          id="contained-button-file" />
          <label htmlFor="contained-button-file">
            <Button variant="contained" sx={{width:'100%', my:2}} color="primary" component="span">
              Subir Foto de Portada
            </Button>
          </label>

          <Typography variant='h6' sx={{color:'black'}}>Admin</Typography>

          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={admin}
            onChange={handleChangeAdmin}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Golo'}>Golo</MenuItem>
            <MenuItem value={'Donaldo'}>Donaldo</MenuItem>
            <MenuItem value={'Humberto'}>Humberto</MenuItem>
          </Select>
          </FormControl>
           
          
        </Stack>
        <Box sx={{my:5}}>
        <hr style={{color:'black'}}/>
        </Box>
            <Button variant="contained" sx={{width:'100%', my:2}} color="success" component="span">
              Crear Curso
            </Button>
            <Button  sx={{width:'100%', my:2}} color="error" component="span">
              Cancelar
            </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FormComunidad;