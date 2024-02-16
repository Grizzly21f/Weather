import { NextFunction } from "express";

class WeatherController {
  public async getWeather(req: Request, res: Response, next: NextFunction) {
    try {
      const param = req.params;

      return res.json("param");
    } catch (e) {
      next(e);
    }
  }
}
export const weatherController = new WeatherController();
