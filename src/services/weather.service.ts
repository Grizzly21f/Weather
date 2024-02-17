import { configs } from "../configs/config";
import { ApiError } from "../errors/api.error";
import { IQuery } from "../types/params.type";
import { IWeather } from "../types/weather.type";

const https = require("https");

class WeatherService {
  public async getWeather(params: IQuery): Promise<IWeather> {
    let url = `https://api.openweathermap.org/data/2.5/weather?APPID=${configs.API_KEY}&units=metric`;

    if (params.city) {
      url += `&q=${params.city}`;
    } else if (params.lat && params.lon) {
      url += `&lat=${params.lat}&lon=${params.lon}`;
    } else {
      throw new ApiError(
        "Invalid parameters. Please provide city name or latitude and longitude.",
        400,
      );
    }

    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let responseData = "";
        res
          .on("data", (data) => {
            responseData += data;
          })
          .on("end", () => {
            resolve(JSON.parse(responseData));
          })
          .on("error", (error) => {
            reject(error);
          });
      });
    });
  }
}

export const weatherService = new WeatherService();