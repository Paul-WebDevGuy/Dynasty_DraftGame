import React from 'react';
import { TextField, MenuItem, Typography } from '@material-ui/core';

import useStyles from './styles';


const names = [
  'Travis Etienne',
  'Jonathan Taylor',
  'Louis Reddick',
  'Demarcus Lawrence',
  'Tom Brady',
  'Aaron Rodgers',
  'Kabeer Gbaja Biamila',
  'Your mom',
  'Ligma',
  'Balls',
  'Gandhi',
];


const Picks = (props) => {
  const classes = useStyles();
  const [playerName, setPlayer] = React.useState('');

  const handleChange = (event) => {
    setPlayer(event.target.value);
  };

  return (
      <div className={classes.divStyle}>
        <Typography className={classes.pickLetter} variant="h6">{props.pickLetter}</Typography>
        <TextField
          className={classes.pickSelect}
          size="small"
          label=""
          select
          value={playerName}
          onChange={handleChange}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))};
        </TextField>
      </div>
  );
}

export default Picks;