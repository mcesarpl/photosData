import { Request, Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { enumParams } from '../global';
import { HttpClientFactory } from '../factories/HttpClientFactory';
import { Iphoto } from '../interfaces';
import { FormatArray } from '../utils/FormatArray';
import { FilterParams } from '../utils/FilterParams';
import { SortArrays } from '../utils/SortArrays';
import Logger from '../services/Logger';

const adapter = HttpClientFactory.create();
const logger = Logger.logger;

export class PhotosController {
  static async getPhotosUrls(req: Request, res: Response) {
    try {
      const { body } = await adapter.get<Iphoto[]>(enumParams.ARG_TYPE.URLPHONESLIST);
      const urls = FilterParams.filterUrl(body);
      return res.status(StatusCodes.OK).json({ urls });
    } catch (error) {
      logger.error(error.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }

  static async filterProprieties(req: Request, res: Response) {
    try {
      const { body } = await adapter.get<Iphoto[]>(enumParams.ARG_TYPE.URLPHONESLIST);
      const sorted = SortArrays.sortByTitle(body);
      const mainParams = FilterParams.mainParams(sorted);
      
      return res.status(StatusCodes.OK).json({ mainParams });
    } catch (error) {
      logger.error(error.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }

  static async patternTitle(req: Request, res: Response) {
    try {
      const { body } = await adapter.get<Iphoto[]>(enumParams.ARG_TYPE.URLPHONESLIST);
      const titlePattern = FilterParams.filterPatternInTitle(body);
      
      return res.status(StatusCodes.OK).json({ titlePattern });
    } catch (error) {
      logger.error(error.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }

  static async getFormated(req: Request, res: Response) {
    try {
      const { body } = await adapter.get<Iphoto[]>(enumParams.ARG_TYPE.URLPHONESLIST);
      const sorted = SortArrays.sortByTitle(body);
      const formated = FormatArray.format(sorted);
      return res.status(StatusCodes.OK).json({ formated });
    } catch (error) {
      logger.error(error.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
