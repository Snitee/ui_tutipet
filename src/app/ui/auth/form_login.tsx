"use client"
// LoginForm.js
import React from 'react';
import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button';

import { createTheme } from '@mui/material';
import Button from './button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import Button from '../button';


const LoginForm = () => {

  const router = useRouter();

  const handleNavigateToHome = () => {
    router.push('/');
  };

  return (
    <div className='p-9 bg-[#7CACA0] border-2 w-[40%] rounded-xl'>
      <div className='p-4 bg-white mb-4 flex justify-center'>
        <h2>Đăng Nhập</h2>
      </div>
      <form className='px-16 border-2 py-6 bg-white'>
        <TextField 
          fullWidth
          id="outlined-hidden-label-medium" 
          margin="normal" 
          size="medium" 
          label="Email" 
          variant="outlined"  
          
        />
        <br />
        <TextField 
          id='outlined-hidden-label-medium' 
          margin="normal" 
          size="medium" 
          label="Password" 
          variant='outlined' 
          fullWidth 
          />
        <br />
        <div className='mt-2 p-2'>
          <div className='flex justify-end'>
            <Link href={'/forget_password'}>
              <span className='text-blue-400 italic'>bạn không nhớ mật khẩu?</span>
            </Link>
          </div>
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
              type='submit' 
              className='bg-green-500 rounded-md py-2 border 
              border-black w-[26%] justify-center text-white 
              font-semibold hover:bg-green-200 hover:text-black'
              >
                Đăng Nhập
            </Button>
          </div>
          <div className='flex justify-center pt-4'>
            <Link href={'/signup'}>
              <span className='text-blue-400'>Bạn là thành viên mới?</span>
            </Link>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default LoginForm;
