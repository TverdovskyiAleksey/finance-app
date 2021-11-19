import React from 'react';
import styles from './Stats.module.css';

import Chart from '../Chart';
import DiagramTab from '../DiagramTab';

const Statistic = () => {
  return (
    <div className={styles.statisticsPage}>
      <Chart  />
      <DiagramTab  />
    </div>    
  )
  
};

export default Statistic;
