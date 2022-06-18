import React, { useEffect } from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import NameBox from './components/NameBox/NameBox';
import draft_logo from './images/draft_logo.png'; 
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container className={classes.appContainer} maxWidth={false}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Dynasty Draft Game</Typography>
        <img className={classes.image} src={draft_logo} alt="draft_logo" height="60" />
      </AppBar>
      <NameBox />
      <Form />
    </Container>
  );
};

export default App;

