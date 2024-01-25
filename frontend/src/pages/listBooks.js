// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
// ** Icons Imports
import Twitter from 'mdi-material-ui/Twitter'
import CartPlus from 'mdi-material-ui/CartPlus'
import Facebook from 'mdi-material-ui/Facebook'
import Linkedin from 'mdi-material-ui/Linkedin'
import GooglePlus from 'mdi-material-ui/GooglePlus'
import ShareVariant from 'mdi-material-ui/ShareVariant'
import Icon from '@mdi/react';
import { mdiBookOpenPageVariantOutline } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import axios from 'axios'

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    [theme.breakpoints.up('md')]: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }))



const CardBasic = () => {
    // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const [books, setBooks] = useState([]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const fetchAllBooks = async() => {
    try{

        const response = await axios.get(`http://localhost:8081/api/v1/books/getAllBooks`)
        setBooks(response.data);
        console.log(response.data)

    }catch(error){
        console.log(error)
    }
  }
  useEffect(() => {
    fetchAllBooks();
  },[])

  const imagePath = `http://localhost:8081/uploads/1705338023560WhatsApp Image 2024-01-08 at 11.04.09.jpeg`;
   return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Welcome to the World of Books</Typography>
      </Grid>
      
      
      {books.map((book) => (

      <Grid item xs={12} sm={6}>
      <Card>
      <Grid container spacing={6}>
        <StyledGrid item md={5} xs={12}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {book.frontImage && (
              <img
                width={137}
                height={176}
                alt={`Book Cover - ${book.cBookName}`}
                src={`http://localhost:8081/${book.frontImage.replace(/\\/g, '/')}`}
              />
            )}
          </CardContent>
        </StyledGrid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            paddingTop: ['0 !important', '0 !important', '1.5rem !important'],
            paddingLeft: ['1.5rem !important', '1.5rem !important', '0 !important']
          }}
        >
          <CardContent>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
            {book.cBookName}
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
              {book.cContentPage}
            </Typography>

            <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
              Category:{' '}
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
              {book.cCatCode}
            </Typography>
            </Typography>

            <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
              Availability:{' '}
              <Box component='span' sx={{ fontWeight: 'bold', color: '#34d115'}}>
                Borrowable
              </Box>
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon path={mdiBookOpenPageVariantOutline}
        title="Request to borrow"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"
        spin
      />
      <Typography sx={{ fontWeight: 500, marginLeft: 3 }}>
        
        <Box
          component='span'
          sx={{
            fontWeight: 'bold',
            color: '#e83149',
            '&:hover': {
              textDecoration: 'underline',
              cursor: 'pointer',
            },
          }}
        >
            Place borrow request
        </Box>
      </Typography>
      </Button>
              <IconButton
                id='long-button'
                aria-label='share'
                aria-haspopup='true'
                onClick={handleClick}
                aria-controls='long-menu'
                aria-expanded={open ? 'true' : undefined}
              >
                <ShareVariant fontSize='small' />
              </IconButton>
              <Menu
                open={open}
                id='long-menu'
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'long-button'
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Facebook />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Twitter />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Linkedin />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <GooglePlus />
                </MenuItem>
              </Menu>
            </Box>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
      </Grid>
      
      
      ))}
      
      
      
      
      
    </Grid>
  )
}

export default CardBasic
