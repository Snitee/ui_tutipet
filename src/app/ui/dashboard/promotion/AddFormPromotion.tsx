"use client"
import { Close } from '@mui/icons-material'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { DatePicker, DateTimeField, DateTimePicker, LocalizationProvider, MuiPickersAdapterContext } from '@mui/x-date-pickers'
import React from 'react'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { List, ListItem, ListItemText, ListSubheader, MenuItem, Modal, Select } from '@mui/material'
import FormSelectProduct from './FormSelectProduct'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function AddFormPromotion({eventClose}: any) {
    const [formValid, setFormValid] = React.useState('');
    const [data, setData] = React.useState([]);
    const [openSelection, setOpenSelection] = React.useState(false);
    const handleOpenSelection = () => setOpenSelection(true);
    const handleCloseSelection = () => setOpenSelection(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault();
        // const dataForm = new FormData(event.currentTarget);
        
        // const data = {
        //     name: dataForm.get('name'),
        //     price: dataForm.get('price'),
        //     type_id: dataForm.get('type'),
        //     info: "",
        //     description: "",
        //     img: ""
        // }

        // fetch('http://localhost:8080/api/v1/products', {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        // .then(response => {

        //     if(response.ok){
        //         eventClose();
        //         Swal.fire("Thanh Công!", "Đã Xong", "success").then(() => {
        //         // Reload the page after the user acknowledges the success message
        //         window.location.reload();
        //         });
        //     }
            

        //     return response.json();
        // })
        // .then(data => {
        //     console.log('API Response:', data); 
        //     setFormValid(data.message)     
        // })
        // .catch(error => {
        //     console.error('Error posting data:', error);  
        // });
        
    
    };

    return (
    <>
    <Modal
        open={openSelection}
        onClose={handleCloseSelection}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <FormSelectProduct eventClose={handleCloseSelection}/>
      </Box>
    </Modal>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Box>
                <Typography variant='h5' align='center'>
                    Tạo Chương Trình Ưu Đãi
                </Typography>
                <IconButton 
                    style={{ position: "absolute", top: "0", right: "0"}}
                    onClick={eventClose}
                >
                    <Close />    
                </IconButton>           
            </Box>
            <Box height={10}  />
            <Grid container spacing={1} justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12}>
                    <Stack direction={'row'} spacing={2} justifyContent={"space-between"}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker label="Từ Ngày"/>    
                        </LocalizationProvider>
                        <Typography variant='h4' component={'div'}>
                            -
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker label="Đến Ngày"/>    
                        </LocalizationProvider>
                    </Stack>
                    
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Ưu Đãi Dành Cho</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="target"
                        >
                            <MenuItem value={"PRODUCT"}>Sản Phẩm</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Giảm Theo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="discountType"
                        >
                            <MenuItem value={"PERCENTAGE"}>% Giá Sản Phẩm</MenuItem>
                            <MenuItem value={"SPECIFIC"}>Giá Sản Phẩm</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="standard-basic" 
                        label="Giá trị" 
                        variant="standard" 
                        name='value' 
                        type="number" 
                        InputLabelProps={{
                            shrink: true,
                        }} 
                        fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                        }}
                        >
                        {[0, 1, 2].map((item) => (
                            <ListItem key={`item-${item}`}>
                                <ListItemText primary={`Item ${item}`} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h3' align='center'>
                        <Button variant='outlined' type='button'  fullWidth onClick={handleOpenSelection}>
                            Chọn Sản Phẩm
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {formValid && (
                    <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                        <Alert severity="error">
                            {formValid}
                        </Alert>
                    </Stack>
                    )}
                    <Typography variant='h3' align='center'>
                        <Button variant='contained' type='submit' className='bg-blue-500' fullWidth >
                            Submit
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
            </Box>
    </>
  )
}
