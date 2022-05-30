import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

    contained: {
        paddingTop: '140px',
       backgroundColor: theme.palette.secondary.main,
        
        marginBottom: '30px',
       
        
        [theme.breakpoints.down('sm')]: {
         marginLeft: '0px',
         marginRight: '0px',
         alignItems: 'center'
        },
        
    },
    pagination: {
        borderRadius: 4,
        marginTop: '1rem',
        padding: '16px',
        marginBottom: '1rem',
      },
      ul: {
        justifyContent: 'space-around',
      },

      scrollButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignSelf: 'center',
            fontSize: '20px',
            width: '50%',
            margin: '25px auto'
        
            //alignItems: 'center'
    },
    },

    loadingPaper: {
      backgroundColor: theme.palette.secondary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '300px'
    }
 
}));