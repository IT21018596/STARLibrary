// ** React Imports
import React, { useState, forwardRef, useEffect } from 'react';

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'

import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { Input, Autocomplete, Modal, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useUser } from 'src/@core/context/UserContext'

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

const FormLayoutsSeparator = () => {


  const router = useRouter();
  const userr = typeof window !== 'undefined' ? localStorage.getItem('userr') : null;  

  const { getWithExpiry } = useUser();
  const damn = getWithExpiry()
  useEffect(() => {
    
    if (!damn) {
      router.push('/pages/login');
    }
  }, [damn]);
  // ** States

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

  //language
  const [language, setLanguage] = useState([])
  //book name
  const [bookName, setBookName] = useState("")

  //editionNo
  const [editionNo, setEditionNo] = useState("")
  //edition
  const [edition, setEdition] = useState("")
  //isbn
  const [isbn, setIsbn] = useState("")
  //translator
  const [translator, setTranslator] = useState("")
  //remarks
  const [remarks, setRemarks] = useState("")
  //front cover
  const [frontCover, setFrontCover] = useState('')
  //back cover
  const [backCover, setBackCover] = useState('')
  //contnt
  const [content, setContent] = useState('')


    //card state
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }


  //Category codes
  const [categoryCodes, setcategoryCodes] = useState([]);
  const [selectedCatCode, setSelectedCatCode] = useState('');

  const catCodes = async() => {
    try{
      const response = await axios.get("http://localhost:8081/api/v1/books/getAllBookCatCodes")

        const codesArray = response.data.map(item => item.CatCodeAndName);
        setcategoryCodes(codesArray);
      

    }catch(error){
      console.log(error)
    }
    
  }

  useEffect(() => {
    catCodes()
  }, [])

  //Publisher
  const [publisher, setPublisher] = useState([]);
  const [selectedPublisher, setSelectedPublisher] = useState('');

  const publishers = async() => {
    try{
      const response = await axios.get("http://localhost:8081/api/v1/books/getAllPublishers")

      
        const publisherArray = response.data.map(item => item.pubIdAndName);
        setPublisher(publisherArray);
      

    }catch(error){
      console.log(error)
    }
    
  }

  useEffect(() => {
    publishers()
  }, [])

  //Authors
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState('');

  const getAuthors = async() => {
    try{
      const response = await axios.get("http://localhost:8081/api/v1/books/getAllAuthors")

      
        const authorsArray = response.data.map(item => item.cAuthorsName);
        setAuthors(authorsArray);
      

    }catch(error){
      console.log(error)
    }
    
  }

  useEffect(() => {
    getAuthors()
  }, [])


  const getAuthorIdByAuthorName = async() => {
    const enterBy= "HRD"
    console.log("this is the authoerrrrrrrrr:", selectedAuthors)
    try{
      const response = await axios.get(`http://localhost:8081/api/v1/books/getAuthorIdByAuthorName/${selectedAuthors}/${enterBy}`)

      //setAuthorId(response.data.nAuthorID)
      //console.log("This is the author id: ", response.data.nAuthorID)
      //console.log("This is the author idddddddd: ", authorId)

      return response.data.nAuthorID

    }catch(error){
      console.log(error)
    }
  }

  //Insert book
  const insertBook = async() => {
    
     //console.log("imaggee", selectedOriginalFile)
    
    if(bookName === ''){
      handleOpen();
      setMsg("Book Name field cannot be empty!")
    }else if(selectedCatCode === ''){
      handleOpen();
      setMsg("Category Code field cannot be empty!")
    }else if(selectedPublisher === ''){
      handleOpen();
      setMsg("Publisher field cannot be empty!")
    }else if(selectedAuthors === ''){
      handleOpen();
      setMsg("Author field cannot be empty!")
    }else if(editionNo === ''){
      handleOpen();
      setMsg("Edition No field cannot be empty!")
    }else if(edition === ''){
      handleOpen();
      setMsg("Edition field cannot be empty!")
    }else if(isbn === ''){
      handleOpen();
      setMsg("ISBN field cannot be empty!")
    }else if(language === ''){
      handleOpen();
      setMsg("Language field cannot be empty!")
    }else if(translator === ''){
      handleOpen();
      setMsg("Translator field cannot be empty!")
    }else if(frontCover === ''){
      handleOpen();
      setMsg("Front Cover field cannot be empty!")
    }else if(backCover === ''){
      handleOpen();
      setMsg("Back Cover field cannot be empty!")
    }else if(content === ''){
      handleOpen();
      setMsg("Content field cannot be empty!")
    }
    else{
      try{

        const authorID = await getAuthorIdByAuthorName();
        //console.log("authorID: ", authorID)

        const formData = new FormData();
        formData.append("catCode", selectedCatCode.substring(0, 2));
formData.append("pubId", selectedPublisher.substring(0, 1));
formData.append("authId", authorID);
formData.append("bookName", bookName);
formData.append("editionNo", editionNo);
formData.append("edition", edition);
formData.append("isbn", isbn);
formData.append("translator", translator);
formData.append("remarks", remarks);
formData.append("coverFront", frontCover);
formData.append("backCover", backCover);
formData.append("contentPage", content);
formData.append("translationOf", translator);
formData.append("enterBy", "HRD");
formData.append("file", selectedOriginalFile);

        const response = await axios.post("http://localhost:8081/api/v1/books/addNewBook",formData,
   
        {
          headers: { "Content-Type": "multipart/form-data"},
        })

        if(response.status === 200){
          handleSuccessOpen()
          
        }

      }catch(error){
        console.log(error)

        if(error.response){
          console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        console.log("Response headers:", error.response.headers);
          handleOpen();
          setMsg("Something went wrong. Please contact the developer.")
        }
        else if (error.request){
          handleOpen();
        setMsg("No response from the server. Please try again later.");
        }
        else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error message:", error.message);
  
          handleOpen();
          setMsg("An unexpected error occurred. Please try again later.");
      }
      }

    }
    
  }

  
 
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOriginalFile, setSelectedOriginalFile] = useState(null);

  const handleFileChange = async(e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedOriginalFile(file)
    const base64 = await convertToBase64(file);
    setSelectedFile(base64)

    
  };

  const convertToBase64 = (file) => {
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
  



  return (
    <Card>
      <CardHeader title='Fill up the details of your book' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>

            

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Book Name' placeholder='Yuganthaya' onChange={(e)=>setBookName(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
      
      <Autocomplete
        options={categoryCodes}
        value={selectedCatCode}
        onChange={(event, newValue) => setSelectedCatCode(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder=''
            label='Categoty Code'
            variant='outlined'
            onChange={(e)=>{setSelectedCatCode(e.target.value)}}
          />
        )}
      />
    </FormControl>
            </Grid>       

            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
      
      <Autocomplete
        options={publisher}
        value={selectedPublisher}
        onChange={(event, newValue) => setSelectedPublisher(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder=''
            label='Publisher'
            variant='outlined'
            onChange={(e)=>{setSelectedPublisher(e.target.value)}}
          />
        )}
      />
    </FormControl>
            </Grid>               
            
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
      
      <Autocomplete
        options={authors}
        value={selectedAuthors}
        onChange={(event, newValue) => setSelectedAuthors(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder=''
            label='Author'
            variant='outlined'
            onChange={(e)=>{setSelectedAuthors(e.target.value)}}
          />
        )}
      />
    </FormControl>
            </Grid>       

            



            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Edition No' placeholder='' onChange={(e) => setEditionNo(e.target.value)}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Edition' placeholder='' onChange={(e) => setEdition(e.target.value)}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='ISBN' placeholder='' onChange={(e) => setIsbn(e.target.value)}/>
            </Grid>

            

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
                <Select
                  multiple
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Tamil'>Tamil</MenuItem>
                  <MenuItem value='Portuguese'>Portuguese</MenuItem>
                  <MenuItem value='Italian'>Italian</MenuItem>
                  <MenuItem value='German'>German</MenuItem>
                  <MenuItem value='Arabic'>Arabic</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Translator' placeholder='' onChange={(e) => setTranslator(e.target.value)}/>
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Remarks' placeholder='' onChange={(e) => setRemarks(e.target.value)}/>
            </Grid>


          </Grid>

          <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>

        <Card>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='card navigation example'>
          <Tab value='1' label='Front Cover' />
          <Tab value='2' label='Back Cover' />
          <Tab value='3' label='Content' />
        </TabList>
        <CardContent>

        <TabPanel value='1' sx={{ p: 0, display: 'flex' }}>
        <div style={{ flex: 1 }}>
        <TextField fullWidth label='Front' placeholder='' multiline rows={4} style={{ width: '95%' }} onChange={(e) => setFrontCover(e.target.value)} value={frontCover}/>
          
        </div>
        <div>
          {/* Image uploading space */}
          <Input type='file' onChange={ handleFileChange}/>
          {selectedFile && (
        <div>
          <p>Selected Image:</p>
          <img
            src={selectedFile}
            alt='Selected Preview'
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
        </div>
      )}
        </div>
      </TabPanel>

      
      <TabPanel value='2' sx={{ p: 0, display: 'flex' }}>
        <div style={{ flex: 1 }}>
        <TextField fullWidth label='Back' placeholder='' multiline rows={4} style={{ width: '95%' }} onChange={(e) => setBackCover(e.target.value)} value={backCover}/>
          
        </div>
        
      </TabPanel>

      <TabPanel value='3' sx={{ p: 0, display: 'flex' }}>
        <div style={{ flex: 1 }}>
        <TextField fullWidth label='Content' placeholder='' multiline rows={4} style={{ width: '95%' }} onChange={(e) => setContent(e.target.value)} value={content}/>
          
        </div>
        
      </TabPanel>
        </CardContent>
      </TabContext>
    </Card>


          
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={insertBook}>
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
      New book added to the database successfully!
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

export default FormLayoutsSeparator
