import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";
import { IQuery } from "../types/params.type";

class ParamsMiddleware {
  public async checkParams(req: Request, res: Response, next: NextFunction) {
    try {
      const param = req.query as IQuery;

      if (param.city && param.lat && param.lon) {
        throw new ApiError(
          "Invalid request. Please provide latitude and longitude.",
          406,
        );
      }
      if (Object.keys(req.query).length === 0) {
        throw new ApiError(
          "Invalid request. Please provide city name or latitude and longitude",
          400,
        );
      }
      if (param.city && (param.lat || param.lon)) {
        throw new ApiError(
          "Invalid request. Please provide city name or latitude and longitude.",
          400,
        );
      }
      if ((param.lon && !param.lat) || (!param.lon && param.lat)) {
        throw new ApiError(
          "Invalid request. Please provide city name or latitude and longitude.",
          400,
        );
      }

      res.locals = param;
      next();
    } catch (e) {
      if (e instanceof ApiError) {
        return res.status(e.status).json({ error: e.message });
      }
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export const paramsMiddleware = new ParamsMiddleware();
