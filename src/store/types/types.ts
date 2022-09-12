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

export type Geo = {
  next: string;
  // count: number;
  // results: [
  //   {
  //     mappings: [
  //       {
  //         elements: [
  //           {
  //             values: [string];
  //             attribute: string;
  //           },
  //         ];
  //         name: string;
  //         description: string;
  //       },
  //     ];
  //     tenant_ref: string;
  //     name: string;
  //     description: string;
  //     files: [
  //       {
  //         vendor: string;
  //         name: string;
  //         index: number;
  //         file_ref: string;
  //         enabled: true;
  //       },
  //     ];
  //     uuid: string;
  //     is_federated: true;
  //     url: string;
  //     _last_modified: string;
  //   },
  // ];
};
