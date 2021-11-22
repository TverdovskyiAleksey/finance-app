import Container from './Components/Container';
import { Switch } from 'react-router-dom';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import StatisticView from './Views/StatisticView';
import HomeView from './Views/HomeView';
import AppBar from './Components/AppBar';
import "./fonts.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
          <HomeView exact path="/home" redirectTo="/login" />
        </PrivateRoute>
        <PrivateRoute>
          <StatisticView exact path="/statistic" redirectTo="/login" />
        </PrivateRoute>
      </Switch>
      <ToastContainer />
    </Container>
  );
}

export default App;