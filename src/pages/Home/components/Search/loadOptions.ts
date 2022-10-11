import { GroupBase } from 'react-select';
import { LoadOptions } from 'react-select-async-paginate';
import { apiOptions } from '../../../../axios/geoApiOptions';
interface ICity {
  name: string;
  country: string;
  latitude: string;
  longitude: string;
}
const loadOptions: LoadOptions<
  string,
  GroupBase<string>,
  any
> = async inputText => {
  return await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000&namePrefix=${inputText}`,
    apiOptions,
  )
    .then(response => response.json())
    .then(response => {
      return {
        options: response.data.map((city: ICity) => ({
          label: `${city.name} ${city.country}`,
          value: { latitude: city.latitude, longitude: city.longitude },
        })),
      };
    });

  // const responseJSON = await response.json();

  // console.log('responseJSON', responseJSON);
  // return {
  //   options: responseJSON.data
  //     .map((city: ICity) => ({
  //       label: `${city.name} ${city.country}`,
  //       value: { latitude: city.latitude, longitude: city.longitude },
  //     }))
  //     .catch((err: any) => console.log(err)),
  // };
};
export default loadOptions;

// import { GroupBase } from 'react-select';
// import { LoadOptions } from 'react-select-async-paginate';
// import { apiOptions } from '../../../../axios/geoApiOptions';

// const loadOptions: LoadOptions<
//   string,
//   GroupBase<string>,
//   any
// > = async inputText => {
//   return await fetch(
//     `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputText}`,
//     apiOptions,
//   )
//     .then(response => response.json())
//     .then(response => ({
//       options: response.data.map((city: ICity) => ({
//         label: `${city.name} ${city.countryCode}`,
//         value: { latitude: city.latitude, longitude: city.longitude },
//       })),
//     }))
//     .catch(err => console.error(err));
// };
// export default loadOptions;
