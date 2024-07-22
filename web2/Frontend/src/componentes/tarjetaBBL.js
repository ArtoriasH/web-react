import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardBBL = ({item}) => {
  const navigate = useNavigate()
  return (
    <Box mx={2} my={1} sx={{minWidth:500}}>
      <Card sx={{ display: 'flex',background: 'rgba(255, 255, 255, 0.30)',
        borderRadius: 5 ,
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.32)'  }}>
    <Box sx={{ display: 'flex', flexDirection: 'column',flex:1 }}>
      <CardContent sx={{ flex: '1 0 auto'}}>
        <Typography sx={{display:'flex',flexDirection:'flex-start', opacity:'.70'}}  component="div" variant="h4">
        {item.nombre}
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'flex-start',color:'onix', opacity:'.70'}} variant="subtitle1" color="text.secondary" component="div">
        {item.descripcion}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center', pl: 1, pb: 1 }}>
        <Button sx={{backgroundColor:'#cfe8fc', borderRadius:25,width:'100%', mx:2}} onClick={() => navigate('/comunidad')}>Unirse</Button>
      </Box>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151,height:151 }}
      image={item.imagen || ""}
      alt="Live from space album cover"
    />
    </Card>
    </Box>
    

  );
}

export default CardBBL;