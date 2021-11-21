import React from 'react';
import styles from './Stats.module.css';

import Chart from '../Chart';
import DiagramTab from '../DiagramTab';
import Filter from '../../Transaction/filter';

const Statistic = () => {
  return (
    <div className={styles.statisticsPage}>
      <Filter />
      <Chart />
      <DiagramTab />
    </div>
  );
};

export default Statistic;
