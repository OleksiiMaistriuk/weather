import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';
interface Props {}

export const ThisDay = (props: Props) => {
  return (
    <section className={s.this__day}>
      <div className={s.top__block}>
        <ul className={s.top__block_wrapper}>
          <li className={s.this__temp}>20</li>
          <li className={s.this__day_name}>today</li>
        </ul>

        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <ul className={s.bottom__block_wrapper}>
          <li className={s.this__time}>
            <span>21:50</span>
          </li>
          <li className={s.this__city}>New York</li>
        </ul>
      </div>
    </section>
  );
};
