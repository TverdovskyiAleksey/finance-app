import Statistic from '../Components/Statistic/Stats';
import Sidebar from '../Components/Sidebar';
import stylesHome from './Home.module.css';

const StatisticView = () => {
  return (
    <div className={stylesHome.Container}>
      <Sidebar />
      <Statistic />
    </div>
  );
};

export default StatisticView;
