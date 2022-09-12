import { AppDispatch } from '../store';
import { GeoLocationSlice } from '../slices/geoSlice';
import { GeoService } from '../../services/GeoService';

export const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(GeoLocationSlice.actions.fetchGeoLocation());
      const res = await GeoService;
      console.log(res);
      // if (res.status === 200) {
      //   dispatch(GeoLocationSlice.actions.fetchGeoLocationSuccess(res));
      // } else dispatch(GeoLocationSlice.actions.fetchGeoLocationError(res));
    } catch (error) {
      console.log(error);
    }
  };
