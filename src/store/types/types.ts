export type Weather = {
  weather: [
    {
      description: String;
      icon: String;
      id: number;
      main: String;
    },
  ];
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
  wind: {
    deg: number;
    speed: number;
  };
  // sunrise: 1662614647;
  // sunset: 1662661966;
};
