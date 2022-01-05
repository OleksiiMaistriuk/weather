import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';
interface Props {}
export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'temp',
      value: '20 - sens how 17',
    },
    {
      icon_id: 'pressure',
      name: 'pressure',
      value: '785 mm - normal',
    },
    {
      icon_id: 'precipitation',
      name: 'precipitation',
      value: 'no precipitation ',
    },
    {
      icon_id: 'wind',
      name: 'wind',
      value: ' 3 m/s north - light wind',
    },
  ];
  return (
    <section className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
        <img className={s.cloud__img} src={cloud} alt="cloud" />
      </div>
    </section>
  );
};
