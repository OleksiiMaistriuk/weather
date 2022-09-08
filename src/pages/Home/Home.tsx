import React, { useState } from 'react';

import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';
import { selectCurrentWeatherData } from '../../store/selectors';

interface Props {}

export const Home = (props: Props) => {
  const [query, setQuery] = useState('');

  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  const searchWeather = (e: any) => {
    if (e.key === 'Enter' && query) {
      dispatch(fetchCurrentWeather(`${query}`));
      setQuery('');
    }
  };

  return (
    <div className={s.home}>
      <input
        className={s.input}
        type="text"
        placeholder="Search..."
        onChange={e => (e! ? setQuery(e.target.value) : '')}
        value={query}
        onKeyPress={searchWeather}
      />
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
