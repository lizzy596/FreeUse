import { makeStyles } from '@mui/styles';


export default makeStyles((theme) => ({
    button : {
      fontSize: '30px',
      width: '100%',
     
    },

    location: {
      fontWeight: 'bold',
    },

    title: {
      height: '80px',

    },
    bold: {
      fontWeight: 'bold',

  },
  media: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
 

    card: {
      marginBottom: '40px',
      position: 'relative',
      marginLeft: '10px',
      marginRight: '10px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: '0px',
      marginRight: '0px',
        
      },
    },
    overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white',
    },
 

   tags: {
     height: '50px',
   }

   
    
  }));