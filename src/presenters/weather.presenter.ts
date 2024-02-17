import { IWeather } from "../types/weather.type";

export class WeatherPresenter {
  public static weatherPresenter(weather: IWeather) {
    return {
      Weather: {
        Coordinates: {
          lon: weather.coord.lon,
          lat: weather.coord.lat,
        },
        MainWeather: {
          temp: weather.main.temp,
          feels_like: weather.main.feels_like,
          temp_min: weather.main.temp_min,
          temp_max: weather.main.temp_max,
          pressure: weather.main.pressure,
          humidity: weather.main.humidity,
          sea_level: weather.main.sea_level,
          grnd_level: weather.main.grnd_level,
        },

        wind: {
          speed: weather.wind.speed,
          deg: weather.wind.deg,
          gust: weather.wind.gust,
        },
        CountryAndSun: {
          country: weather.sys.country,
          sunrise: weather.sys.sunrise,
          sunset: weather.sys.sunset,
        },

        Other: {
          timezone: weather.timezone,
          City: weather.name,
          cod: weather.cod,
        },
      },
    };
  }
}
