import React from "react";
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Input, Typography } from '@material-ui/core';
import { styled } from "@material-ui/core";
import { Stack } from "@mui/material";
import './dropdown.css';
import './imageUpload.css';
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";


const Image = styled('img')({

    width:'200px',
    height:'auto',
    objectFit:'cover',
    border:'none',
    borderRadius:'10px'

})

const commonStyles = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100wh',
    height:'100vh'

  };

function CreateIssues(){

    const [image, setImage] = useState(null);
    const [issueType, setIssueType] = useState('');
    const [issueDescription, setIssueDescription] = useState('');

    const [modalDeleteShow, setModalDeleteShow] = React.useState(false);

    const navigate = useNavigate();


  ///////////////////////////////////////////////////////////////////////////////////

  const [province, setProvince] = useState('default');
  const [district, setdistrict] = useState('default');
  

  useEffect(() => {
    console.log(province)
    console.log(district)
    console.log(issueType)
  })

  const handleSelectionChange1 = (event) => {
    setProvince(event.target.value);
    
  };

  const handleSelectionChange2 = (event) => {
    setdistrict(event.target.value);
    
  };


  //////////////////////////////////////////////////////////////////////////////////////

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertToBase64(file);
    setImage(base64)
  }

  function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
  ////////////////////////////////////////////////////////////////////////////////////

  async function handleButtonSubmit(e){

    console.log(issueType)
    console.log(issueDescription)
    console.log(image)

    await axios.post('http://localhost:7000/api/issue/', {
      title: issueType,
      description: issueDescription,
      proof: image,
      province:province,
      district:district

  })

  setModalDeleteShow(false);

  navigate("/create-issues")


  }

  function DeleteModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Accept Community
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Event created successfully</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ marginRight: "20px" }}
            variant="danger"
            onClick={handleButtonSubmit}
            
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

    return(

<Box sx={commonStyles} >
  
  
  <Stack spacing={3} direction='column' sx={{justifyContent:'center',alignItems:'center', backgroundColor: '#a2c6eb', width:'50%', borderRadius: 10}}>
  <Typography variant="h3">Upload an issue</Typography>
        
      <TextField id="outlined-basic" label="Type of issue" variant="outlined" sx={{width:'80%', backgroundColor: '#fafafa', borderRadius: 2}}
      value={issueType} onChange={(e) => setIssueType(e.target.value)}/>
      

        <TextField fullWidth label="Tell us your problem here:" id="fullWidth"  multiline sx={{width:'80%', backgroundColor: '#fafafa', borderRadius: 2}}
        value={issueDescription} onChange={(e) => setIssueDescription(e.target.value)}/>

      {/*  <Input type="file" hidden onChange={handleImageUpload} />
    
    {image && <Image src={URL.createObjectURL(image)} alt="Uploaded Image" />}  */}

      Please upload any proof:
        <input
          id="img-upload"
          type="file"
          name="myFile"
          lable="Image"
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
          style={{ display: "block" }}
          sx={{ gridColumn: "span 1" }}
         />


       <select value={province} onChange={handleSelectionChange1} >
      <option value="default">Select province</option>
      <option value="Central">Central</option>
      <option value="North Central">North Central</option>
      <option value="Eastern">Eastern</option>
      <option value="North Western">North Western</option>
      <option value="Southern">Southern</option>
      <option value="Uva">Uva</option>
      <option value="Sabaragamuwa">Sabaragamuwa</option>
      <option value="Western">Western</option>
    </select>

    <select value={district} onChange={handleSelectionChange2}>
      <option value="default">Select district</option>
      <option value="Kandy">Kandy</option>
      <option value="Matale">Matale</option>
      <option value="Nuwara Eliya">Nuwara Eliya</option>
      <option value="Anuradhapura">Anuradhapura</option>
      <option value="Polonnaruwa">Polonnaruwa</option>
      <option value="Jaffna">Jaffna</option>
      <option value="Kilinochchi">Kilinochchi</option>
      <option value="Ampara">Ampara</option>
      <option value="Trincomalee">Trincomalee</option>
      <option value="Kurunagala">Kurunagala</option>
      <option value="Galle">Galle</option>
      <option value="Hambanthota">Hambanthota</option>
      <option value="Badulla">Badulla</option>
      <option value="Rathnapura">Rathnapura</option>
      <option value="Colombo">Colombo</option>
      <option value="Gampaha">Gampaha</option>
    </select>

    
    <Button variant="contained" style={{ backgroundColor: 'green' }} onClick={() => setModalDeleteShow(true)} disabled={!issueType || !issueDescription || !image || province === 'default' || district ==='default'}>PLACE ISSUE</Button>

    <DeleteModal
        show={modalDeleteShow}
        onHide={() => setModalDeleteShow(false)}
      />
      
</Stack>  


</Box>
 


    
    )
}

export default CreateIssues;