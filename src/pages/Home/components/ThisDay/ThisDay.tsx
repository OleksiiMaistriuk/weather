import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  const { temp } = weather.main;
  const { country } = weather.sys;

  const dateBuilder = (date: Date) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const day = days[date.getDay()];
    const currentDate = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${currentDate} of ${month}  ${year} `;
  };

  return (
    <section className={s.this__day}>
      <div className={s.top__block}>
        <ul className={s.top__block_wrapper}>
          <li className={s.this__temp}>{temp.toFixed()}°</li>
          <li className={s.this__day_name}>today</li>
        </ul>

        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <ul className={s.bottom__block_wrapper}>
          <li className={s.this__time}>
            <span>{dateBuilder(new Date())}</span>
          </li>
          <li className={s.this__time}>
            <span>
              {weather.weather[0].main}: {weather.weather[0].description}
            </span>
          </li>
          <li className={s.this__city}>
            location: {weather.name},{country}
          </li>
        </ul>
      </div>
    </section>
  );
};
