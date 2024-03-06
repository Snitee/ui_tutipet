"use client"
import React from 'react'
import { Box, Button, Card, CardActionArea, CardMedia, Divider, Grid, Paper, Stack, Tab, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';


export default function ProductDetail(id: any) {
    const [data, setData] = React.useState<any>();
    const [value, setValue] = React.useState('1');

  

    const fetchData = async () => {
      try {
        if(id.id){
            const response = await fetch(`http://localhost:8080/api/v1/products/${id.id}`);
        
            if (response.ok) {
            const data = await response.json();
            console.log('Data from API:', data);
            setData(data);
            } else {
            console.error('Error fetching data. Server returned:', response.status);
            }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    React.useEffect(() => {
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };


    return (
        <Box>

        <Paper sx={{padding: 3, marginBottom: 1,}} elevation={3}>
            <Grid container spacing={3} sx={{padding: 2}}>
                <Grid item xs ={5}>
                    <Card>
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            height={20}
                            width={8}
                            style={{ height: '20rem' }}
                            image="https://img.pikbest.com/wp/202345/cat-dog-pet-and-pets-in-real-pictures-wallpapers_9596134.jpg!w700wp"
                            alt="hình Cún Con"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={7}>
                    <Stack spacing ={2} direction="column" justifyContent={"space-between"} height={"100%"} padding={2}>
                        <Typography variant='h4' gutterBottom>{data?.name}</Typography>
                        <Divider />
                        <Box height={10}/>
                        <Stack direction="row" spacing ={1} justifyContent={"flex-end"}>
                            <Typography variant='h4' gutterBottom >
                            150.000 VND
                            </Typography>
                            <Typography variant='h5' gutterBottom sx={{textDecoration: 'line-through',opacity: 0.6, }}>
                                {data?.price} VND
                            </Typography>
                        </Stack>
                        
                        <Stack direction="row" spacing ={1} justifyContent={"space-evenly"}>
                            <Button size="medium" variant='outlined' sx={{
                                borderColor: "#FC9C55",
                                '&:hover': {
                                backgroundColor: "#FC9C55",
                                borderColor: "#FC9C55",
                                }
                            }}>
                                <Typography variant='h6' sx={{fontWeight: 600,color: "#FC9C55",
                                    '&:hover': {
                                    color: "white"
                                    }}}>
                                    Thêm Vào Giỏ Hàng
                                </Typography>
                            </Button>

                
                            <Button size="medium" variant='contained' style={{fontWeight: 600, backgroundColor: "#FC9C55" }}>
                                <Typography variant='h6'>
                                    Mua Ngay
                                </Typography>
                            </Button>
                        </Stack >
                    </Stack>
                </Grid>
            </Grid>
        </Paper>

        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Mô Tả Sản Phẩm" value="1" />
                    <Tab label="Thông Tin Sản Phẩm" value="2" />
                </TabList>
                </Box>
                <TabPanel value="1">{data?.description}</TabPanel>
                <TabPanel value="2">{data?.info}</TabPanel>
            </TabContext>
        </Box>
    </Box>

  )
}
