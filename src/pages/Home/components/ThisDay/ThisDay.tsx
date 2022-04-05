import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';
interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <section className={s.this__day}>
      <div className={s.top__block}>
        <ul className={s.top__block_wrapper}>
          <li className={s.this__temp}>{Math.floor(weather.main.temp)}°</li>
          <li className={s.this__day_name}>today</li>
        </ul>

        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <ul className={s.bottom__block_wrapper}>
          <li className={s.this__time}>
            <span>time :21:50</span>
          </li>
          <li className={s.this__city}>city:New York</li>
        </ul>
      </div>
    </section>
  );
};
