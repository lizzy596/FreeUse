import { makeStyles } from '@mui/styles';


export default makeStyles((theme) => ({

    input: {
        background: "rgb(255, 255, 255)"
      },
    appBar: {
     
      margin: '30px 0px 30px 0px',
      height: '120px',
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        margin: '60px 0px',
        width: '100%'
      },
      //alignItems: 'center',
      //justifyContent: 'center',
      length: '800px',
     
      //padding: '10px 50px',
    },
    notice: {
        color: 'red',
    },

    
  
     
   

    searchInputField: {
        width: '500px',
        padding: '30px 0',
        border: '1px solid red'
        
    },
    searchInputField2: {
        width: '400px',
        borderBottom: '4px solid black'
        
       
    },
    searchOptions: {
        width: '180px',
        //border: '4px solid black',
        margin: '0px 15px',
        alignSelf: 'flexStart',
        //background: "rgb(255, 255, 255)",
        [theme.breakpoints.down('sm')]: {
            display: 'none'
          },
    },
    searchInputField3: {
        width: '400px',
        borderBottom: '4px solid black'
        
       
    },
   searchButton: {
       //width: '120px',
       width: '180px',
       marginLeft: '15px',
       marginRight: '15px',
       padding: '15px',
       fontSize: '1rem'
      
   },
   searchBar: {
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       height: '120px',
       
   },
   tagContainer: {
       display: 'flex',
       flexDirection: 'column',
       margin: 0,
       padding: 0,
      
   },
   optionLabel: {
       fontWeight: 'bold',
       
   },

   select: {
       //border: '2px solid red'
   },

   menuItem: {
       border: 'none',
       fontWeight: 'bold',
   }
 

   
    
  }));