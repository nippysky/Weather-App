export interface City {
  name: string;
  lat: number;
  lon: number;
}

export interface WeatherState {
  cities: City[];
}

const initialState: WeatherState = {
  cities: [
    { name: "Abuja, Nigeria", lat: 9.04, lon: 7.5 },
    { name: "Beijing, China", lat: 39.55, lon: 116.23 },
    { name: "Toronto, Canada", lat: 43.42, lon: 79.24 },
  ],
};

const weatherReducer = (state = initialState, action: any): WeatherState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default weatherReducer;
