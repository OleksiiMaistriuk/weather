import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';

interface Props {}
export const Header = (props: Props) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <svg className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </svg>
        <h1 className={s.title}>Reacr Weather</h1>
      </div>
      <div className={s.change_theme}>
        <svg className={s.logo}>
          <GlobalSvgSelector id="change-theme" />
        </svg>
      </div>
    </header>
  );
};
