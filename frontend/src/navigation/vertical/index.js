// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { useEffect, useState } from 'react'
import Icon from '@mdi/react';
import { mdiBookMultiple } from '@mdi/js';
import BookIcon from 'mdi-material-ui/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const navigation = (role) => {

  
  
  const adminLinks = [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
  
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Request Membership',
      icon: AccountPlusOutline,
      path: '/registrationForm',
      openInNewTab: true
    },
    {
      title: 'Books',
      icon: LibraryBooksIcon,
      path: '/listBooks'
    },
  ];

  const commonLinks = [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Request Membership',
      icon: AccountPlusOutline,
      path: '/registrationForm',
      openInNewTab: true
    },
  ];

  const memLinks = [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Books',
      icon: LibraryBooksIcon,
      path: '/listBooks'
    },
    
    
    
  ];

  const supperLinks = [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Books',
      icon: LibraryBooksIcon,
      path: '/listBooks'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    },
    {
      title: 'Request Membership',
      icon: AccountPlusOutline,
      path: '/registrationForm',
      openInNewTab: true
    },
  ]

  
    //const userr = typeof window !== 'undefined' ? localStorage.getItem('userr') : null;
    //const userr = "MEM"
    const [user, setUser] = useState(null);
    useEffect(() => {
      const storedUser = localStorage.getItem('role');
      if (storedUser) {
         setUser(storedUser);
         console.log("kkkkkkk",user)
      }
     }, []);
     
  

  //const links = userr === 'ADMIN' ? [...commonLinks, ...adminLinks] : [...commonLinks, ...memLinks];
  let links = null;

  console.log(user)

  if(user === "MEM"){
    links = memLinks
    
  }else if (user === "ADM"){
    links = adminLinks
    
  }else if(user === "SUP"){
    links = supperLinks
  }
  else{
    links = commonLinks
  }

  return links;

  

}

export default navigation
