import React from 'react';
import bblBurbuja from '../img/bubbleIcon.png';
import { useNavigate } from "react-router-dom";


import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ThemeProvider, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

import Button from '@mui/material/Button';

function EncabezadoComunidad() {
    return (
      <Grid py={5}>
      <Paper
        sx={{
          p: 2,
          mx:15,
          bgcolor:'aliceblue',
          borderRadius:5
        }}
        elevation={3} 
      >
          <Box elevation={16} sx={{display:'flex',flexDirection:'row',justifyContent:'center',padding:2, flexWrap:'wrap-reverse'}}>
            <Box>
              <Typography m={2} variant="h2" >Attack on Titan</Typography>
              <Typography m={5} color={'lightgray'} variant="subtitle1">Comunidad oficial de Attack on Titan</Typography>
              <Button>Salir</Button>
            </Box>
            <Box>
            <Box
              component="img"
              sx={{
                height: 300,
                width: 300,
                borderRadius:50
              }}
              alt="BBL"
              src={"https://sm.ign.com/t/ign_latam/tv/a/attack-on-/attack-on-titan-1_k1aw.300.jpg"}
            />
            </Box>
          </Box>
      </Paper>
      </Grid>
    );
  }

  export default EncabezadoComunidad;