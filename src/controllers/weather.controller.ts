import { NextFunction, Request, Response } from "express";

import { weatherService } from "../services/weather.service";
import { IQuery } from "../types/params.type";

class WeatherController {
  public async getWeather(req: Request, res: Response, next: NextFunction) {
    try {
      const weather = await weatherService.getWeather(res.locals as IQuery);
      console.log(weather);

      return res.json(weather);
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
