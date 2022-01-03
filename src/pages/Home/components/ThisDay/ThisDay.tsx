import React from 'react';
import s from './ThisDay.module.scss';
interface Props {}

export const ThisDay = (props: Props) => {
  return (
    <section className={s.this__day}>
      <ul className={s.top__block}>
        <li className={s.this__temp}>20</li>
        <li className={s.this__day_day}>today</li>
      </ul>
      <ul className={s.bottom__block}>
        <li className={s.this__time}>
          <span>21:50</span>
        </li>
        <li className={s.this__city}>New York</li>
      </ul>
    </section>
  );
};
