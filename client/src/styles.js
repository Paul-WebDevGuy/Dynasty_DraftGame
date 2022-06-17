import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  userNameField: {
    color: 'rgba(0,183,255, 1)',
    margin: '25px 40px',
  },
  userNameBox: {
    //border: '1px solid black',
    borderRadius: 15,
    display: 'flex',
    margin: '150px 190px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
  },
  userNameTextInput: {
    paddingBottom: '17px',
  },
  
}));