import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Day } from './Days';

import s from './Days.module.scss';

interface Props {
  days: Day;
}

export const Card = ({ days }: Props) => {
  const { day, day_info, icon_id, temp_day, temp_night, info } = days;

  return (
    <ul className={s.card}>
      <li className={s.day}>{day}</li>
      <li className={s.day__info}>{day_info}</li>
      <li className={s.img}>
        <GlobalSvgSelector id={icon_id} />
      </li>
      <li className={s.temp__day}>{temp_day}</li>
      <li className={s.temp__night}>{temp_night}</li>
      <li className={s.info}>{info}</li>
    </ul>
  );
};
