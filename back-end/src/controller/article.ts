import { NextFunction, Request, Response, Router } from "express";
import { getArticleById } from "../service/search";
import { ErrorResponse, SuccessResponse } from "../types/http";

const ArticleRouter: Router = Router();

ArticleRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const id: number = req.params.id as unknown as number;

    if (!id || id < 0) {
      const error: ErrorResponse = {
        success: false,
        error: "ID param is empty or invalid",
        status: 400,
      };

      return res.status(error.status).json(error);
    }

    const results = await getArticleById(id);

    const response: SuccessResponse = {
      success: true,
      data: results,
      status: 200,
    };

    return res.status(response.status).json(response);
  }
);

export default ArticleRouter;
