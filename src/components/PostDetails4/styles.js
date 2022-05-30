import { makeStyles } from '@mui/styles';




export default makeStyles((theme) => ({
    paper: {
     marginTop: '200px',
     marginBottom: '150px',
     
     padding: '20px',
    
    },
    desc: {
        padding: '20px 20px 20px 20px',
    },
    title: {
        padding: '5px 20px 5px 20px',
    },
    alert: {
        paddingTop: '150px'
    },
    mobileImage: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
            //alignItems: 'center'
    },
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            
            width: '100%',
            //alignItems: 'center'
    },
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: '350px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center'
          },

    },
    title1: {
        display: 'flex',
        flexDirection: 'column',
    },
    title2: {

    },
    details: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '100%',
            //alignItems: 'center'
    }
},
    contact: {
        padding: '5px 20px 5px 20px',
      
    },
    image: {
       
        maxWidth: '100%',
        maxHeight: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
            //alignItems: 'center'
    },
    },
    buttons: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '100%',
            //alignItems: 'center'
    },
    },

    backButton2: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            fontSize: '25px',
            width: '100%',
            margin: '5px 5px'
            
        
            //alignItems: 'center'
    },

    },
    backButton: {
        width: '50%',
        fontSize: '25px',
        marginTop: '35px',
        paddingTop: '20px',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            fontSize: '25px',
            width: '100%',
            margin: '5px 5px'
        
            //alignItems: 'center'
    },

   
    },

    scrollButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            fontSize: '25px',
            width: '100%',
            margin: '5px 5px'
        
            //alignItems: 'center'
    },
    },




    notFound: {
        fontSize: '25px',
        marginTop: '35px',
        paddingTop: '20px',

    },
    button: {
        margin: '50px 20px',
        fontSize: '25px',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 5px',
            width: '100%',
            //alignItems: 'center'
    }
    },

    buttonDelete: {
        margin: '50px 20px',
        backgroundColor: theme.palette.error.dark,
        fontSize: '25px',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 5px',
            width: '100%',
            //alignItems: 'center'
    }
    },
    bold: {
        fontWeight: 'bold',

    },
    loadingPaper: {
        paddingTop: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.main
    },
    suggested: {
        padding: '5px 20px 5px 20px',
        [theme.breakpoints.down('sm')]: {
           textAlign: 'center',
            //alignItems: 'center'
    },
    },
    suggestedPost: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        //width: '100%',
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px',
        justifyItems: 'center',
        [theme.breakpoints.down('sm')]: {
            
            spacing: '0',
            //alignItems: 'center'
    }
},
    gridItem: {
        margin: '5px 10px'
    },
    card: {
        margin: '10px 0'
    }
  
     
    
    
   

   
    
  }));