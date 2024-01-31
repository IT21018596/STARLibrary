// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios'


// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {
  // ** Hook
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  const userr = typeof window !== 'undefined' ? localStorage.getItem('userr') : null;  

  const router = useRouter();
  const handleButtonClick = () => {
    
    router.push('/pendingMembers');
  };

  const [pendingMemCount, setPendMemCount] = useState(null)

  const fetchPendingMembers = async() => {
        
    try {
         const response = await axios.get(`http://localhost:8081/api/v1/registration/getPendingMembers`, {
          headers: {Authorization: userr }
         });
     
         if (response.status === 200) {
           
           const responseData = response.data;
           console.log('Fetched data:', responseData);
           
       setPendMemCount(responseData.length);
                                 
         } else {
           
         }
       } catch (error) {
         
         console.error('Error fetching data:', error);
       }
      
   };

   useEffect(() => {
     fetchPendingMembers();
     console.log(pendingMemCount) 
   }); 

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
      <Typography variant='h6'>Pending Members 🕒</Typography>

        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          See who are going to join with you
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          {pendingMemCount}
        </Typography>
        <Button size='small' variant='contained' onClick={handleButtonClick}>
          View List
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
      </CardContent>
    </Card>
  )
}

export default Trophy
