import './WeatherWidget.css';
import { useEffect, useState } from 'react';
import { Location } from '../../../models/weather';
import { weatherAPI } from '../../../services';
import CloudyIcon from '../../../assets/cloudy-icon.png';
import SunnyIcon from '../../../assets/sunny-icon.png';
import GrayIcon from '../../../assets/gray-icon.png';
import RainIcon from '../../../assets/rain-icon.png';
import RainAndSnowIcon from '../../../assets/rainAndSnow-icon.png';
import SnowIcon from '../../../assets/snow-icon.png';
import ShowerIcon from '../../../assets/shower-icon.png';
import * as dayjs from 'dayjs';

const WeatherWidget = () => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });

  const [weather, setWeather] = useState<{ [name: string]: { name: string; value: string } }>({});
  const [skyConditionIcon, setSkyConditionIcon] = useState<string>('');
  const [precipitationIcon, setPrecipitationIcon] = useState<string>('');

  const getLocation = async (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (err) => {
            reject(err);
          },
          { enableHighAccuracy: true, maximumAge: 30000 },
        );
      }
    });
  };

  useEffect(() => {
    getLocation().then((newLocation) => {
      setLocation(newLocation);
    });
  }, []);

  useEffect(() => {
    if (location.latitude !== null && location.longitude !== null) {
      weatherAPI
        .findByLocation(location)
        .then((data) => {
          console.log(data);

          const dateTime = dayjs();
          const currentDate = dateTime.format('YYYYMMDD');
          const currentTime = dateTime.format('HH00');
          const nextTime = dateTime.add(1, 'hour').format('HH00');
          const dIdx = data.findIndex((item) => item.date === currentDate);
          if (dIdx === -1) return;

          let tIdx = data[dIdx].time.findIndex((item) => item.time === currentTime);
          if (tIdx === -1) tIdx = data[dIdx].time.findIndex((item) => item.time === nextTime);
          if (tIdx === -1) return;

          const result = data[dIdx].time[tIdx].category.reduce(
            (acc, { category, name, value }) => {
              acc[category] = { name, value };
              return acc;
            },
            {} as { [name: string]: { name: string; value: string } },
          );

          setWeather(result);
        })
        .catch((err) => console.log(JSON.stringify(err, null, 2)));
    }
  }, [location]);

  useEffect(() => {
    switch (weather['SKY']?.value) {
      case '맑음':
        setSkyConditionIcon(SunnyIcon);
        break;
      case '구름많음':
        setSkyConditionIcon(CloudyIcon);
        break;
      case '흐림':
        setSkyConditionIcon(GrayIcon);
        break;
      default:
        setSkyConditionIcon('');
    }

    switch (weather['PTY']?.value) {
      case '비':
        setPrecipitationIcon(RainIcon);
        break;
      case '비/눈':
        setPrecipitationIcon(RainAndSnowIcon);
        break;
      case '눈':
        setPrecipitationIcon(SnowIcon);
        break;
      case '소나기':
        setPrecipitationIcon(ShowerIcon);
        break;
      default:
        setPrecipitationIcon('');
    }
  }, [weather]);

  return (
    <div className="weather-widget">
      <div className="weather-widget__icon">
        {skyConditionIcon !== '' ? (
          <img className="weather-widget__sky-condition-icon" src={skyConditionIcon} alt="날씨 상태" width={44} />
        ) : null}
        {precipitationIcon !== '' ? (
          <img className="weather-widget__precipitation-icon" src={precipitationIcon} alt="강수" width={44} />
        ) : null}
      </div>
      <div className="weather-widget__label">
        <div className="weather-widget__temperature">{weather['TMP']?.value}</div>
        <div className="weather-widget__description">{weather['SKY']?.value}</div>
      </div>
    </div>
  );
};

export default WeatherWidget;
