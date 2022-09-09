import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';
import { Weather } from '../../../../store/types/types';

interface Props {
  weather: Weather;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = ({ weather }: Props) => {
  const { feels_like, humidity, pressure, temp_max, temp_min } = weather.main;
  const { deg, speed } = weather.wind;
  const items = [
    {
      icon_id: 'temp',
      name: 'temp ',
      value: ` ${Math.floor(temp_min)} ° -  ${temp_max.toFixed()} ° `,
    },
    {
      icon_id: 'temp',
      name: 'sens how ',
      value: ` ${feels_like.toFixed()} °`,
      // value: '20 - sens how 17',
    },

    {
      icon_id: 'pressure',
      name: 'pressure',
      value: ` ${pressure} mm - normal`,

      // value: '785 mm - normal',
    },
    {
      icon_id: 'precipitation',
      name: 'humidity',
      value: ` ${humidity} %`,
      // value: 'no precipitation ',
    },
    {
      icon_id: 'wind',
      name: 'wind',
      value: ` ${speed} m/s ${deg} - light wind `,
      // value: ' 3 m/s north - light wind',
    },
  ];
  return (
    <section className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        <img className={s.cloud__img} src={cloud} alt="cloud" />
        {items.map((item: Item, index) => (
          <ThisDayItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};
