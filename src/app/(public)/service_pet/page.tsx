import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import pet from '@/app/img/pet.png'
import dogcat from '@/app/img/dogcat.png'
import iconsport from '@/app/img/iconsport.png'
import house from '@/app/img/house.png'

export default function page() {
  return (
  
      <Box sx={{ justifyContent:'center', padding: 3}}>
        <Grid container>
          <Stack direction="row" spacing={2}>
            <Grid item xs={4}>
              <Typography variant='h6' gutterBottom>
                PET SERVICE
              </Typography>
              <Typography variant='h3'  gutterBottom>
                  DỊCH VỤ
              </Typography>
              <Divider/>
              <Typography variant='h3' gutterBottom>
                  Hàng đầu             
              </Typography>
              <Image src={dogcat} height={260} alt={'cho meo'} />
            </Grid>

            <Grid item xs={4} >
              <Box p={2} sx={{ border: '2px solid black' }}>
                <Image src={iconsport} height={70} alt={'dang cap'} />
                <Typography variant='h6' gutterBottom>
                  ĐẲNG CẤP
                </Typography>
                <Typography variant='h6' gutterBottom>
                Chúng tối biết cách làm thế nào để thú cưng của bạn trở nên đẳng cấp và 
                cá tính hơn. Với dịch vụ cắt tỉa lông thú cưng chúng tôi sẽ giúp các bé trở thành phiên bản hoàn hảo nhất.
                </Typography>
              </Box>
            </Grid>
    
            <Grid item xs={4}>
              <Box p={2} sx={{ border: '2px solid black', '&:hover':{bgcolor: '#9ca3af'}}}>
                <Image src={pet} height={70} alt={'shop'} />
                  <Typography variant='h6' gutterBottom>
                    SHOP
                  </Typography>
                  <Typography variant='h6' gutterBottom>
                  Cùng với hơn 3.000 khách hàng đã luôn tin tưởng, đồng hành, chúng tôi luôn đặt ra những mục tiêu
                  và thử thách mới. PET SERVICE cung cấp các sản phẩm, phụ kiện rất đa dạng...
                  </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={4}>
              <Box p={2} sx={{ border: '2px solid black' }}>
                <Image src={house} height={70} alt={'shop'} />
                <Typography variant='h6' gutterBottom>
                  NGHI DUONG
                </Typography>
                <Typography variant='h6' gutterBottom>
                Mọi hành động ở PET SERVICE đều bắt đầu từ sứ mệnh Trao Gửi Yêu Thương. 
                Mọi thú cưng mới khi đến với chúng tôi đều được quan tâm đặc biệt bởi đội ngũ Nhân viên nhiều kinh nghiệm...
                </Typography>
              </Box>
            </Grid>
          </Stack>
        </Grid>
        
      </Box>
  )
}
