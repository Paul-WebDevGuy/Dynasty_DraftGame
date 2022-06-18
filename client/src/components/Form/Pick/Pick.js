import React from 'react';
import { Typography, Paper  } from '@material-ui/core';

import useStyles from './styles';
import Picks from './Picks/Picks';


const Pick = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.divStyle}>
      <Typography className={classes.pickField} variant="h4">Pick {props.pickNumber}</Typography>
        <Picks pickLetter='A'/>
        <Picks pickLetter='B'/>
        <Picks pickLetter='C'/>
    </Paper>
  );
}

export default Pick;