"use client"
import React from 'react'
import Image from 'next/image'
import cat from '@/app/favicon.ico'
import { Data, getAllProduct } from '@/app/ui/dashboard/products/ListProduct';
import ListProduct from '@/app/ui/public/product/ListProduct';
import MenuDrop from '@/app/ui/public/product/MenuDrop';
import { Autocomplete, Stack, TextField } from '@mui/material';
import SearchBar from '@/components/SearchBar';



export default function page() {


  return (
    <div className='flex flex-row p-2'>
        <div className='p-5 w-[20%] border rounded-xl shadow-md border-yellow-600' >
          <div className='border-b-2 border-yellow-500 pb-2'>
            <h5 className='text-center font-bold text-2xl uppercase text-gray-500'>Danh Muc</h5>
          </div>

          <div className='p-2'>
            <ul className='menu'>
              <li className='flex flex-row p-2 item-center hover:border-b hover:shadow-sm hover:border-yellow-500 mb-2 '>
                <svg className="h-12 w-12 text-yellow-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" >  
                  <path d="M10.77 2.394c.416-.3.9-.394 1.23-.394h1.446a2.5 2.5 0 0 1 1.286.356l1.783 1.07a1 1 0 0 
                  1 .485.857V5.5A1.5 1.5 0 0 1 15.5 7H15v8.038c.421.065.843.222 1.195.515c.51.424.805 1.077.805 1.947a.5.5 0 0 1-.5.5H5a3 
                  3 0 0 1-1.803-5.398a.5.5 0 0 1 .601.799A2 2 0 0 0 5 17c.288 0 .47-.07.59-.15a.817.817 0 0 0 .275-.324A1.344 1.344 0 0 0 6 
                  16v-.045l.004-.11a9.33 9.33 0 0 1 .26-1.716c.263-1.05.796-2.396 1.882-3.483C9.99 8.803 10 6.331 10 5.5V4c0-.763.33-1.288.77-1.606m.154 4.506c-.155 1.256-.629 3.012-2.07 4.454c-.914.913-1.381 2.067-1.619 3.017a8.326 8.326 0 0 0-.232 1.519a3.693 3.693 0 0 0-.003.087v.056l-.004.067a2.344 2.344 0 0 1-.25.9h6.173c-.1-.32-.303-.649-.652-.832A1.622 1.622 0 0 0 11.5 16h-1a.5.5 0 0 1 0-1h1c.176 0 .342.014.5.04V12.5a.5.5 0 0 1 1 0v2.948c.58.418.847 1.04.948 1.552h2c-.075-.328-.225-.539-.393-.678c-.257-.215-.63-.322-1.055-.322a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5V4.283l-1.782-1.07A1.5 1.5 0 0 0 13.446 3H12c-.17 0-.436.055-.645.206C11.17 3.338 11 3.563 11 4v1.5c0 .087.03.228.106.333c.057.08.157.167.394.167c.237 0 .337-.088.394-.167A.619.619 
                  0 0 0 12 5.5a.5.5 0 0 1 1 0c0 .247-.07.606-.294.917c-.243.337-.643.583-1.206.583a1.62 1.62 0 0 1-.576-.1M7 16.001L6.5 16Z"/>
                </svg>
                <a className='text-2xl pt-1 pl-2 font-semibold text-yellow-400'>Cho</a>
      
              </li>

              <li className='flex flex-row p-2 hover:border-b hover:shadow-sm hover:border-yellow-500 item-center mb-2'>
                <svg className="h-10 w-10 text-yellow-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"   >  
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 
                  5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 
                  5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <p className='text-2xl pt-1 pl-4 font-semibold text-yellow-400'>Meo</p>
              </li>
            </ul>
          </div>
        </div>

        
        <div className='flex flex-col p-2 w-full border-2 rounded-md mx-2 border-dotted bg-white'>
          <Stack>
            <div className='w-full mb-2 p-2 bg-white flex justify-center items-center'>
          
              <form className="bg-white w-[50%] border-2  rounded-xl p-2 border-black opacity-40">
                  {/* <input "type="search placeholder='Search' className="w-full h-10 px-4 border-2  rounded-xl focus:shadow-xl" /> */}
                  {/* <Autocomplete
                    freeSolo
                    id="free"
                    disableClearable
                    options={top100Films.map((option)=> option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label ="Search"
                        InputProps={{
                          ...params.InputProps,
                          type: 'search',
                        }} 
                      />
                    )}
                  /> */}
                  <SearchBar/>
              </form>
            </div>
          </Stack>

          <ListProduct />
          
        </div>
        
    </div>
  )
}

// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//   },
//   { title: 'The Good, the Bad and the Ugly', year: 1966 },
//   { title: 'Fight Club', year: 1999 },
//   {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001,
//   },
//   {
//     title: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980,
//   },
//   { title: 'Forrest Gump', year: 1994 },
//   { title: 'Inception', year: 2010 },
//   {
//     title: 'The Lord of the Rings: The Two Towers',
//     year: 2002,
//   },
//   { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { title: 'Goodfellas', year: 1990 },
//   { title: 'The Matrix', year: 1999 },
//   { title: 'Seven Samurai', year: 1954 },
//   {
//     title: 'Star Wars: Episode IV - A New Hope',
//     year: 1977,
//   },
//   { title: 'City of God', year: 2002 },
//   { title: 'Se7en', year: 1995 },
//   { title: 'The Silence of the Lambs', year: 1991 },
//   { title: "It's a Wonderful Life", year: 1946 },
//   { title: 'Life Is Beautiful', year: 1997 },
//   { title: 'The Usual Suspects', year: 1995 },
//   { title: 'Léon: The Professional', year: 1994 },
//   { title: 'Spirited Away', year: 2001 },
//   { title: 'Saving Private Ryan', year: 1998 },
//   { title: 'Once Upon a Time in the West', year: 1968 },
//   { title: 'American History X', year: 1998 },
//   { title: 'Interstellar', year: 2014 },
//   { title: 'Casablanca', year: 1942 },
 
// ];
