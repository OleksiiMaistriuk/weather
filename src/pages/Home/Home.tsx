import { useState } from 'react';

import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Days/Days';
import { Search } from './components/Search/Search';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

export const Home = () => {
  const [query, setQuery] = useState('London');
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
      <Search  />
      <input
        className={s.input}
        type="text"
        placeholder="Enter Location"
        onChange={e => (e! ? setQuery(e.target.value) : null)}
        value={query}
        onKeyPress={searchWeather}
      />
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Days />
    </div>
  );
};
