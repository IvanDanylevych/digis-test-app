import React, { useState } from 'react';

import styles from './Main.module.scss';

import { Chart, Button, Input, Spinner } from '../../components';
import { formatDataForChart, enumErrorTypes } from '../../utils';

const Main = ({ onFetchCity, weatherList, error, loading }) => {
  const [inputValue, setInputValue] = useState('');

  const searchButtonHandler = () => {
    onFetchCity(inputValue);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.inputWrapper}>
        <Input onChange={setInputValue} />
        <Button onClick={searchButtonHandler} text="Search" />
      </div>
      {loading && <Spinner />}
      {error && <div className={styles.errorMessage}>{enumErrorTypes[error]}</div>}
      {weatherList && <Chart data={formatDataForChart(weatherList)} />}
    </div>
  );
};

export default Main;
