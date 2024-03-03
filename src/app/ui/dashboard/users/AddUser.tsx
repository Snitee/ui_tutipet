"use client"
import { Close, Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Button, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, List, ListItem, ListItemButton, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import Swal from 'sweetalert2'

// const getAllProductType = async() => {
//     const res = await fetch('http://localhost:8080/api/v1/types');

//     if(!res.ok){
//         throw new Error('Fail to fetch data');
//     }

//     return res.json();
// }

const isEmail = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


export default function AddFormUser({eventClose}: any) {
    const [data, setData] = React.useState([]);
    const [gender, setGender] = React.useState("male");
    const [formValid, setFormValid] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    // Input
    const [usernameInput, setUsernameInput] = React.useState('');
    const [emailInput, setEmailInput] = React.useState('');
    const [passwordInput, setPasswordInput] = React.useState('');
    const [confirmPassInput, setConfirmPassInput] = React.useState('');
    // Inputs Errors
    const [usernameError, setUsernameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [confirmPassError, setConfirmPassError] = React.useState(false);
    //Overall Form Validity
    const [success, setSuccess] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    };

    const handleUsername = () => {
        if (!usernameInput) {
          setUsernameError(true);
          return;
        }
    
        setUsernameError(false);
      };

    const handleEmail = () => {
        console.log(isEmail(emailInput));
        if (!isEmail(emailInput)) {
        setEmailError(true);
        return;
        }

        setEmailError(false);
    };

    const handlePassword = () => {
        if (
        !passwordInput ||
        passwordInput.length < 5 ||
        passwordInput.length > 20
        ) {
        setPasswordError(true);
        return;
        }

        setPasswordError(false);
    };

    const handleConfirmPass = () => {
        if (
          !confirmPassInput ||
          confirmPassInput.length < 5 ||
          confirmPassInput.length > 20
        ) {
          setConfirmPassError(true);
          return;
        }
    
        setConfirmPassError(false);
    };
    
    

    // const fetchData = async () => {
    //     try {
    //       const result = await getAllProductType();
    //       setData(result);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
    
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
    

    
    // React.useEffect(() => {
    //     fetchData();
    // }, []);


    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };





    return (
    <>  
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Box>
            <Typography variant='h5' align='center'>
                Đăng Ký Người Dùng
            </Typography>
            <IconButton 
                style={{ position: "absolute", top: "0", right: "0"}}
                onClick={eventClose}
            >
                <Close />    
            </IconButton>           
        </Box>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    error={usernameError}
                    label="Username"
                    id="standard-basic"
                    variant="standard"
                    sx={{ width: "100%" }}
                    size="small"
                    value={usernameInput}
                    InputProps={{}}
                    onChange={(event) => {
                        setUsernameInput(event.target.value);
                    }}
                    onBlur={handleUsername}
                    />
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="Gender"
                        onChange={handleChange}
                    >
                        <MenuItem value={"male"}>Nam</MenuItem>
                        <MenuItem value={"female"}>Nữ</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Email Address"
                    fullWidth
                    error={emailError}
                    id="standard-basic"
                    variant="standard"
                    sx={{ width: "100%" }}
                    value={emailInput}
                    InputProps={{}}
                    size="small"
                    onBlur={handleEmail}
                    onChange={(event) => {
                        setEmailInput(event.target.value);
                    }}
                    />
            </Grid>
            <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                    <InputLabel
                        error={passwordError}
                        htmlFor="standard-adornment-password"
                    >
                        Password
                    </InputLabel>
                    <Input
                        error={passwordError}
                        onBlur={handlePassword}
                        id="standard-adornment-password"
                        type={showPassword ? "text" : "password"}
                        onChange={(event) => {
                        setPasswordInput(event.target.value);
                        }}
                        value={passwordInput}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                    <InputLabel
                        error={confirmPassError}
                        htmlFor="standard-adornment-password"
                    >
                        Confirm Password
                    </InputLabel>
                    <Input
                        error={confirmPassError}
                        onBlur={handleConfirmPass}
                        id="standard-adornment-password"
                        type={showPassword ? "text" : "password"}
                        onChange={(event) => {
                        setConfirmPassInput(event.target.value);
                        }}
                        value={confirmPassInput}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
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
