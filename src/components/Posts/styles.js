import { makeStyles } from '@mui/styles';


export default makeStyles((theme) => ({
    gridContainer: {
        width: '100%',
        
        marginTop: '50px',
        
        //backgroundColor: theme.palette.error.dark,
        marginBottom: '50px',
        [theme.breakpoints.down('sm')]: {
            
          },

   
     
    
    },
    search: {
        display: 'flex',
        flexDirection: 'column',
    },
    bold: {
        fontWeight: 'bold',

    }
  

   
    
  }));