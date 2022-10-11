import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import loadOptions from './loadOptions';

type Location = {
  latitude: string;
  longitude: string;
};
interface IMyOption {
  label: string;
  value: Location;
}
export const Search = () => {
  const [searchData, onSearchData] = useState<string | null>(null);
  console.log(searchData);
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
