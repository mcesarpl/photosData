import { Request, Response } from "express";
import { enumParams } from "src/global";
import { HttpClientFactory } from "@factories/HttpClientFactory";
import { iPhoto } from "src/interfaces";
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { FormatArray } from "src/utils/FormatArray";
import { FilterParams } from "src/utils/FilterParams";
import { SortArrays } from "src/utils/SortArrays";

const adapter = HttpClientFactory.create();

export class PhotosController {
  static async getPhotosUrls(req: Request, res: Response) {
    try {
      const { body } = await adapter.get<iPhoto[]>(enumParams.ARG_TYPE.URLPHONESLIST);
      const filtered = FilterParams.filterUrl(body);
      return res.status(StatusCodes.OK).json({filtered});
    } catch(error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: ReasonPhrases.INTERNAL_SERVER_ERROR, error: error.message});
    }
  }

  static async filterProprieties(req: Request, res: Response) {
    try {
      const { body } = await adapter.get<iPhoto[]>(enumParams.ARG_TYPE.URLPHONESLIST);
      const filtered = FilterParams.mainParams(body);
      const sorted = SortArrays.sortByTitle(filtered);
      
      return res.status(StatusCodes.OK).json({sorted});
    } catch(error) {
      console.log(error.stack);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  }

  static async patternTitle(req: Request, res: Response) {
    try {
      const { body } = await adapter.get<iPhoto[]>(enumParams.ARG_TYPE.URLPHONESLIST);
      const filtered = FilterParams.filterPatternInTitle(body);
      
      return res.status(StatusCodes.OK).json({filtered});
    } catch(error) {
      console.log(error.stack);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  }

  static async getFormated(req: Request, res: Response) {
    try {
      const { body } = await adapter.get<iPhoto[]>(enumParams.ARG_TYPE.URLPHONESLIST);
      const sorted = SortArrays.sortByTitle(body);
      const formated = FormatArray.format(sorted);
      return res.status(StatusCodes.OK).json({formated});
    } catch(error) {
      console.log(error.stack);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  }
}
