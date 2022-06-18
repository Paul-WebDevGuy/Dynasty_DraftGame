import React from 'react';
import { Typography, Paper  } from '@material-ui/core';

import useStyles from './styles';
import Picks from './Picks/Picks';


const Pick = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.divStyle}>
      <Typography className={classes.pickField} variant="h4">Pick 1</Typography>
      <Typography className={classes.pickLetter} variant="h6">A</Typography>
        <Picks />
      <Typography className={classes.pickLetter} variant="h6">B</Typography>
        <Picks />
      <Typography className={classes.pickLetter} variant="h6">C</Typography>
        <Picks />
    </Paper>
  );
}

export default Pick;