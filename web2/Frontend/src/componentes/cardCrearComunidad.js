import React from 'react';
import bblBurbuja from '../img/bubbleIcon.png';
import { useNavigate } from "react-router-dom";


import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ThemeProvider, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

import Button from '@mui/material/Button';

function EncabezadoCrearComunidad() {
  const navigate = useNavigate()
    return (
      <>
      <Grid py={5}>
              <Paper
                sx={{
                  p: 2,
                  mx:15,
                  bgcolor:'aliceblue',
                  borderRadius:2
                }}
                elevation={3} 
              >
                  <Box elevation={16} sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <Box>
                      <Typography m={2} variant="h2" >Crea tu burbuja e invita a tus amigos</Typography>
                      <Typography m={5} color={'lightgray'} variant="subtitle1">BBL la red social en la que puedes crear tus propios espacios con personas con el mismo interes y pasión.</Typography>
                      <Button onClick={() => navigate('/administrarcomunidad')}>Sopla tu Burbuja</Button>
                    </Box>
                    <Box>
                    <Box
                      component="img"
                      sx={{
                        height: 400,
                        width: 350,
                      }}
                      alt="BBL"
                      src={bblBurbuja}
                    />
                    </Box>
                  </Box>
              </Paper>
      </Grid>
      
      </>
    );
  }

  export default EncabezadoCrearComunidad;