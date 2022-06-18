import React from 'react';
import { Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import Pick from './Pick/Pick';
import NameBox from './NameBox/NameBox';
import { createPost } from '../../actions/posts';

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //dispatch(createPost());
}
  
  return (
    <form noValidate onSubmit={handleSubmit}>
      <NameBox />
      <Pick pickNumber='1'/>
      <Pick pickNumber='2'/>
      <Pick pickNumber='3'/>
      <Pick pickNumber='4'/>
      <Pick pickNumber='5'/>
      <Pick pickNumber='6'/>
      <Pick pickNumber='7'/>
      <Pick pickNumber='8'/>
      <Pick pickNumber='9'/>
      <Pick pickNumber='10'/>
      <Pick pickNumber='11'/>
      <Pick pickNumber='12'/>
      <Pick pickNumber='13'/>
      <Pick pickNumber='14'/>
      <Pick pickNumber='15'/>
      <Pick pickNumber='16'/>
      <Pick pickNumber='17'/>
      <Pick pickNumber='18'/>
      <Pick pickNumber='19'/>
      <Pick pickNumber='20'/>
      <Pick pickNumber='21'/>
      <Pick pickNumber='22'/>
      <Pick pickNumber='23'/>
      <Pick pickNumber='24'/>
      <Pick pickNumber='25'/>
      <Pick pickNumber='26'/>
      <Pick pickNumber='27'/>
      <Pick pickNumber='28'/>
      <Pick pickNumber='29'/>
      <Pick pickNumber='30'/>
      <Pick pickNumber='31'/>
      <Pick pickNumber='32'/>
      <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit'>Submit</Button>
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