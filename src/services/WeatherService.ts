import { AxiosResponse } from 'axios';
import api from '../axios/weatherApi';
import { ICoordinates, Weather } from '../store/types/types';

export class WeatherService {
  static getCurrentWeather(
    coordinates: ICoordinates,
  ): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(
      `/weather?lat=${coordinates?.latitude}&lon=${coordinates?.longitude}`,
    );
  }
}
