import axios from 'axios';
import { options } from '../axios/geoApiOptions';

export const GeoService = axios
  //@ts-ignore
  .request(options)
  .then(function (response) {
    console.log('response.data', response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
