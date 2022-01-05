import React from 'react';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import s from './Popup.module.scss';
import SunCloud from '../../assets/images/SunCloud.png';
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
interface Props {}

export const Popup = (props: Props) => {
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
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <ul className={s.day}>
          <li className={s.day_temp}>20</li>
          <li className={s.day_name}>sunday</li>
          <li className={s.img}>
            <GlobalSvgSelector id="sun" />
          </li>
          <li className={s.day_time}>21:25</li>
          <li className={s.day_city}>New York</li>
        </ul>
        <img className={s.sun__cloud_img} src={SunCloud} alt="sun-cloud" />
        <div className={s.day_info_item}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>{' '}
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
