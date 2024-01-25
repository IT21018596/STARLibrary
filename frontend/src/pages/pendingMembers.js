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



const PendingMembers = () => {

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

  const [fetchedData, setFetchedData] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    
    setChangedFactoryCode(null)
    setChangedDepId(null)
    setChangedCompanyMail(null)
    setChangedRemarks(null)

  }
  const [successOpen, setSuccessOpen] = React.useState(false);
  const handleSuccessOpen = () => setSuccessOpen(true);
  const handleSuccessClose = () => {
    setSuccessOpen(false);
    handleClose();
    
  }
  const [editedData, setEditedData] = useState({});

  const fetchPendingMembers = async() => {
        
    try {
         const response = await axios.get(`http://localhost:8081/api/v1/registration/getPendingMembers`, {
          headers: {Authorization: userr }
         });
     
         if (response.status === 200) {
           
           const responseData = response.data;
           console.log('Fetched data:', responseData);
           console.log('Factory Code: ', responseData[0].cFtyCode)
           console.log("Name: ", responseData[0].cFiratName)
           
           setFetchedData(responseData);
                       
         } else {
           
         }
       } catch (error) {
         
         console.error('Error fetching data:', error);
       }
   };

   useEffect(() => {
     fetchPendingMembers();
     //console.log(changedFirstName) 
   }); 

   const fetchMemberToModal = async(memberId) => {     
        
    try{
        
        const responseMember = await axios.post(
            "http://localhost:8081/api/v1/member",{
              memberID: memberId
                
            }
        );
        console.log(responseMember.data)
        setSelectedUser(responseMember.data)
        //
        //console.log(selectedUser.recordset[0].cFtyCode)
        console.log("from selected user: ", selectedUser[0].MemverOk)
        console.log("from selected user: ", selectedUser[0].nMemberID)
        console.log("from selected user: ", selectedUser[0])
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

  const [changedDepId, setChangedDepId] = useState()
  const handleChangedDepId = (newDepId) => {
    setChangedDepId(newDepId)
  }

  const [changedCompanyMail, setChangedCompanyMail] = useState()
  const handleChangedCompanyMail =(newCompanyMail) => {
    setChangedCompanyMail(newCompanyMail)
  }

  const [changedRemarks, setChangedRemarks] = useState()
  const handleChangedRemarks = (newRemarks) => {
    setChangedRemarks(newRemarks)
  }

  const acceptMember = async() => {  
    
    try{                   
        const responseMember = await axios.post(
            "http://localhost:8081/api/v1/registration/confirmRegistration",{
              memberID: selectedUser[0].nMemberID.toString(),   
              ftyCode: selectedUser[0].cFtyCode,
              epf: selectedUser[0].cEPF,
              libCode: selectedUser[0].cLibCode,
              firstName: selectedUser[0].cFiratName,
              lastName: selectedUser[0].cLastName,
              commonName: selectedUser[0].cCommonName,
              depId: selectedUser[0].nDepID.toString(),
              
              designation: selectedUser[0].cDesignation,
              address1: selectedUser[0].cAddress1,
              address2: selectedUser[0].cAddress2,
              city: selectedUser[0].cCity,
              permenantAddress: selectedUser[0].cPermanentAddress,
              companyEmail: selectedUser[0].cEmailCompany,
              privateEmail: selectedUser[0].cMailPrivate,
              mobileNo: selectedUser[0].cMobileNo,
              landNo: selectedUser[0].cLandPhone,
              phoneExtention: selectedUser[0].cPhoneExtenton,
              remarks: selectedUser[0].cRemarks,
              userName: selectedUser[0].cCommonName,
              
                
            }
        ); 
        
        if(responseMember.status === 200){
          handleSuccessOpen();
        } 
              
              
    }catch(error){

    }
    
  }



  return (
    <Grid item xs={12}>
          <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Common Name</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Requested On</TableCell>
              <TableCell>View</TableCell>
              
              <TableCell>Reject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchedData.map(row => (
              <TableRow hover key={row.nMemberID} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.cFiratName}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.cLastName}</TableCell>
                <TableCell>{row.cCommonName}</TableCell>
                <TableCell>{row.cDesignation}</TableCell>
                <TableCell>{row.dEnterDate}</TableCell>
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
        

        <Box sx={style} style={{ display: 'flex' }}>
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '999' }}>
            
            <Button variant="contained" color="success" size="small" onClick={() => acceptMember()}>
                                            Accept
                                          </Button>
          </div>
          <div style={{ flex: '1', marginRight: '20px' }}>

            <p>First name:</p>          
            <p><b>{selectedUser[0]?.cFiratName}</b></p>

            <p>Last name:</p>
            <p><b>{selectedUser[0]?.cLastName}</b></p>
            

            <p>Membwer ID:</p>
            <p><b>{selectedUser[0]?.nMemberID}</b></p>

            <p>Factory Code:</p>
            <input value={changedFactoryCode || selectedUser[0]?.cFtyCode} onChange={(e) => handleChangedFactoryCode(e.target.value)} />

            <p>Department ID:</p>
            <input value={changedDepId || selectedUser[0]?.nDepID} onChange={(e) => handleChangedDepId(e.target.value)} />

            <p>Designation:</p>           
            <p><b>{selectedUser[0]?.cDesignation}</b></p>

            <p>Address:</p>
            <p><b>{selectedUser[0]?.cPermanentAddress}</b></p>

            <p>Mobile:</p>
            <p><b>{selectedUser[0]?.cMobileNo}</b></p>

            <p>Lad line:</p>          
            <p><b>{selectedUser[0]?.cLandPhone}</b></p>

            <p>Extention:</p>          
            <p><b>{selectedUser[0]?.cLandPhone}</b></p>

            <p>Company mail:</p>
            <input value={changedCompanyMail || selectedUser[0]?.cEmailCompany} onChange={(e) => handleChangedCompanyMail(e.target.value)} />

            <p>PVT mmail:</p>
            <p><b>{selectedUser[0]?.cMailPrivate}</b></p>

            <p>Remanrks:</p>
            <input value={changedRemarks || selectedUser[0]?.cRemarks} onChange={(e) => handleChangedRemarks(e.target.value)} />

            <p>Requested On:</p>
            <p><b>{selectedUser[0]?.dEnterDate}</b></p>

            
          </div>

          

          
        </Box>
      </Modals>
      )}

{successOpen && (
      <Modal
  open={successOpen}
  onClose={handleSuccessClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Member accepted successfuly!
    </Typography>
    <hr style={{ margin: '16px 0', border: 0, borderTop: '1px solid #ccc' }} />
    
    
    <Button
      variant="contained"
      style={{ backgroundColor: '#4CAF50', borderRadius: 8, margin: '0px 0px 0px 116px' }}
      onClick={handleSuccessClose}
    >
      OK
    </Button>
  </Box>
</Modal>
    )}




    </Card>
        </Grid>
  )
}

export default PendingMembers
