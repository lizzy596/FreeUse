import { AppBar, Button, FormControl, TextField, InputLabel, Select, MenuItem, Container, Chip } from '@mui/material';
import React, { useState } from 'react';
import useStyles from './styles'
import ChipInput from 'material-ui-chip-input';

const SearchBar2 = ({ handleSearch }) => {

    const classes = useStyles()

    


const [searchOption, setSearchOption] = useState("title")
const [search, setSearch] =useState('')
const [tags, setTags ] = useState([])
const [current, setCurrent] = useState('')
const [count, setCount] = useState(0)



const handleChange =  (e) => {
    setSearchOption(e.target.value)

}

const handleKeyPress = (e) => {
 if (e.keyCode === 13 && searchOption === 'title') {
   searchPosts()
 } else if (e.keyCode === 13 && searchOption === 'tags' && count <= 4) {
     setCount(count + 1)
     setTags([...tags, current])
    setCurrent('')
    return
 } else {
     return
 }

}

const handleDelete = (tagIndex) => {
    setTags(tags.filter((tag, index) => index !== tagIndex))
    
  };


const searchPosts = () => {

  if(searchOption === 'title') {
    return handleSearch(search, searchOption)
  } else {
    return handleSearch(tags, searchOption)
  }

}



const handleAddChip = (tag) => setTags([...tags, tag]);


const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));







  return <AppBar className={classes.appBar} color="secondary" position="static" elevation={0}>
      <Container >
      <div className={classes.searchBar}>
         { searchOption === 'title' ? <TextField name="search"  variant="standard" value={search} onKeyDown={handleKeyPress} onChange={(e) => setSearch(e.target.value)}   label="Search Items" className={classes.searchInputField2} InputLabelProps={{ style: { fontWeight: 'bold' } }} /> :
<>
<div className={classes.tagContainer}>
<div>{tags.map((tag, index) => (
    <Chip
    key={index}
    label={tag}
    //onDelete={handleDelete}
    onDelete={() => handleDelete(index)}
   
    />
))}</div>

<TextField id="standard-basic" className={classes.searchInputField3} value={current} onKeyDown={handleKeyPress} onChange={(e)=> setCurrent(e.target.value)} variant="standard" label={count <= 4 ? "press enter to add tag" : <span className={classes.notice}> "tag limit reached" </span>} InputLabelProps={{ style: { fontWeight: 'bold' } }}  />

</div>
</>      
    
         }
    
 <FormControl className={classes.searchOptions} sx={{ ml: .5 }}>
 <InputLabel id="simple-select-label" className={classes.optionLabel} >SEARCH OPTIONS</InputLabel>
  <Select
    labelId="simple-select-label"
    
    id="simple-select"
    className={classes.select}
    value={searchOption}
    label="options"
    onChange={handleChange}
  >
    <MenuItem value="title" className={classes.menuItem}><span className={classes.menuItem}>search by title</span></MenuItem>
    <MenuItem value="tags"className={classes.menuItem}><span className={classes.menuItem}>search by tags</span></MenuItem>
    </Select>
  </FormControl>
 
  <Button variant="contained" className={classes.searchButton} sx={{ ml: 2 }}color="primary" onClick={searchPosts}>Search</Button>
  </div>
  </Container>

  </AppBar>;
};

export default SearchBar2;
