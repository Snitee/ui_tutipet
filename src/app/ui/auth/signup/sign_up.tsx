import React, { useState } from "react";

// Material UI Imports
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Input,
  Checkbox,
  Alert,
  Stack,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

// Material UI Icon Imports
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { useRouter } from "next/navigation";
import Button from "./button";

// Validations

// Email Validation

const isEmail = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);



export default function SignUp() {

  const router = useRouter();

  const handleNavigateToHome = () => {
    router.push('/');
  };

  const [showPassword, setShowPassword] = useState(false);

  //Inputs
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPassInput, setConfirmPassInput] = useState('');

  // Inputs Errors
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassError, setConfirmPassError] = useState(false);

  // Overall Form Validity
  const [formValid, setFormValid] = useState('');
  const [success, setSuccess] = useState(false);

  // Handles Display and Hide Password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };


  // Label for Checkbox
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // Validation for onBlur Username
  const handleUsername = () => {
    if (!usernameInput) {
      setUsernameError(true);
      return;
    }

    setUsernameError(false);
  };

  // Validation for onBlur Email
  const handleEmail = () => {
    console.log(isEmail(emailInput));
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
  };

  // Validation for onBlur Password
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

  //handle Submittion
  const handleSubmit = () => {

    // IF username error is true
    if (usernameError || !usernameInput) {
      setFormValid(
        "Username is set btw 5 - 15 characters long. Please Re-Enter"
      );
      return;
    }

    // If Email error is true
    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    // If Password error is true
    if (passwordError || !passwordInput) {
      setFormValid(
        "Password is set btw 5 - 20 characters long. Please Re-Enter"
      );
      return;
    }
    setFormValid('');
    setSuccess(true);
    
    if(success){

    }
  };

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
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
      </div>

      <div style={{ marginTop: "5px" }}>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <div className="pl-14 ">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </div>
          </RadioGroup>
        </FormControl>
      </div>

      <div style={{ marginTop: "5px" }}>
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
      </div>


      <div style={{ marginTop: "5px" }}>
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
      </div>

      <div style={{ marginTop: "5px" }}>

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
      </div>

      <div style={{ marginTop: "10px" }}>
        <div className='mt-2 p-2'>
            <div className='flex flex-row w-full justify-around mt-8'>
              <Button 
                type='button' 
                onClick={handleNavigateToHome}
                className='border-2 rounded-md py-2 border-[#7CCACA] w-[26%] 
                justify-center hover:opacity-30 font-semibold' 
                >
                  Quay Lại
              </Button>
              <Button 
                type='button'
                onClick={handleSubmit}
                className='bg-green-500 rounded-md py-2 border 
                border-black w-[26%] justify-center text-white 
                font-semibold hover:bg-green-200 hover:text-black'
                >
                  Đăng Ký
              </Button>
            </div>
          </div>
      </div>

      {/* Show Form Error if any */}
      {formValid && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="error">
            {formValid}
          </Alert>
        </Stack>
      )}

      {/* Show Success if no issues */}
      {success && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="success">
            {success}
          </Alert>
        </Stack>
      )}

        
    </div>
  );
}