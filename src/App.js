import Jobs from 'components/Jobs';
import Employees from 'components/Employees';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex'
   },
   toolbar: theme.mixins.toolbar,
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   }
}));


function App() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Jobs/>
         <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Employees/>
         </main>
      </div>
   );
}

export default App;
