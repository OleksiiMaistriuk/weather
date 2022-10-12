import { useEffect, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import loadOptions from './loadOptions';

import { useCustomDispatch } from 'hooks/store';
import { fetchCurrentWeather } from 'store/thunks/fetchCurrentWeather';
import { ICoordinates, IMyOption } from 'store/types/types';

export const Search = () => {
  const [searchData, onSearchData] = useState<IMyOption | null>();
  const [coordinates, setCoordinates] = useState<ICoordinates | undefined>();

  const dispatch = useCustomDispatch();

  useEffect(() => {
    if (coordinates) {
      dispatch(fetchCurrentWeather(coordinates));
      console.log('coordinates', coordinates);
    }
    if (searchData) {
      setCoordinates(searchData.value);
      console.log('searchData.value', searchData.value);
    }
  }, [searchData, coordinates, dispatch]);

  return (
    <div>
      <AsyncPaginate
        placeholder="Search the city"
        debounceTimeout={600}
        value={searchData}
        onChange={onSearchData}
        loadOptions={loadOptions}
      />
    </div>
  );
};
