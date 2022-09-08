export type Weather = {
  name: String;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
  };
  sys: { country: String };

  // sunrise: 1662614647;
  // sunset: 1662661966;
};
