"use client"
import { Box, Divider, FormControl, Grid, MenuItem, Paper, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Infor() {
    const [gender, setGender] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value);
    };
    
  return (
    <Paper elevation={3}>
        <Box sx={{padding: 3, }}>
            <Typography variant='h5' fontWeight={700} align='center'>Tài Khoản Của Tôi</Typography>
            <Typography variant='subtitle2' fontStyle={"italic"}>Quản lý thông tin hồ sơ để bảo mật tài khoản</Typography>
            <Box height={10}/>
            <Divider />
            <Box  sx={{padding: 3, }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant='h6' align='right'>Họ Và Tên</Typography>
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
                        <Typography variant='h6' align='right'>Email</Typography>
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
                        <Typography variant='h6' align='right'>Giới Tính</Typography>
                    </Grid>
                    <Grid item xs={8} sx={{paddingLeft: 5, paddingRight: 5}}>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gender}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Nam</MenuItem>
                            <MenuItem value={0}>Nữ</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Paper>

  )
}
