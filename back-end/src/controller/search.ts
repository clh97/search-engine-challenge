import { NextFunction, Request, Response, Router } from "express";
import { searchArticles } from "../service/search";
import { ErrorResponse, SuccessResponse } from "../types/http";

const SearchRouter: Router = Router();

SearchRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const query: string = req.query.q as string;

    if (!query || query.length === 0) {
      const error: ErrorResponse = {
        success: false,
        error: "Query is empty",
        status: 400,
      };

      return res.status(error.status).json(error);
    }

    const results = await searchArticles(query);

    const response: SuccessResponse = {
      success: true,
      data: results,
      status: 200,
    };

    return res.status(response.status).json(response);
  }
);

export default SearchRouter;
