/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Box, Button, Checkbox, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ListCart from './ListCart'
import axios from 'axios';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function TitleCard() {
    const [checkedAll, setCheckedAll] = React.useState(false);
    const [cart, setCart] = React.useState<any>({});
    const [productCarts, setProductCarts] = React.useState<any[]>([]);
    const route = useRouter()
    const [totalPrice, setTotalPrice] = React.useState(0);


    function getCookieValue(cookieName: string) {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
      
        for (let i = 0; i < cookieArray.length; i++) {
          let cookie = cookieArray[i].trim();
          if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
          }
        }
        return null;
      }


    const getListCartProduct = async() =>{
        try{
            const token = getCookieValue('AuthToken');
            if (!token){
                return;
            }
            const res = await axios.get(`http://localhost:8080/api/v1/cart/user`,{
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
          })
          console.log("carts: ", res)
          setCart(res.data)
          return res.data
        }catch(error){
          console.error("error",error)
        }
      }

    const deleteProductCart = async(id: number) =>{
    try{
        const token = getCookieValue('AuthToken');
        if (!token){
            return;
        }
        const res = await axios.delete(`http://localhost:8080/api/v1/cart/product_cart/${id}`,{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        console.log("carts: ", res)
        return res
    }catch(error){
        console.error("error",error)
    }
    }


    const handleClickDelete= async (id: number) => {
        const checkPost = await deleteProductCart(id);
        if(checkPost){
            setProductCarts(productCarts.filter(item => item.id !== id));
        }
    }

    const calculateTotalPrice = () => {
        let total = 0;
        productCarts.forEach((item) => {
          if (item.checked) {
            total += item.quantity * item.productRes.price;
          }
        });
        return total;
      };

    React.useEffect(() => {
        const updatedTotalPrice = calculateTotalPrice();
        setTotalPrice(updatedTotalPrice);
    }, [productCarts]);
    
            


    React.useEffect(() => {
        const fetchData = async () => {
            const result = await getListCartProduct();
            console.log("result", result)
            if (result) {
                const cartsWithChecked = result.productCartRes.map((item: any) => ({ ...item, checked: checkedAll }));
                setProductCarts(cartsWithChecked);
            }
        };
    
        console.log("check ", productCarts)
        fetchData(); 
    
    }, []);
    
    const handleCheckedAll = () => {
        const updatedCheckedAll = !checkedAll;
        setCheckedAll(updatedCheckedAll);
        setProductCarts((prevProductCarts: any) => {
            return prevProductCarts.map((item: any) => ({
                ...item,
                checked: updatedCheckedAll,
            }));
        });
    }
    

    const handleCheckboxChange = (index: number) => {
        const updatedProductCarts = [...productCarts];
        updatedProductCarts[index].checked = !updatedProductCarts[index].checked;
        setProductCarts(updatedProductCarts);
    };

    const handleDeleteAll= async ()=>{
        
        if(checkedAll){
            const checkDeleted = await deleteAllProductCart();
            if(checkDeleted?.status === 204){
                setProductCarts([])
            }
        }

    }
    
    const deleteAllProductCart = async() =>{
        try{
            const token = getCookieValue('AuthToken');
            if (!token){
                return;
            }
            const res = await axios.delete(`http://localhost:8080/api/v1/cart/product_cart/all`,{
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
            console.log("carts: ", res)
            return res
        }catch(error){
            console.error("error",error)
        }
    }

    React.useEffect(() => {
        if(productCarts && productCarts.length > 0 && cart){
            const latestProductCarts = productCarts.map(({ id, productRes, quantity }) => ({
                id,
                product_id: productRes.id,
                quantity,
            }));
            updateProductCart(latestProductCarts);
        }
      }, [productCarts]);
    
    console.log("data ", cart)
    console.log("a",productCarts)
    

    const updateProductCart = async(latestProductCarts: any[]) =>{
        try{
            const token = getCookieValue('AuthToken');
            if (!token){
                return;
            }

            const res = await axios.put(`http://localhost:8080/api/v1/cart`,
            {
                
                id: cart.id,
                productCartReqs: latestProductCarts,
                
            },
            {
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
            console.log("carts: ", res)
            return res
        }catch(error){
            console.error("error",error)
        }
    }

    const handleQuantityChange = (itemId: number, newQuantity: number) => {
        setProductCarts((prevProductCarts) => {
          return prevProductCarts.map((item) => {
            if (item.id === itemId) {
              return { ...item, quantity: newQuantity };
            }
            return item;
          });
        });

      };

    return (

        <Box >
        {productCarts.length === 0? (
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                <Typography variant='h5' gutterBottom>Chưa có sản phẩm trong giỏ hàng </Typography>
                <Button size="medium" variant='contained' style={{fontWeight: 600, backgroundColor: "#FC9C55" }} 
                    onClick={()=> route.push('/products')}
                >
                    <Typography variant='h6'>
                        Quay Lại Mua Hàng
                    </Typography>
                </Button> 
            </Box>

        ):
        (
        <Box>
            <Stack display={'flex'} justifyContent={"center"} alignContent={"center"} width={"100%"}>
                <Box marginBottom={2}>
                    <Paper elevation={2} >
                        <Stack display={"flex"} flexDirection={'row'} justifyContent={"center"} alignItems={"center"} paddingTop={2} paddingBottom={2}>
                            <Box width={"5%"} justifyContent={"center"} display={"flex"}>
                                <Checkbox checked={checkedAll} onClick={handleCheckedAll}/>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box width={"40%"} justifyContent={"center"} display={"flex"}>
                            <Typography>
                                Sản Phẩm
                            </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box width={"15%"} justifyContent={"center"} display={"flex"}>
                            <Typography>
                                Đơn Giá
                            </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box width={"15%"} justifyContent={"center"} display={"flex"}>
                            <Typography>
                                Số Lượng
                            </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box width={"15%"}  justifyContent={"center"} display={"flex"}>
                            <Typography>
                                Số Tiền
                            </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box width={"10%"} justifyContent={"center"} display={"flex"}>
                            <Typography>
                                Thao Tác
                            </Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Box>
                {productCarts?.map((item: any, index: number) => (
                    <ListCart
                        key={item.id}
                        item={item}
                        checkedAll={item.checked}
                        handleCheckboxChange={() => handleCheckboxChange(index)}
                        handleClickDelete={() => handleClickDelete(item.id)}
                        handleQuantityChange={handleQuantityChange}
                    />
                ))}

            </Stack>
            <Box marginBottom={15}>
                <Paper elevation={2} >
                    <Grid container spacing={2} padding={2}>
                        <Grid item xs={6}>
                            <Stack display={'flex'} direction={'row'} alignItems={'center'} spacing={2}>
                                <Box>
                                    <Checkbox checked={checkedAll} onClick={handleCheckedAll}/>
                                </Box>
                                <Typography variant='body1' textAlign={"center"} textTransform={'capitalize'} >
                                    Chọn tất cả
                                </Typography>
                                <Button variant='text' onClick={handleDeleteAll}>
                                    <Typography variant='body1' textAlign={"center"} textTransform={'capitalize'} 
                                        
                                    >
                                        Xóa Tất Cả
                                    </Typography>
                                </Button>
                            </Stack>

                        </Grid>
                        <Grid item xs={6} paddingRight={3}>
                            <Stack display={'flex'} direction={'row'} justifyContent={"end"} alignItems={'center'} spacing={2}>
                                <Typography variant='body2' textAlign={"center"} textTransform={'capitalize'} >
                                    Tổng Thanh Tiền
                                </Typography>
                                <Typography variant='h5' textAlign={"center"} textTransform={'capitalize'} >
                                    {`${totalPrice} VND`}
                                </Typography>
                                <Button size="medium" variant='contained'  style={{ backgroundColor: "#FC9C55" }}>
                                    <Typography variant='subtitle1' >
                                        Mua Sản Phẩm
                                    </Typography>
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Box>

        )
        }
    </Box> 
        

  )
}
