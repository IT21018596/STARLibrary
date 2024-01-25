// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiArrowRightCircle } from '@mdi/js';


// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'

const salesData = [
  // {
  //   stats: '245k',
  //   title: 'Salesss',
  //   color: 'primary',
  //   icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
  // },
  
  {
    stats: 'IT',  
    
    color: 'primary',
    icon: "",
    src:"images/51mP-B47joL.jpg",
    height:100,
    width:100
  },
  {
    stats: 'Novels',
    
    color: 'primary',
    icon: "",
    src:"images/s-l1600.jpg",
    height:100,
    width:100
  },
  {
    stats: 'Magz',
    
    color: 'primary',
    icon: "",
    src:"images/download.jpeg",
    height:100,
    width:100
  },
  {
    stats: 'Management',
    
    color: 'primary',
    icon: "",
    src:"images/cvr9780743203197_9780743203197_hr.jpg",
    height:100,
    width:100
  },
  // {
  //   stats: '12.5k',
  //   title: 'Customers',
  //   color: 'success',
  //   icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
  // },
  // {
  //   stats: '1.54k',
  //   color: 'warning',
  //   title: 'Products',
  //   icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
  // },
  // {
  //   stats: '$88k',
  //   color: 'info',
  //   title: 'Revenue',
  //   icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  // }
]

const renderStats = () => {
  

  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: item.width - (item.width)*0.3,
            height: item.height,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          <img src={item.src} width="auto" height={item.height+10} />
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const StatisticsCard = () => {
  const router = useRouter()

 function buttonOnClick()  {
  router.push('/addNewBooks')
 }

  
  return (
    
    <Card>
      <CardHeader
      
        title={
          'Add New Books'
          
        }
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Let's flood this library with an ocean of books!😎
            
            <Button onClick={buttonOnClick}>
      <Icon path={mdiArrowRightCircle} size={1} />
      </Button>
      
            </Box>{' '}
            {/*😎 this month */}
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
    
  )
}

export default StatisticsCard
