import React from 'react';
import { Card } from './Card';

import s from './Days.module.scss';
import { Tabs } from './Tabs';

interface Props {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: 'Today',
      day_info: 'Aug 28',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Cloudy',
    },
    {
      day: 'Tomorrow',
      day_info: 'Aug 28',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'light rain and sunshine',
    },
    {
      day: 'Wednesday',
      day_info: 'Aug 28',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'small rain',
    },
    {
      day: 'Monday',
      day_info: 'Aug 28',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Cloudy',
    },
    {
      day: 'Thursday',
      day_info: 'Aug 28',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Cloudy',
    },
    {
      day: 'Saturday',
      day_info: 'Aug 28',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Cloudy',
    },
    {
      day: 'Sunday',
      day_info: 'Aug 28',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Cloudy',
    },
  ];
  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => (
          <Card days={day} key={day.day} />
        ))}
      </div>
    </>
  );
};
