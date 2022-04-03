import { WeatherService } from '../../services/WeatherService';
import { curentWeatherSlice } from '../slices/curentWeatherSlice';
import { AppDispatch } from '../store';

export const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(curentWeatherSlice.actions.fetchCurrentWeather());
      const res = await WeatherService.getCurrentWeather(payload);
      if (res.status === 200) {
        dispatch(curentWeatherSlice.actions.fetchCurrentWeatherSucces(res));
      } else dispatch(curentWeatherSlice.actions.fetchCurrentWeatherError(res));
    } catch (error) {
      console.log(error);
    }
  };
