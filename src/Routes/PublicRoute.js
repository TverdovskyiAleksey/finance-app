import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../Redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/home',
  ...routeProps
}) {
  const iisLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = iisLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
