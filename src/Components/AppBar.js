import { useSelector } from 'react-redux';
import Header from './Header';
import { authSelectors } from '../Redux/auth';
import LoginView from '../Views/LoginView';
import HomeView from '../Views/HomeView';
// import LoginView from '../Views/LoginView';
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
  return (
    <header className={styles.header}>
      {isLoggedIn ? <HomeView /> : null}
    </header>
  );
}
