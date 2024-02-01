import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {IconButton} from '@mui/material';
//import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import Modals from "@mui/material/Modal";
import { useUser } from 'src/@core/context/UserContext'
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "80vh", 
  overflow: "auto", 
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledCard = styled(Card)({
    maxWidth: '55%',
  });

// Styled Grid component
const StyledGrid1 = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      paddingTop: '0 !important'
    },
    '& .MuiCardContent-root': {
      padding: theme.spacing(3, 4.75),
      [theme.breakpoints.down('md')]: {
        paddingTop: 0
      }
    }
  }))
  
  // Styled Grid component
  const StyledGrid2 = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '0 !important'
    },
    [theme.breakpoints.down('md')]: {
      order: -1
    }
  }))
  
  // Styled component for the image
  const Img = styled('img')(({ theme }) => ({
    height: '11rem',
    borderRadius: theme.shape.borderRadius
  }))



const AllMembers = () => {

  const router = useRouter();

  //const { user } = useUser();
  const userr = typeof window !== 'undefined' ? localStorage.getItem('userr') : null;  

  const { getWithExpiry } = useUser();
  const damn = getWithExpiry()
  useEffect(() => {
    
    if (!damn) {
      router.push('/pages/login');
    }
  }, [damn]);

  
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {

    console.log("AI MEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    setOpen(false);
  
  }

  const [successOpen, setSuccessOpen] = React.useState(false);
  const handleSuccessOpen = () => setSuccessOpen(true);
  const handleSuccessClose = () => {
    setSuccessOpen(false);
    handleClose();
    
  }
  


  const [fetchedMembers, setFetchedMembers] = useState([]);
  const fetchAllMembers = async() => {
        
    try {
         const response = await axios.get(`http://localhost:8081/api/v1/member/getAllMembers`);
     
         if (response.status === 200) {
           
           const responseData = response.data;
           console.log('Fetched data:', responseData);
           console.log('Factory Code: ', responseData[0])
           console.log("Name: ", responseData[0])
           
           setFetchedMembers(responseData);
                       
         } else {
           
         }
       } catch (error) {
         
         console.error('Error fetching data:', error);
       }
   };

   useEffect(() => {
    fetchAllMembers();
     //console.log(changedFirstName) 
   }, []); 

   const [selectedUser, setSelectedUser] = useState([]);

   const fetchMemberToModal = async(memberId) => {     
        
    try{
        
        const responseMember = await axios.post(
            "http://localhost:8081/api/v1/member",{
              memberID: memberId
                
            }
        );
        //console.log(responseMember.data)
        setSelectedUser(responseMember.data)
        //
        //console.log(selectedUser.recordset[0].cFtyCode)
        console.log("selected member: ", selectedUser[0])
       
        //console.log("HIIII", responseMember.data[0].nMemberID)

        handleOpen();
    }catch(error){

    }
  }
  
   /*const handleEditChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };*/

  

  const [changedFactoryCode, setChangedFactoryCode] = useState()
  const handleChangedFactoryCode =(newFtyCode) => {
    setChangedFactoryCode(newFtyCode)
  }

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMembers = fetchedMembers.filter((member) =>
    member.cEPF.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
    <Grid item xs={12}>
          <Card>
            {/* Search Bar */}
        <TextField
        style={{top: '10px' }}
          label="Search by EPF"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* You can add a search icon here if needed */}
              </InputAdornment>
            ),
          }}
        />


      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Member ID</TableCell>
              <TableCell>EPF</TableCell>
              <TableCell>Factory</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>View</TableCell>
              
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMembers.map(row => (
              <TableRow hover key={row.nMemberID} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
              <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.cFiratName}</Typography>
                  <Typography variant='caption'>{row.designation}</Typography>
                </Box>
              </TableCell>
                <TableCell>{row.cEPF}</TableCell>
                <TableCell>{row.cFtyCode}</TableCell>
                <TableCell>{row.cFiratName}</TableCell>
                <TableCell>{row.cDesignation}</TableCell>
                <TableCell><Button color="secondary" onClick={() => fetchMemberToModal(row.nMemberID)} >View</Button></TableCell>
                
                <TableCell><Icon path={mdiDelete} size={1} /></TableCell>
                <TableCell>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {open && (
        <Modals
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <StyledCard>
        <Grid container spacing={6}>
        
        <StyledGrid1 item xs={12} md={6} lg={7}>
        
          <CardContent>
            <Typography variant='h5' sx={{ marginBottom: 2 }}>
              {selectedUser[0].cFiratName} {selectedUser[0].cLastName}
            </Typography>
            <Box sx={{ mb: 4.75, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Rating readOnly value={5} name='read-only' sx={{ marginRight: 2 }} />
              {/*<Typography variant='body2'>5 Star | 98 reviews</Typography>*/}
            </Box>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
                <Typography variant='body1' sx={{ marginBottom: 1 }}>
                   <span style={{ display: 'inline-block', width: '150px' }}>Username:</span> {selectedUser[0].cFiratName}
                 </Typography>
                 <Typography variant='body1' sx={{ marginBottom: 1 }}>
                   <span style={{ display: 'inline-block', width: '150px' }}>Factory:</span> {selectedUser[0].cFtyCode}
                 </Typography>
                 <Typography variant='body1' sx={{ marginBottom: 1 }}>
                   <span style={{ display: 'inline-block', width: '150px' }}>DepartmentID:</span> {selectedUser[0].nDepID}
                 </Typography>
                 <Typography variant='body1' sx={{ marginBottom: 1 }}>
                   <span style={{ display: 'inline-block', width: '150px' }}>Extention:</span> {selectedUser[0].cPhoneExtenton}
                 </Typography>
                 <Typography variant='body1' sx={{ marginBottom: 1 }}>
                   <span style={{ display: 'inline-block', width: '150px' }}>Contact:</span> {selectedUser[0].cMobileNo}
                 </Typography>
                 <Typography variant='body1' sx={{ marginBottom: 1 }}>
                   <span style={{ display: 'inline-block', width: '150px' }}>MailID:</span> {selectedUser[0].cEmailCompany}
                 </Typography>
                 <Typography variant='body1' sx={{ marginBottom: 1 }}>
                   <span style={{ display: 'inline-block', width: '150px' }}>PVT Mail:</span> {selectedUser[0].cMailPrivate}
                 </Typography>
                 <Typography variant='body1' sx={{ marginBottom: 1 }}>
                   <span style={{ display: 'inline-block', width: '150px' }}>Registered On:</span> {selectedUser[0].dRegisteredOn}
                 </Typography>
              
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense' sx={{ width: '100%' }}>
            <Button onClick={handleClose}>Close</Button>
            
          </CardActions>
        </StyledGrid1>
        <StyledGrid2 item xs={12} md={6} lg={5}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Img alt='QR code' src={selectedUser[0].cUserQRUrl} />
          </CardContent>
          
        </StyledGrid2>
        
      </Grid>
      </StyledCard>
      </div>

      </Modals>
      )}

    </Card>
        </Grid>
  )
}

export default AllMembers
