import React, { useState, useRef } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

function CajaComentario() {
    return (
      
      <Box sx={{ minWidth: 275, margin:5, display:'flex',flexDirection:'column' }}>
        <TextField fullWidth label="" multiline placeholder="" id="fullWidth"  
          rows={4} />
        <Box sx={{display:'flex', flexDirection:'row-reverse'}}>
            <IconButton aria-label="sendMessage" sx={{borderRadius:5, m:1}} >
              <Typography sx={{m:1}}>
                Burbujear
              </Typography>
            <SendIcon />
          </IconButton>
        </Box>
        
      </Box> 
    );
  }

  export default CajaComentario;