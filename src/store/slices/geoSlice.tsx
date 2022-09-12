import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Geo } from '../types/types';

type GeoLocation = {
  geo: Geo;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: GeoLocation = {
  geo: { next: '' },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
  // count: 123,
  // results: [
  //   {
  //     mappings: [
  //       {
  //         elements: [
  //           {
  //             values: ['aeiou'],
  //             attribute: 'aeiou',
  //           },
  //         ],
  //         name: 'aeiou',
  //         description: 'aeiou',
  //       },
  //     ],
  //     tenant_ref: 'aeiou',
  //     name: 'aeiou',
  //     description: 'aeiou',
  //     files: [
  //       {
  //         vendor: 'aeiou',
  //         name: 'aeiou',
  //         index: 123,
  //         file_ref: 'aeiou',
  //         enabled: true,
  //       },
  //     ],
  //     uuid: 'aeiou',
  //     is_federated: true,
  //     url: 'aeiou',
  //     _last_modified: 'aeiou',
  //   },
  // ],
};

export const GeoLocationSlice = createSlice({
  name: 'Geo_location',
  initialState,
  reducers: {
    fetchGeoLocation(state) {
      state.isLoading = true;
    },
    fetchGeoLocationSuccess(state, action: PayloadAction<AxiosResponse<Geo>>) {
      state.geo = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchGeoLocationError(state, action: PayloadAction<AxiosResponse<Geo>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default GeoLocationSlice.reducer;
