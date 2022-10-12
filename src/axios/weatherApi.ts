import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use(config => {
  config.url =
    config.url + '&units=metric' + '&appid=a39cdc7ed348cdff434c1e03dfd2f0cb';
  return config;
});
export default api;
