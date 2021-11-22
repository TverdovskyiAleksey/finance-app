import Container from './Components/Container';
import { Switch } from 'react-router-dom';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import StatisticView from './Views/StatisticView';
import HomeView from './Views/HomeView';
import CurrencyView from './Views/CurrencyView';
import AppBar from './Components/AppBar';
import './fonts.css';
import { useEffect, Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './Redux/auth';

// const LoginView = lazy(() => import('./Views/LoginView'));
// const HomeView = lazy(() => import('./Views/HomeView'));
// const RegisterView = lazy(() => import('./Views/RegisterView'));
// const StatisticView = lazy(() => import('./Views/StatisticView'));
// const CurrencyView = lazy(() => import('./Views/CurrencyView'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCarrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <PublicRoute exact path="/login" redirectTo="/home" restricted>
          <LoginView />
        </PublicRoute>
        <PublicRoute exact path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        <PrivateRoute>
          <HomeView exact path="/home" />
        </PrivateRoute>
        <PrivateRoute>
          <StatisticView exact path="/statistic" />
        </PrivateRoute>
        <PrivateRoute>
          <CurrencyView exact path="/currency" />
        </PrivateRoute>
      </Switch>
      <ToastContainer />
    </Container>
  );
}

export default App;
