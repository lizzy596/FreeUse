import React from 'react'
import { Typography, Paper, Divider, Button, Container } from '@mui/material';
import useStyles from './styles'
import { useParams, useHistory, Link, useNavigate } from 'react-router-dom';

const Error = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
    <Paper className={classes.paper} color="inherit" elevation={0}>
      <div className={classes.info}>
      <Typography variant="h6" gutterBottom>Page not found!</Typography>
      <Link to="/">Return to all Posts</Link>
      </div>
    </Paper>
    </Container>
  )
}

export default Error