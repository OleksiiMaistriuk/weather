import { GEO_APP_API_KEY } from '../.tokens';
export const apiOptions: RequestInit = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': GEO_APP_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

// city : "London"
// country:"United Kingdom"
// countryCode:"GB"
// id :45633
// latitude:51.507222222
// longitude:-0.1275
// name :"London"
// population: 8908081
// region:"England"
// regionCode :"ENG"
// type: "CITY"
// wikiDataId: "Q84"
