import React, { useState, useEffect } from 'react';
import EncabezadoCrearComunidad from "./componentes/cardCrearComunidad";
import Footer from "./componentes/footer";
import NavBar from "./componentes/navBar";
import CardBBL from "./componentes/tarjetaBBL";

import axios from 'axios';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



/* const cards = [
  {title:'BBL Valorant', description:'Comunidad para jugadores de Valorant', communityImg:'https://assetsio.reedpopcdn.com/valorant-jett-and-phoenix-wallpaper-b.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp'},
{title:'BBL LoL', description:'Comunidad para jugadores de Lol', communityImg:'https://media.vandal.net/i/960x720/8-2021/202182610185270_1.jpg'},
{title:'BBL Genchin', description:'Comunidad para jugadores de Genchin', communityImg:'https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc'},
{title:'BBL Towa', description:'Comunidad para jugadores de Towa', communityImg:'https://cdn1.epicgames.com/offer/b47d3947087147baa8e1665680aefc11/EGS_TowerofFantasy_HOTTASTUDIO_S1_2560x1440-7332c6b84fdf52884c1a0ae1eb6830e1'},
{title:'BBL Rockeli', description:'Comunidad para jugadores de Rockeli', communityImg:'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S3_2560x1440-1434001758900f513cab0c885121744a'},
{title:'BBL Unite', description:'Comunidad para jugadores de Unite', communityImg:'https://unite.pokemon.com/images/share-fb.jpg'},
{title:'BBL Overguash', description:'Comunidad para jugadores de Overguash', communityImg:'https://i.ytimg.com/vi/GKXS_YA9s7E/maxresdefault.jpg'},
{title:'BBL Honkai', description:'Comunidad para jugadores de Honkai', communityImg:'https://cdn2.unrealengine.com/blog-en-1920x1080-1920x1080-c2f4a5354c76.jpg'},
{title:'BBL Apets', description:'Comunidad para jugadores de Apets', communityImg:'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/02/hipertextual-apex-legends-fortnite-gratis-2019205859.jpg?fit=1920%2C1253&quality=50&strip=all&ssl=1'}
] */

//pagination
//https://mui.com/material-ui/react-pagination/


function LandingPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/getComunidades')
      .then(res => {
        setCards(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);
  return (
    <div className="App" style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1h6UJgVBx1dEfM9lkAMO-wluz_Lyfp9zXzJzHzkC6RWKYX6NZyrieGnpjwnT1uCZn8_pnJLYu5JUNlJjJioZ388wQOoX-G3LuQkkqDVIa-c0tDPNGHz4nJe5dBvI5ix2Sn0NIzSf2pdw5Ob15zZvNgz3S5z_QXTRnVoCcdwI656vXeX7__D6WAKH0Og/s2048/loona-11-integrantes.jpeg")' }}>
      <NavBar />
      <Box>
        <EncabezadoCrearComunidad />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {cards.map((item) => {
            return (
              <CardBBL item={item} />
            )
          })
          }
        </Box>
        <Stack sx={{ alignItems: 'center', margin: 5 }}>
          <Pagination count={10} size="large" />
        </Stack>
        <Footer />
      </Box>

    </div>
  );
}


export default LandingPage;