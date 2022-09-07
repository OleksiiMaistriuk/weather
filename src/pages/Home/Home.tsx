import React, { useEffect, useState } from 'react';

import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';
import { selectCurrentWeatherData } from '../../store/selectors';

interface Props {}

export const Home = (props: Props) => {
  const [city, setCity] = useState('London');

  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather(`${city}`));
  }, []);

  return (
    <div className={s.home}>
      <input className={s.input} type="text" placeholder="Search..." />
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
