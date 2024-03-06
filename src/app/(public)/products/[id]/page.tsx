import ProductDetail from '@/components/ui/public/products/prodcuctId/ProductDetail'
import { Box } from '@mui/material'
import React from 'react'




export default function page({ params }: { params: { id: number } }) {

  return (
    <>
    <Box sx={{padding: 3,}}>
        <ProductDetail id={params.id} />
    </Box>
    </>
  )
}
