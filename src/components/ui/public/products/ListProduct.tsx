"use client";
import React from 'react'
import { getAllProduct } from '../../admin/products/ListProduct';
import CardProduct from './CardProduct';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import SearchBar from './SearchBar';

export default function ListProduct() {
    const [data, setData] = React.useState([]);

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/products');
        if (response.ok) {
          const data = await response.json();
          console.log('Data from API:', data._embedded.productResList);
          setData(data._embedded.productResList);
        } else {
          console.error('Error fetching data. Server returned:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    React.useEffect(() => {
      fetchData();
    }, []);

  return (
    <Grid container spacing={1} sx={{ padding: 2, display: "flex", borderWidth: 0.5, borderRadius: 5, borderStyle: "dotted", marginLeft: 3 }}>
      <Grid item xs={12} sx={{height: "fit-content", padding: 2 }}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} sx={{ height: "100%"}}>
        <Grid container spacing={2}>
          {data?.map((row: any) => (
            <Grid item xs={3} key={row.id}>
              <CardProduct data={row} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

  )  
}
