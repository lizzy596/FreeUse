import { makeStyles } from '@mui/styles';






export default makeStyles((theme) => ({
    appBar: {
     // marginLeft: '15px',
      //marginRight: '15px',
      //marginBottom: '50px',
      height: '150px',   
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        //flexWrap: 'wrap',
        //flexDirection: 'column',
      },
      
      //padding: '10px 50px',
    },
   /* logo: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '50px',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0px',
        
      },
    
      
      
    },*/

    logo2: {
      //backgroundColor: theme.palette.error.light,
      //display: 'flex',
      height: '150px',
      width: '350px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      
      //width: '400px',
      
      //width: '100%',
     // justifyContent: 'center',
     // alignItems: 'center',

     [theme.breakpoints.down('sm')]: {
      //justifyContent: 'space-between',
      width: '100%',
      height:'150px',
      //alignItems: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      //marginLeft: '20px'

      
      
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      //marginLeft: '20px'

     

      //display: 'none'
      
    },

    },


    /*image: {
      width: '350px',
      height: '300px',
      display: 'block',
      marginTop: '80px',
      marginBottom: '0px',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '0px',
    },  */


    image: {
      width: '250px',
      height: '100px',
     // display: 'block',
      //marginTop: '80px',
      //marginBottom: '0px',
      //marginLeft: 'auto',
     // marginRight: 'auto',
      padding: '0px',
      marginTop: '10px',

      [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '40px',
        //marginLeft: '5px',
        marginTop: '15px',
        
        
      },
      [theme.breakpoints.down('md')]: {

        width: '200px',
        height: '80px',
        marginLeft: '25px',

        //display: 'none'
        
      },
    },  


    text1: {
      //display: 'none',
      marginTop: '10px',

      [theme.breakpoints.down('sm')]: {

        //marginTop: '5px',
       //marginBottom: '25px',
       display: 'none'
        
        
      },
      [theme.breakpoints.down('md')]: {

        //marginTop: '5px',
        marginBottom: '25px',
        marginLeft: '25px',

        
        
      },
      //marginBottom: '10px'
    },





    logoText: {
      display: 'flex',
      alignSelf: 'center',
      justifySelf: 'center',
    },

    text: {

      //backgroundColor: theme.palette.info.main,
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'flex-end',
      marginBottom: '10px',
      //alignItems: 'flex-end',

      [theme.breakpoints.down('sm')]: {
        display: 'none',
        
      },
      [theme.breakpoints.down('md')]: {

        display: 'none'
        
      },
    },

    mobileButton: {
      display: 'none',

      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        marginBottom: '10px',
        
        
      },
      [theme.breakpoints.down('md')]: {

        display: 'flex',
        marginBottom: '10px',
        
      },
    },





  





    /*buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '240px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
        
      },
    }, */

    welcome: {
     /* display: 'flex',
      flexDirection: 'column',
      alignSelf: 'flex-end', */
      
      position: 'fixed',
      right: '50px',
      top: '10px',
      
      [theme.breakpoints.down('sm')]: {
        display: 'none',
        
      },
      [theme.breakpoints.down('md')]: {
        display: 'none',
        
      },
    
    },


    buttons1: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '340px',
      //backgroundColor: theme.palette.success.light,
      marginRight: '40px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        marginRight: '10px',
        marginLeft: '40px',
        //backgroundColor: theme.palette.warning.light,
     

        
      },

      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        marginRight: '0px',
        marginLeft: '10px',
       //backgroundColor: theme.palette.secondary.light,
        
      },
    },

    signIn: {

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '340px',

      /*display: 'flex',
      justifyContent: 'center',
      marginRight: '50px',*/
      backgroundColor: theme.palette.warning.light,

      [theme.breakpoints.down('sm')]: {
       
        //width: '50%',
        //marginRight: '10px',
        //marginLeft: '10px',
        height: '100%',
        backgroundColor: theme.palette.warning.light,
        
      },


      [theme.breakpoints.down('sm')]: {
       
        //width: '50%',
        //marginRight: '10px',
        //marginLeft: '10px',
        backgroundColor: theme.palette.info.main,
        height: '100%',
        
      },

    },


    signInButton: {

      height: '50px',
      width: '100%',
      alignSelf: 'center',
      fontSize: '20px',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '50px',
        margin: '5px 0',

        
        //fontSize: '30px'
        
      },

      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '50px',
        margin: '5px 0',
        //fontSize: '30px'
        
      },



  

      

    },

  
    logout: {
      display: 'flex',
      flexDirection: 'column',
    },
    logoLink: {
      textDecoration: 'none',
      color: 'white'
    },


    button : {
      height: '50px',
      width: '150px',
      alignSelf: 'center',
      fontSize: '20px',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
        height: '50%',
        margin: '15px 0',

        
        fontSize: '30px'
        
      },

      [theme.breakpoints.down('md')]: {
        width: '80%',
        height: '50%',
        margin: '15px 0',
        fontSize: '30px'
        
      },

    },

    mainLogout : {
      height: '50px',
      width: '150px',
      alignSelf: 'center',
      fontSize: '20px',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
        
      },

      [theme.breakpoints.down('md')]: {
       display: 'none'
      },

    },




    
    
    
    
    
    contents: {
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
      [theme.breakpoints.down('sm')]: {
        //flexDirection: 'column',
        //alignContent: 'center'
      },

    },
    buttonLink: {
      alignSelf: 'center',
      textDecoration: 'none'
    },
    userName: {
      marginBottom: '3px'

    }

   
    
  }));