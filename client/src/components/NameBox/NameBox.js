import React from 'react';
import useStyles from './styles';
import {Typography, TextField, Box } from '@material-ui/core';


const NameBox = () => {
  const classes = useStyles();

  return (
      <Box className={classes.userNameBox} boxShadow={12}>
        <Typography className={classes.userNameField} variant="h5">Enter Your Name:  </Typography>
        <TextField className={classes.userNameTextInput} label="Loser Enters Name Here" variant="standard"/>
      </Box>
  );
}

export default NameBox;