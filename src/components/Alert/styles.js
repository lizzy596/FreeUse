import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

    paper: {
        marginTop: '200px',
        marginBottom: '20px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.main

       
       },
    alertBox: {
        width: '50%',
        alignSelf: 'center',
    },
    paper2: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.main

    },
    button: {
        fontSize: '20px',
      
    },
    link: {
        textDecoration: 'none',
    }
    
 
}));