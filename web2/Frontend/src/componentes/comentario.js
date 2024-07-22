import React from 'react';
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

const comentario ={
  id:'123541324',
  username:'Eren JHaegar',
  comentario:'Mi primer comentario desde la nueva pridis',
  fecha:'04/05/22',
}
const Comentario = () => {
    return (
      <Card sx={{ minWidth: 275, m:5, maxWidth: 1000, backgroundColor: "#f0f8ff"}}>
      <CardContent sx={{pb:0}}>
        <Box sx={{display:'flex',flexDirection:'row'}}>
          <Box sx={{margin:1}}>
            <Avatar alt="Remy Sharp" src="url('https://depor.com/resizer/3XTmXJgo9fXRS2_ININe6BKhgek=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Q7AHXEQYA5C7NMIDBAIN4H57O4.png')" />
          </Box>
          <Box>
          <Typography sx={{display:'flex',flexDirection:'flex-start',mb:0}} variant='h6' gutterBottom>
          {comentario.username}
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'flex-start'}}  color="text.secondary" variant='caption' gutterBottom>
          {comentario.fecha}
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'flex-start', my:2}}>
          {comentario.comentario}
        </Typography>
          </Box>
        </Box>
        
      </CardContent>
      <CardActions sx={{margin:1, my:0, pt:0,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Box>
        <IconButton aria-label="delete">
          <BorderColorIcon />
        </IconButton>
      </Box>
        
      </CardActions>
    </Card>
    );
  };
  
  export default Comentario;
