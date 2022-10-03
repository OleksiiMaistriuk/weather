import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';
import { options } from '../../../../axios/geoApiOptions';

interface Props {}

type MyOption = { label: string; value: number };

export const Search = (onSearchChange: Props) => {
  const [search, setSearch] = useState('');

  const handleChange = (optionData: string) => {
    setSearch(optionData);
  };

  const loadOptions = (inputValue: string) => {
    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      options,
    )
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city: any) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search the city"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};