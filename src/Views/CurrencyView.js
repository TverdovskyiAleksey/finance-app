import { Redirect } from 'react-router-dom';

import Currency from '../Components/Sidebar/Currency';
import Sidebar from '../Components/Sidebar';

const CurrencyView = () => {
  const notModile = window.innerWidth > 767;
  return !notModile ? (
    <div>
      <Sidebar />
      <Currency />
    </div>
  ) : (
    <Redirect
      to={{
        pathname: '/home',
      }}
    />
  );
};
export default CurrencyView;
