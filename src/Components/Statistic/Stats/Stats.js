import React from 'react';
import styles from './Stats.module.css';
import Filter from '../../Filter/filter';

import Chart from '../Chart';
import DiagramTab from '../DiagramTab';

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
