import axios, { AxiosResponse } from 'axios';
import { Weather } from '../store/types/types';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get(
      `api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f900beb08e6c4bb8a3f6a3f851916bb`,
    );
  }
}
