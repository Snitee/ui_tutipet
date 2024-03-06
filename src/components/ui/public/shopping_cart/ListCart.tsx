"use client"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Checkbox, Divider, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function ListCart() {
    const [numberCart,setNumberCarxt] = React.useState();


    return (
        <Stack display={'flex'} justifyContent={"center"} alignContent={"center"} width={"100%"}>
            <Box marginBottom={2}>
                <Paper elevation={2} >
                    <Stack display={"flex"} flexDirection={'row'} justifyContent={"center"} alignItems={"center"} paddingTop={2} paddingBottom={2}>
                        <Box width={"5%"} justifyContent={"center"} display={"flex"}>
                            <Checkbox  defaultChecked />
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box width={"40%"} justifyContent={"center"} display={"flex"}>
                            <Typography>
                                Sản Phẩm
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box width={"15%"} justifyContent={"center"} display={"flex"}>
                            <Typography>
                                Đơn Giá
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box width={"15%"} justifyContent={"center"} display={"flex"}>
                            <Typography>
                                Số Lượng
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box width={"15%"}  justifyContent={"center"} display={"flex"}>
                            <Typography>
                                Số Tiền
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box width={"10%"} justifyContent={"center"} display={"flex"}>
                            <Typography>
                                Thao Tác
                            </Typography>
                        </Box>
                    </Stack>
                </Paper>
            </Box>
            

            <Box marginBottom={5}>
                <Paper elevation={2} >
                    <Stack display={"flex"} flexDirection={'row'} justifyContent={"center"} alignItems={"center"} paddingTop={2} paddingBottom={2}>
                        <Box width={"5%"} justifyContent={"center"} display={"flex"} >
                            <Checkbox  defaultChecked />
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box width={"40%"} paddingLeft={2} paddingRight={2}>
                            <Card>
                                <CardActionArea style={{display: "flex", flexDirection: "row",justifyContent: "space-between"}}>
                                    <CardMedia
                                        component="img"
                                        height={7}
                                        style={{ height: '7rem',width: '7rem' }}
                                        image="https://img.pikbest.com/wp/202345/cat-dog-pet-and-pets-in-real-pictures-wallpapers_9596134.jpg!w700wp"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{width: "100%"}}>
                                        <Typography gutterBottom variant="body1" component="div" style={{
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            WebkitLineClamp: 2, 
                                        }}
                                        >
                                            Tên Sản Phẩm
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box width={"15%"} justifyContent={"center"} display={"flex"}>
                            <Typography variant='subtitle2' >
                                150.000 VND
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box width={"15%"} paddingLeft={3} paddingRight={3} justifyContent={"center"} display={"flex"}>
                        <TextField
                            id="standard-number"
                            type="number"
                            defaultValue={1}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            sx={{ textAlign: 'center' }}
                            />
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box width={"15%"} justifyContent={"center"} display={"flex"}>
                            <Typography>
                                150.000 VND
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box width={"10%"} paddingLeft={2} justifyContent={"center"} display={"flex"}>
                            <Button size="medium" variant='contained' style={{ backgroundColor: "#FC9C55" }}>
                                <Typography variant='body2' sx={{fontSize: 12}}>
                                    Xóa
                                </Typography>
                            </Button>
                        </Box>
                    </Stack>
                </Paper>
            </Box>

            <Box marginBottom={2}>
                <Paper elevation={2} >
                    <Grid container spacing={2} padding={2}>
                        <Grid item xs={6}>
                            <Stack display={'flex'} direction={'row'} alignItems={'center'} spacing={2}>
                                <Box>
                                    <Checkbox  defaultChecked />
                                </Box>
                                <Typography variant='body1' textAlign={"center"} textTransform={'capitalize'} >
                                    Chọn tất cả
                                </Typography>
                                <Button variant='text'>
                                    <Typography variant='body1' textAlign={"center"} textTransform={'capitalize'} >
                                        Xóa
                                    </Typography>
                                </Button>
                            </Stack>

                        </Grid>
                        <Grid item xs={6} paddingRight={3}>
                            <Stack display={'flex'} direction={'row'} justifyContent={"end"} alignItems={'center'} spacing={2}>
                                <Typography variant='body2' textAlign={"center"} textTransform={'capitalize'} >
                                    Tổng Thanh Tiền
                                </Typography>
                                <Typography variant='h5' textAlign={"center"} textTransform={'capitalize'} >
                                    150.000 VND
                                </Typography>
                                <Button size="medium" variant='contained'  style={{ backgroundColor: "#FC9C55" }}>
                                    <Typography variant='subtitle1' >
                                        Mua Sản Phẩm
                                    </Typography>
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
                
            </Box>

                        {/* <Typography variant='h5' gutterBottom>Chưa có sản phẩm trong giỏ hàng </Typography>
            <Button size="medium" variant='contained' style={{fontWeight: 600, backgroundColor: "#FC9C55" }} >
                <Typography variant='h6'>
                    Quay Lại Mua Hàng
                </Typography>
            </Button> */}
        </Stack>
        
  )
}
