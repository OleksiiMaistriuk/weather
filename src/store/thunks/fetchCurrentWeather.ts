import { WeatherService } from 'services/WeatherService';
import { ICoordinates } from 'store/types/types';
import { currentWeatherSlice } from '../slices/currentWeatherSlice';
import { AppDispatch } from '../store';

export const fetchCurrentWeather =
  (payload: ICoordinates) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      const res = await WeatherService.getCurrentWeather(payload);
      console.log(res);
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
    } catch (error) {
      console.log(error);
    }
  };
