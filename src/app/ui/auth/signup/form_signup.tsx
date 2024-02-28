"use client"

import React from 'react';
import SignUp from './sign_up';

const SignUpForm = () => {



  return (
    <div className='p-9 bg-[#7CACA0] border-2 w-[40%] rounded-xl'>
      <div className='p-4 bg-white mb-4 flex justify-center'>
        <h2>Đăng Ký</h2>
      </div>
      <form className='px-16 border-2 py-6 bg-white'>
        <SignUp />
      </form>
    </div>
  );
};

export default SignUpForm;
