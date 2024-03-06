"use client"
import React from 'react'
import Image from 'next/image'
import cat from '@/app/favicon.ico'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';

export default function CardProduct({data} : any) {
  const router = useRouter();

  const handleCardClick = (id: number) =>{
    router.push(`/products/${id}`);
  }
  
  return (
    <Card >
      <CardActionArea onClick={()=> handleCardClick(data.id)}>
        <CardMedia
          component="img"
          height={8}
          style={{ height: '8rem' }}
          alt="hình cún con"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div"  style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 2, 
          }}>
            {data.name}
          </Typography>
          <Box sx={{display: "flex", flexDirection: "row", justifyContent: 'flex-end'}}>
            <Typography variant="body1" color="text.secondary" sx={{fontWeight: 700,}}  >
                150.000 VND
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{textDecoration: 'line-through',opacity: 0.6, }}>
                {data.price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" variant='outlined' sx={{
            borderColor: "#FC9C55",
            '&:hover': {
              backgroundColor: "#FC9C55",
              borderColor: "#FC9C55",
            }
          }}>
          <Typography variant='body2' sx={{fontSize: 12, color: "#FC9C55",
            '&:hover': {
              color: "white"
            }}}>
            Thêm Vào Giỏ Hàng
          </Typography>
        </Button>
        <Button size="medium" variant='contained' style={{ backgroundColor: "#FC9C55" }}>
          <Typography variant='body2' sx={{fontSize: 12}}>
            Mua Ngay
          </Typography>
        </Button>
      </CardActions>
    </Card>
  )
}
