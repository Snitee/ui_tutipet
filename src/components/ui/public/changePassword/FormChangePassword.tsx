"use client"
import { Box, Divider, FormControl, Grid, MenuItem, Paper, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function FormChangePassword() {
  return (
    <Paper elevation={3}>
        <Box sx={{padding: 3, }}>
            <Typography variant='h5' fontWeight={700} align='center'>Đổi Mật Khẩu</Typography>
            <Box height={10}/>
            <Divider />
            <Box  sx={{padding: 3, }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant='h6' align='right'>Password Cũ</Typography>
                    </Grid>
                    <Grid item xs={8} sx={{paddingLeft: 5, paddingRight: 5}}>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            />
                        </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h6' align='right'>Password Mới</Typography>
                    </Grid>
                    <Grid item xs={8} sx={{paddingLeft: 5, paddingRight: 5}}>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            />
                        </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h6' align='right'>Xác Nhận Password</Typography>
                    </Grid>
                    <Grid item xs={8} sx={{paddingLeft: 5, paddingRight: 5}}>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Paper>
  )
}
