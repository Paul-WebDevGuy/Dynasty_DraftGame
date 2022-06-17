import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, TextField, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import draft_logo from './images/draft_logo.png'; 
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Dynasty Draft Game</Typography>
        <img className={classes.image} src={draft_logo} alt="draft_logo" height="60" />
      </AppBar>
      <Box className={classes.userNameBox} position="static" color="inherit" boxShadow={12}>
        <Typography className={classes.userNameField} variant="h5">Enter Your Name:  </Typography>
        <TextField className={classes.userNameTextInput} label="Loser Enters Name Here" variant="standard"/>
      </Box>
    </Container>
  );
};

export default App;

      // <Grow in>
      //   <Container>
      //     <Grid container justify="space-between" alignItems="stretch" spacing={3}>
      //       <Grid item xs={12} sm={7}>
      //         <Posts />
      //       </Grid>
      //       <Grid item xs={12} sm={4}>
      //         <Form />
      //       </Grid>
      //     </Grid>
      //   </Container>
      // </Grow>