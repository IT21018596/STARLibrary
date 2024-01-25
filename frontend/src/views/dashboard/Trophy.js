// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router';


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

  const router = useRouter();
  const handleButtonClick = () => {
    
    router.push('/pendingMembers');
  };

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
      <Typography variant='h6'>Pending Members 🕒</Typography>

        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          See who are going to join with you
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          6
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
