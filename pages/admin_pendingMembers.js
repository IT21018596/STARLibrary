import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Modals from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Switch, FormControlLabel, IconButton} from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { blue } from "@mui/material/colors";






const AcceptRejectPendingMembers = () => {

    const [darkMode, setDarkMode] = useState(false);

    const [fetchedData, setFetchedData] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const [open, setOpen] = React.useState(false);
    

    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const fetchPendingMembers = async() => {
        
        try {
             const response = await axios.get(`http://localhost:8081/api/v1/registration/getPendingMembers`);
         
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
        // console.log(fetchedData) 
       },[]); 

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
            //console.log("HIIII", responseMember.data[0].nMemberID)

            handleOpen();
        }catch(error){

        }
      }
      
       

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

      const getTableStyle = () => {
        // Define your dark mode styles here
        return darkMode
          ? {
              backgroundColor: '#074585', // Dark blue background
              color: '#ffffff', // White text
            }
          : {};
      };

      /////////////////////////////////////////////////////////////////////////////////////////////////////////
      /*const [editMode, setEditMode] = useState(false);
      const [editedData, setEditedData] = useState({});

      const toggleEditMode = () => {
        console.log("button hit")
        setEditMode(!editMode);
      };
    
      const handleEditChange = (field, value) => {
        setEditedData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };
      const handleEditChangeFTY = (field, value) => {
        setEditedData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };*/

      const [editedData, setEditedData] = useState({});

      const handleEditChange = (field, value) => {
        setEditedData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };

      const acceptMember = async() => {     
        console.log("Hittttttttttttttttttttttttttttt", FtyCode)
        try{        
            
            const responseMember = await axios.post(
                "http://localhost:8081/api/v1/registration/confirmRegistration",{
                  memberID: memberID,
                  
                  ftyCode: FtyCode,
                  epf: epf,
                  libCode: libCode,
                  firstName: firstName,
                  lastName: lastName,
                  commonName: commonName,
                  depId: depId,
                  section: section,
                  designation: designation,
                  address1: address1,
                  address2: address2,
                  city: city,
                  permenantAddress: permenantAddress,
                  companyEmail: companyEmail,
                  privateEmail: privateEmail,
                  mobileNo: mobileNo,
                  landNo: landNo,
                  phoneExtention: phoneExtention,
                  remarks: remarks,
                  userName: userName,
                  message: message
                    
                }
            );
            
            
            
        }catch(error){

        }
      }

      

      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        maxHeight: "80vh", // Set a maximum height for the modal
        overflow: "auto", // Enable scrolling when content exceeds the maximum height
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };

    
    
    return (
        <Layout>
      <PageBanner pageName={'Pending Members'} />
      <section className="checkout-area pt-130 rpt-95 pb-100 rpb-70">
        <div className="container">
          <div className="col-lg-12">
            <div>
              
            <FormControlLabel
        control={<Switch darkMode={true} onChange={toggleDarkMode} />}
        label="Toggle Button"
      />
            </div>

            {fetchedData.length > 0 ? (
            <TableContainer component={Paper} sx={getTableStyle()}>
              
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: '#b3b1b1'  }}>
                    <TableCell style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>First Name</TableCell>
                    <TableCell  style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Last Name</TableCell>
                    <TableCell  style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Common Name</TableCell>
                    <TableCell  style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Designation</TableCell>
                    <TableCell  style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Requested On</TableCell>
                    <TableCell  style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>View</TableCell>
                    <TableCell  style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Accept</TableCell>
                    <TableCell  style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Reject</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                {fetchedData.map((row) => (
            <TableRow
              key={row.nMemberID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.cFiratName}
              </TableCell>
              <TableCell >{row.cLastName}</TableCell>
              <TableCell >{row.cCommonName}</TableCell>
              <TableCell >{row.cDesignation}</TableCell>
              <TableCell >{row.dEnterDate}</TableCell>

              <TableCell ><Button color="secondary" onClick={() => fetchMemberToModal(row.nMemberID)}>View</Button>
              </TableCell>

              <TableCell ><Button variant="contained" color="success" size="small">
                                            Success
                                          </Button>
              </TableCell>

              <TableCell ><IconButton aria-label="delete">
                                  <DeleteIcon style={{color: 'red'}}/>
                                </IconButton>
              </TableCell>


            </TableRow>
          ))}
                </TableBody>
              </Table>
            </TableContainer>
            ) : (
              <h3>Fetching pending members. Please wait...  <CircularProgress size={30} color="inherit" /></h3>
            )}

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
            <input value={editedData.cFiratName || selectedUser[0]?.cFiratName} onChange={(e) => handleEditChange('cFiratName', e.target.value)} />

            <p>Last name:</p>
            <input value={editedData.cLastName || selectedUser[0]?.cLastName} onChange={(e) => handleEditChange('cLastName', e.target.value)} />

            

            <p>Membwer ID:</p>
            <p><b>{selectedUser[0]?.nMemberID}</b></p>

            <p>Factory Code:</p>
            <input value={editedData.cFtyCode || selectedUser[0]?.cFtyCode} onChange={(e) => handleEditChange('cFtyCode', e.target.value)} />

            <p>Department ID:</p>
            <input value={editedData.nDepID || selectedUser[0]?.nDepID} onChange={(e) => handleEditChange('nDepID', e.target.value)} />

            <p>Designation:</p>
            <input value={editedData.cDesignation || selectedUser[0]?.cDesignation} onChange={(e) => handleEditChange('cDesignation', e.target.value)} />

            <p>Address:</p>
            <p><b>{selectedUser[0]?.cPermanentAddress}</b></p>

            <p>Mobile:</p>
            <p><b>{selectedUser[0]?.cMobileNo}</b></p>

            <p>Lad line:</p>
            <input value={editedData.cLandPhone || selectedUser[0]?.cLandPhone} onChange={(e) => handleEditChange('cLandPhone', e.target.value)} />

            <p>Extention:</p>
            <input value={editedData.cPhoneExtenton || selectedUser[0]?.cPhoneExtenton} onChange={(e) => handleEditChange('cPhoneExtenton', e.target.value)} />

            <p>Company mail:</p>
            <input value={editedData.cEmailCompany || selectedUser[0]?.cEmailCompany} onChange={(e) => handleEditChange('cEmailCompany', e.target.value)} />

            <p>PVT mmail:</p>
            <p><b>{selectedUser[0]?.cMailPrivate}</b></p>

            <p>Remanrks:</p>
            <input value={editedData.cRemarks || selectedUser[0]?.cRemarks} onChange={(e) => handleEditChange('cRemarks', e.target.value)} />

            <p>Requested On:</p>
            <p><b>{selectedUser[0]?.dEnterDate}</b></p>

            
          </div>

          

          
        </Box>
      </Modals>
      )}

          </div>
        </div>
      </section>
    </Layout>
    )
}
export default AcceptRejectPendingMembers;