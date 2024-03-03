"use client";
import React from 'react'
import { Data, getAllProduct } from '../../dashboard/products/ListProduct';
import CardProduct from './CardProduct';

export default function ListProduct() {
    const [data, setData] = React.useState<Data[]>([]);

  const fetchData = async () => {
    try {
      const result = await getAllProduct();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='grid grid-flow-row grid-cols-4 '>

            {data.map((row: Data) =>(
                <CardProduct key={row.id} data={row}/>
            ))}

    </div>
  )
}
