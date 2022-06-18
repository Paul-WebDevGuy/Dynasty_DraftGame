import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appContainer: {
    background: '#b8edaf',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    },
  appBar: {
    borderRadius: 15,
    margin: '50px 0',
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
}));