import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import React, { useState, forwardRef, useEffect } from 'react';
import {IconButton} from '@mui/material';

//import DeleteIcon from '@material-ui/icons/Delete';

import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import MenuItem from '@mui/material/MenuItem'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import { useRouter } from 'next/router';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from 'axios'


const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
  })

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
  };


const RegistrationForm = () => {

  const userr = typeof window !== 'undefined' ? localStorage.getItem('userr') : null;
  const router = useRouter();

  useEffect(() => {
    // Check if the user is not authenticated, then redirect to the login page
    if (!userr) {
      console.log(userr)
      router.push('/pages/login');
    }
  }, [userr]);
  

    const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)

    const [values, setValues] = useState({
        password: '',
        password2: '',
        showPassword: false,
        showPassword2: false
      })

      
      // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  //Username/common
  const [username, setUserName] = useState("")
  const handleUsername = (uName) => {
    setUserName(uName)
  }
  //FirstName
  const [firstName, setFirstName] = useState("")
  const handleFirstName = (fName) => {
    setFirstName(fName)
  }
  //LastName
  const [lastName, setLastName] = useState("")
  const handleLastName = (lName) => {
    setLastName(lName)
  }
  //Address1
  const [address1, setAddreess1] = useState("")
  const handleAddress1 = (addr1) => {
    setAddreess1(addr1)
  }

  //Address2
  const [address2, setAddreess2] = useState("")
  const handleAddress2 = (addr2) => {
    setAddreess2(addr2)
  }
  //permanent
  const [pAddress, setPerAddress] = useState("")
  const handlePerAddress = (pAddres) => {
    setPerAddress(pAddres)
  }

  //city
  const [city, setCity] = useState("")
  const handleCity = (city) => {
    setCity(city)
  }
  //Birthday
  const [bDay, setBDay] = useState("")
  const handleBirthDay = (bday) => {
    setBDay(setBDay)
  }
  //Fty code
  const [ftyCode, setFtyCode] = useState("")
  const handleFtyCode = (ftyCode) => {
    setFtyCode(ftyCode)
  }
  //EPF
  const [epf, setEpf] = useState("")
  const handleEpf = (Epf) => {
    setEpf(Epf)
  }
  //Lib coed
  const [libCode, setLibCode] = useState("")
  const handleLibCode = (LIBCode) => {
    setLibCode(LIBCode)
  }
  //Department ID
  const [depId, setDepId] = useState("")
  const handleDepId = (depid) => {
    setDepId(depid)
  }
  //designation
  const [designation, setdesignation] = useState("")
  const handleDesignation = (desg) => {
    setdesignation(desg)
  }
  //company mail
  const [compMail, setCompMail] = useState("")
  const handleCompMail = (comMail) => {
    setCompMail(comMail)
  }
  //PVT mail
  const [pvtMail, setPvtMail] = useState("")
  const handlePvtMail = (pvtmail) => {
    setPvtMail(pvtmail)
  }
  //mobile
  const [mobile, setMobile] = useState("")
  const handleMobile = (mob) => {
    setMobile(mob)
  }
  //land line
  const [landLine, setLandLine] = useState("")
  const handleLandLine = (landline) => {
    setLandLine(landline)
  }
  //extention
  const [extention, setExtention] = useState("")
  const handleExtention = (ext) => {
    setExtention(ext)
  }

  //remarks
  const [remarks, setRemarks] = useState("")
  const handleRemarks = (rmrks) => {
    setRemarks(rmrks)
  }

  const [warningOpen, setWarningOpen] = React.useState(false);
  const handleOpen = () => setWarningOpen(true);
  const handleClose = () => setWarningOpen(false);
  const [Message, setMsg] = useState("")
  const [successOpen, setSuccessOpen] = React.useState(false);
  const handleSuccessOpen = () => setSuccessOpen(true);
  const handleSuccessClose = () => {
    setSuccessOpen(false);
    router.push('/')
  }
  
  

  const handleSubmit = async() => {
    if(username === ""){
      handleOpen();
      setMsg("Username field cannot be empty!")

    }else if(values.password === ""){
      handleOpen();
      setMsg("Password field cannot be empty!")
    }else if(values.password2 === ""){
      handleOpen();
      setMsg("Confirm Password field cannot be empty!")
    }else if(firstName === ""){
      handleOpen();
      setMsg("First Name field cannot be empty!")
    }else if(lastName === ""){
      handleOpen();
      setMsg("Last Name field cannot be empty!")
    }else if(ftyCode === ""){
      handleOpen();
      setMsg("Factory code field cannot be empty!")
    }else if(epf === ""){
      handleOpen();
      setMsg("EPF field cannot be empty!")
    }else if(depId === ""){
      handleOpen();
      setMsg("Department ID field cannot be empty!")
    }else if(designation === ""){
      handleOpen();
      setMsg("Designation field cannot be empty!")
    }else if(compMail === ""){
      handleOpen();
      setMsg("Company Mail field cannot be empty!")
    }else if(mobile === ""){
      handleOpen();
      setMsg("Mobile field cannot be empty!")
    } else if(extention === ""){
      handleOpen();
      setMsg("Extention field cannot be empty!")
    }else if (values.password !== values.password2){
      handleOpen();
      setMsg("Password does not mach!")
    }
    else{
      try{
      const response = await axios.post(
        "http://localhost:8081/api/v1/registration/",{
          ftyCode: ftyCode,
          epf: epf,
          libCode: libCode,
          firstName: firstName,
          lastName: lastName,
          commonName: username,
          depId: depId,
          designation: designation,
          address1: address1,
          address2: address2,
          city: city,
          permenantAddress: pAddress,
          companyEmail: compMail,
          privateEmail: pvtMail,
          mobileNo: mobile,
          landNo: landLine,
          phoneExtention: extention,
          remarks: remarks,
          password: values.password,
          enterBy: ""

        }
      )
      console.log(response)
      console.log(response.status)
      if(response.status === 200){
        handleSuccessOpen()
        
      }
    }catch(error){
      console.error(error);
      if (error.response) {
        // The request was made, but the server responded with a non-2xx status code
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        console.log("Response headers:", error.response.headers);

        if (error.response.status === 400) {
            // Handle specific error for duplicate key violation
            handleOpen();
            setMsg("Duplicate key violation. Member already exists.");
        } else {
            // Handle other errors
            handleOpen();
            setMsg("Something went wrong. Please contact the library admin.");
        }
    } else if (error.request) {
        // The request was made but no response was received
        console.log("Request data:", error.request);

        handleOpen();
        setMsg("No response from the server. Please try again later.");
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error message:", error.message);

        handleOpen();
        setMsg("An unexpected error occurred. Please try again later.");
    }
    }

    
      
    }

    //handleOpen();
      //setMsg("Your request successfully inserted. Admin will accept your request after a while!")
      
    
  }





  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  const handleMouseDownConfirmPassword = event => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }


  return (
    <Card>
      <CardHeader title='Fill up your details to get membership' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Account Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Username' placeholder='johnWick' onChange={(e) => (handleUsername(e.target.value))}/>
            </Grid>
            {/*<Grid item xs={12} sm={6}>
              <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' />
  </Grid>*/}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-separator-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='form-layouts-separator-password'
                  onChange={handlePasswordChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword} 
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-separator-password-2'>Confirm Password</InputLabel>
                <OutlinedInput
                  value={values.password2}
                  label='Confirm Password'
                  id='form-layouts-separator-password-2'
                  onChange={handleConfirmChange('password2')}
                  type={values.showPassword2 ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                      >
                        {values.showPassword2 ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Personal Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='First Name' placeholder='Sahan' onChange={(e) => handleFirstName(e.target.value)}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Last Name' placeholder='Thilakaratne' onChange={(e) => handleLastName(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Address 1'  onChange={(e) => handleAddress1(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Address 2'  onChange={(e) => handleAddress2(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='City'  onChange={(e) => handleCity(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Permanent Address'  onChange={(e) => handlePerAddress(e.target.value)}/>
            </Grid>

            {/*<Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Country</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
                </Grid>*/}
            
            {/*<Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
                <Select
                  multiple
                  value={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Spanish'>Spanish</MenuItem>
                  <MenuItem value='Portuguese'>Portuguese</MenuItem>
                  <MenuItem value='Italian'>Italian</MenuItem>
                  <MenuItem value='German'>German</MenuItem>
                  <MenuItem value='Arabic'>Arabic</MenuItem>
                </Select>
              </FormControl>
            </Grid>*/}
           <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Birthday' placeholder='12/12/2012' onChange={(e) => handleBirthDay(e.target.value)}/>
            </Grid>

            

            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                3. Other Info
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Factory Code</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={(event) => handleFtyCode(event.target.value)}
                >
                  <MenuItem value='SGL'>SGL STAR PLANT 1</MenuItem>
                  <MenuItem value='SGL'>SGL SP2-STAR PLANT 2</MenuItem>
                  <MenuItem value='SGI'>SGI SGI-KATUNAYAKE</MenuItem>
                  <MenuItem value='VTM'>VTM VTM-KOTHMALE</MenuItem>
                  <MenuItem value='ALA'>ALA ALAIRE</MenuItem>
                  <MenuItem value='BDD'>BDD STAR-BADDEGAMA</MenuItem>
                  <MenuItem value='KGG'>KGG STAR KOGGALA</MenuItem>
                  <MenuItem value='SFC'>SFC SFC-KADUWELA</MenuItem>
                  <MenuItem value='SJR'>SJR SAJERO</MenuItem>
                  <MenuItem value='VTE'>VTE VT ENTERPRISES</MenuItem>
                  <MenuItem value='SGG'>SGG STAR GROUP</MenuItem>
                  <MenuItem value='LLI'>LLI LEADING LADY</MenuItem>
                  
                  
                  <MenuItem value='SFG'>SFG SFC-GALLE</MenuItem>
                  <MenuItem value='KG2'>KG2 STAR KOGGALA 2</MenuItem>
                  <MenuItem value='BTA'>BTA STAR BUTTALA</MenuItem>
                  
                </Select>
              </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
              <TextField fullWidth label='EPF' placeholder='123' onChange={(e) => handleEpf(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Library Code</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={(e) => handleLibCode(e.target.value)}
                >
                  <MenuItem value='SGL'>STAR KATUNAYAKE</MenuItem>
                  <MenuItem value='BTA'>STAR BUTTALA</MenuItem>
                  <MenuItem value='KGG'>STAR KOGGALA 1</MenuItem>
                  <MenuItem value='KG2'>STAR KOGGALA 2</MenuItem>
                </Select>
              </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Department ID' placeholder='1' onChange={(e) => handleDepId(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Designation' placeholder='Executive' onChange={(e) => handleDesignation(e.target.value)}/>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                4. Contact
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Company Mail' placeholder='sahanp@star.lk' onChange={(e) => handleCompMail(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Private Mail' placeholder='johnDoe@gmail.com' onChange={(e) => handlePvtMail(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Mobile' placeholder='077XXXXXXX' onChange={(e) => handleMobile(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Land Line' placeholder='011XXXXXXXX' onChange={(e) => handleLandLine(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Extention' placeholder='' onChange={(e) => handleExtention(e.target.value)}/>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                5. More
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Remarks' placeholder='' onChange={(e) => handleRemarks(e.target.value)}/>
            </Grid>



          </Grid>

          
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={handleSubmit}>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>

      {warningOpen && (
      <Modal
  open={warningOpen}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Please check before submitting!
    </Typography>
    <hr style={{ margin: '16px 0', border: 0, borderTop: '1px solid #ccc' }} />
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {Message}
    </Typography>
    <hr style={{ margin: '16px 0', border: 0, borderTop: '1px solid #ccc' }} />
    <Button
      variant="contained"
      style={{ backgroundColor: '#e3121d', borderRadius: 8, margin: '0px 0px 0px 116px' }}
      onClick={handleClose}
    >
      OK
    </Button>
  </Box>
</Modal>
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
      Your request to join library sent successfully. Admin will add you to the system after reviewing you.
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

    
  )
}

export default RegistrationForm