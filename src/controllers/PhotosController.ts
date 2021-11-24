import { Request, Response } from "express";
import { enumParams } from "src/global";
import { HttpClientFactory } from "@factories/HttpClientFactory";
import { FilterParams } from "src/utils/FilterParams";
import { iPhoto } from "src/interfaces";

const adapter = HttpClientFactory.create();

export class PhotosController {
  static async getPhotosUrls(req: Request, res: Response) {
    try {
      const { body } = await adapter.get<iPhoto[]>(enumParams.ARG_TYPE.URLPHONESLIST);
      const filtered = FilterParams.filter(body);
      return res.status(200).json({filtered});
    } catch(error) {
      console.log(error.stack);
      return res.status(500).send();
    }
  }

  static async filterProprieties(req: Request, res: Response) {
    try {
      const list = await adapter.get(enumParams.ARG_TYPE.URLPHONESLIST);
      return res.status(200).json({list});
    } catch(error) {
      console.log(error.stack);
      return res.status(500).send();
    }
  }

  static async getFormated(req: Request, res: Response) {
    try {
      const list = await adapter.get(enumParams.ARG_TYPE.URLPHONESLIST);
      return res.status(200).json({list});
    } catch(error) {
      console.log(error.stack);
      return res.status(500).send();
    }
  }
}
