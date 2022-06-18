import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  divStyle: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center', 
    columnGap: 8,
    margin: '20px 5px',
    borderRadius: 15,
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  pickField: {
    color: 'rgba(0,183,255, 1)',
  },
  FormControlSX: {
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    backgroundColor: 'white',
  },
  pickSelect: {
    width: 200,
  },
  pickLetter: {
    color: 'rgba(0,183,255, 1)',
    margin: '25px 40px',
  }
}));