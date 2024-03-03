"use client";
import React, { useState } from 'react'

import { Data, getAllProductType } from '../../dashboard/products/ListProduct';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';

export default function MenuDrop() {
  const [type, setType] = React.useState('');
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const result = await getAllProductType();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
     
  return (
    <div >
      
      {/* <Select>
        {data.map((data) => (
          <option key={data.id} 
          value={data.id}>{data.name}</option>
        ))}
      </Select> */}
    </div>

  )
}

 