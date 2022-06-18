import React from 'react';
import { TextField, Box, Typography, Paper, FormControl, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';
import Pick from './Pick/Pick';

const handleSubmit = () => {

}

const Form = () => {

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Pick />
      <Pick />
    </form>
  );
}

export default Form;


      // <form autoComplete="off" noValidate className={classes.form}>
      //   <FormControl variant="standard" className={classes.FormControlSX}>
      //   <Typography className={classes.pickField} variant="h6">Pick 1</Typography>
      //   <Typography className={classes.pickField} variant="h7">A</Typography>
      //   <Select
      //     className={classes.pickSelect}
      //     id="Player-Choice"
      //     value={playerName}
      //     onChange={handleChange}
      //     label=""
      //   >
      //     <MenuItem value={"Travis Etienne"}>Travis Etienne</MenuItem>
      //     <MenuItem value={"Jonathan Taylor"}>Jonathan Taylor</MenuItem>
      //     <MenuItem value={"Bo Jackson"}>Bo Jackson</MenuItem>
      //   </Select>
      //   </FormControl>
      // </form>