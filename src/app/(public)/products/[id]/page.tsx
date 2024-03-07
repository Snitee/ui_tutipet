import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import cat from '@/app/favicon.ico'
import shadows from '@mui/material/styles/shadows'



export default function page() {
  return (
    <>
    <Box component={'div'} sx={{ justifyContent:  'center', padding: 3, boxShadow: 1}}>
        <Grid  container justifyContent=  'center'>
            <Grid item xs ={4}>
            <Image src={cat} height={250} alt={'meo xinh'} />
            </Grid>
            <Grid item xs ={4}>
                <Grid container>
                    <Grid item xs ={8}>
                        <Typography variant='h3' gutterBottom>
                            Ten san pham
                        </Typography>
                        <Divider />
                        <Box height={10} />
                    </Grid>
                    <Grid item xs ={12 }>
                        <Stack direction="row" spacing ={1} justifyContent={"flex-end"}>
                            <Typography variant='h4' gutterBottom>
                               Gia 
                            </Typography>
                            <Typography variant='h5' gutterBottom>
                               Gia da giam
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs ={12}>
                        <Grid container justifyContent={"space-between"} >
                   
                            <Grid item xs = {6}>
                                <Typography variant='h3' align='center' >
                                    <Button variant='outlined' type='button' className='border border-yellow-700 hover:bg-gray-100 text-yellow-700'  fullWidth >
                                        Them vao gio hang
                                    </Button>
                                </Typography>
                            </Grid>
                            <Grid item xs = {4} >
                    
                                <Typography variant='h3' align='center'  >
                                    <Button variant='contained' type='button' className='bg-red-500 hover:bg-red-600 text-white'  fullWidth >
                                        Mua hang
                                    </Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}
