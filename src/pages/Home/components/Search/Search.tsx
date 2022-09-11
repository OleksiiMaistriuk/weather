import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';

interface Props {}

type MyOption = { label: string; value: number };

export const Search = (onSearchChange: Props) => {
  const [search, setSearch] = useState('');
  const handleChange = (optionData: string) => {
    setSearch(optionData);
  };
  const loadOptions = (inputValue: string) => {};
  return (
    <div>
      <AsyncPaginate
        placeholder="Search the city"
        debounceTimeout={600}
        value={search} // @ts-ignore
        onChange={handleChange} // @ts-ignore
        loadOptions={loadOptions}
      />
    </div>
  );
};
