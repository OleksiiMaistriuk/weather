import axios from 'axios';
import { WEATHER_APP_API_KEY, WEATHER_APP_API_URL } from '../.tokens';

const api = axios.create({
  baseURL: WEATHER_APP_API_URL,
});

api.interceptors.request.use(config => {
  config.url = config.url + '&units=metric' + `&appid=${WEATHER_APP_API_KEY}`;
  return config;
});
export default api;
