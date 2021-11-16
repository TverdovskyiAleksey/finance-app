import React from 'react';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import styles from './Datetime.module.css';

export default class DTPicker extends React.Component {
  render() {
    return (
      <Datetime
        className={styles.DT}
        isValidDate={valid}
        dateFormat="DD-MM-YYYY"
        timeFormat={false}
        onChange={e => this.props.onChange(e._d)}
        name="date"
        // id="input-date"
        value={this.props.value}
      />
    );
  }
}

var yesterday = moment().subtract(1, 'day');
function valid(current) {
  return current.isAfter(yesterday);
}
