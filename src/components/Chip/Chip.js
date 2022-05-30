import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper, Container, Grow, Chip } from '@mui/material';




const ChipMaker = () => {

    const classes = useStyles()
    const [tags, setTags] = useState([])
    const [current, setCurrent] = useState('')

    //const handleDelete = () => {
        

   // }

    const handleDelete = (tagIndex) => {
        setTags(tags.filter((tag, index) => index !== tagIndex))
        
      };


  


    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
         setTags([...tags, current])
          setCurrent('')
          return
        }
       
       }

       console.log(current)
       console.log(tags)

  return <div className={classes.container}>


      
      
      <div>{tags.map((tag, index) => (
          <Chip
          key={index}
          label={tag}
          //onDelete={handleDelete}
          onDelete={() => handleDelete(index)}
         
          />
      ))}</div>
      <TextField id="standard-basic" value={current} onKeyDown={handleKeyPress} onChange={(e)=> setCurrent(e.target.value)} variant="standard"  />
      <Button variant="contained" color="primary">Search</Button>

      
      
      </div>;
};

export default ChipMaker;
