"use client"
import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, Grid, InputLabel, List, ListItemButton, ListItemIcon, ListItemText, MenuItem, Paper, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'

export default function ListAddress() {
    const [provinces, setProvinces] = React.useState([]);
    const [districts, setDistricts] = React.useState([]);
    const [wards, setWards] = React.useState([]);
    const [selectProvinces, setSelectProvinces] = React.useState("");
    const [selectDistricts, setSelectDistricts] = React.useState("");
    const [selectwards, setSelectWards] = React.useState("");
    
    
        const fetchProvinces = async () => {
        try {
          const response = await fetch('https://vapi.vnappmob.com/api/province/');
          const data = await response.json();
          console.log(data);

          const modifiedProvinces = data.results.map((province: { province_name: string; }) => {
            if (province.province_name.includes('Tỉnh ')) {
              province.province_name = province.province_name.replace('Tỉnh ', '');
            } else if ( province.province_name.includes('Thành phố ')) {
              province.province_name = province.province_name.replace('Thành phố ', 'TP. ');
            }
            return province;
          });
    
          const sortedProvinces = modifiedProvinces.slice().sort((a:any, b:any) => a.province_name.localeCompare(b.province_name));
          
          

          setProvinces(sortedProvinces);

        } catch (error) {
          console.error('Error fetching provinces:', error);
        }
        };

        const fetchDistrict = async (id: any) => {
            try {
                const response = await fetch('https://vapi.vnappmob.com/api/province/district/' + id.province_id);
                const data = await response.json();
                setDistricts(data.results);
            } catch (error) {
            console.error('Error fetching provinces:', error);
        }
      };

      const fetchWard = async (id: any) => {
        try {
          const response = await fetch('https://vapi.vnappmob.com/api/province/ward/' + id.district_id);
          const data = await response.json();
    
          setWards(data.results);
        } catch (error) {
          console.error('Error fetching provinces:', error);
        }
      };

    //   const handleSelectedProvince = (province: any) => {
    //     try {
    //       setNewSelected(1); // Assuming setNewSelected is a state update function
    //       setSelected([province?.province_name]); // Assuming setSelected is a state update function
    //       fetchDistrict(province.province_id);
    //     } catch (error) {
    //       console.error('Error handling selected province:', error);
    //     }
    //   };

    //   const handleSelectedDistrict = ( district: any ) => {
    //     setNewSelected(2);
    //     setSelected([...selected, district.district_name])
    //     fetchWard(district.district_id);
    //   }
    
    //   const handleSelectedWard = ( ward: any ) => {
    //     selected[2] = ward.ward_name
    //   }


    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        if(value !== selectProvinces){
            setSelectProvinces(value);
            setSelectDistricts('');
            setSelectWards('');
            fetchDistrict(value);
        }
        
    };

    const handleChangeDistricts = (event: SelectChangeEvent) => {
        const value = event.target.value;
        if(value !== selectDistricts){
            setSelectDistricts(value);
            fetchWard(value);
            setSelectWards('');
        }
        
    };

    const handleChangeWards = (event: SelectChangeEvent) => {
        const value = event.target.value;
        setSelectWards(value);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    React.useEffect(() => {
        fetchProvinces();
      }, []);

  return (


    <Paper elevation={3}>
        <Box sx={{padding: 3, }}>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Địa Chỉ Mới"}
            </DialogTitle>
            <Box height={10}/>
            <DialogContent>
                <Box width={500}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            label="Họ Và Tên"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            label="Số Điện Thoại"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectProvinces}
                            onChange={handleChange}
                            MenuProps={{
                                PaperProps: {
                                  style: {
                                    maxHeight: 200, // Giới hạn chiều cao hiển thị
                                  },
                                },
                              }}
                        >
                            {provinces?.map((province: any) => (
                                <MenuItem value={province} key={province?.province_id}>{province?.province_name}</MenuItem>
                            )
                            )}
                            
                        </Select>
                        </FormControl>
                    </Grid>
                    {
                        selectProvinces &&
                        (
                            <Grid item xs={12}>
                                <FormControl fullWidth >
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectDistricts}
                                    onChange={handleChangeDistricts}
                                    MenuProps={{
                                        PaperProps: {
                                        style: {
                                            maxHeight: 200, // Giới hạn chiều cao hiển thị
                                        },
                                        },
                                    }}
                                >
                                    {districts?.map((district: any) => (
                                        <MenuItem value={district} key={district?.district_id}>{district?.district_name}</MenuItem>
                                    )
                                    )}
                                    
                                </Select>
                                </FormControl>
                            </Grid>
                        )
                    }
                    {
                        selectProvinces && selectDistricts &&
                        (
                            <Grid item xs={12}>
                                <FormControl fullWidth >
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectwards}
                                    onChange={handleChangeWards}
                                    MenuProps={{
                                        PaperProps: {
                                        style: {
                                            maxHeight: 200, // Giới hạn chiều cao hiển thị
                                        },
                                        },
                                    }}
                                >
                                    {wards?.map((ward: any) => (
                                        <MenuItem value={ward} key={ward?.ward_id}>{ward?.ward_name}</MenuItem>
                                    )
                                    )}
                                </Select>
                                </FormControl>
                            </Grid>
                        )
                    }

                    <Grid item xs={12}>
                        <TextField
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            label="Địa chỉ cụ thể"
                            fullWidth
                            disabled={!selectDistricts && !selectwards && !selectProvinces}
                        />
                    </Grid>
                </Grid>
                </Box>
                
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
                Agree
            </Button>
            </DialogActions>
        </Dialog>


            <Stack display={'flex'} flexDirection={"row"} justifyContent={"space-between"}>
                <Typography variant='h5' fontWeight={700} align='center'>Địa Chỉ Của Tôi</Typography>
                <Button size="medium" variant='contained' style={{fontWeight: 600, backgroundColor: "#FC9C55" }}>
                    <Typography variant='body2' onClick={handleClickOpen}>
                        Thêm địa chỉ mới
                    </Typography>
                </Button>
            </Stack>
            <Box height={10}/>
            <Divider />
            <Box  sx={{padding: 3,}}>
                <Box paddingTop={2} paddingBottom={2}>
                    <Typography variant='h6' fontWeight={600}>
                        Địa chỉ
                    </Typography>
                </Box>
                <Box sx={{borderWidth: 1, padding: 2, marginBottom: 2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={8}>
                                    <Stack display={"flex"} flexDirection={"row"}>
                                        <Typography variant='body1' fontStyle={'italic'} >Võ Thanh Tuấn</Typography>
                                        <Typography variant='body1' fontStyle={'italic'} paddingLeft={2}>0921198391</Typography>
                                    </Stack>
                                    <Typography variant='body2' width={"70%"} textTransform={'capitalize'}>
                                        Nhà Lắp Ghép Dsdhome, Gamuda Central Xã Côn Đảo, Huyện Côn Đảo, Bà Rịa - Vũng Tàu
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack display={"flex"} flexDirection={"row"} justifyContent={"end"}>
                                        <Button variant='text'>
                                            Cập Nhật
                                        </Button>
                                        <Button variant='text'>
                                            Xóa
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                
                
            </Box>
        </Box>
    </Paper>
  )
}
