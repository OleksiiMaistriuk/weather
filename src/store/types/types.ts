export type Weather = {
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    },
  ];
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
  };
  sys: { country: string };
  wind: {
    deg: number;
    speed: number;
  };
};

export interface ICoordinates {
  latitude: number;
  longitude: number;
}
export interface IMyOption {
  label: string;
  value?: ICoordinates;
}

export interface ICity {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}
