export interface Location {
  latitude: null | number;
  longitude: null | number;
}

export type WeatherCategoryCode =
  | 'POP'
  | 'PTY'
  | 'PCP'
  | 'PEH'
  | 'SNO'
  | 'SKY'
  | 'TMP'
  | 'TMN'
  | 'TMX'
  | 'UUU'
  | 'VVV'
  | 'WAV'
  | 'VEC'
  | 'WSD';

interface Weather {
  date: string;
  time: {
    time: string;
    category: {
      category: WeatherCategoryCode;
      name: string;
      value: string;
    }[];
  }[];
}

export default Weather;
