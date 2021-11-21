import { useSelector } from 'react-redux';
import Header from './Header';
import { authSelectors } from '../Redux/auth';
// import { display, style } from '@mui/system';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};


export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  console.log(isLoggedIn);
  return (
    <header className={styles.header}>
     
         <Header/>
      
    </header>
  );
}