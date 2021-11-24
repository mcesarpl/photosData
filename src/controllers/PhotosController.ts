import { Request, Response } from "express";
import { iHttpClient } from "../interfaces";
import { enumParams } from "src/global";

export class PhotosController {
  private httpClient: iHttpClient;

  constructor(httpClient: iHttpClient) {
    this.httpClient = httpClient;
  }

  async getPhotosUrls(req: Request, res: Response) {
    try {
      const list = await this.httpClient.get(enumParams.ARG_TYPE.URLPHONESLIST);
      return res.status(200).json({list});
    } catch(error) {
      console.log(error.stack);
      return res.status(500).send();
    }
  }

  async filterProprieties(req: Request, res: Response) {
    try {
      const list = await this.httpClient.get(enumParams.ARG_TYPE.URLPHONESLIST);
      return res.status(200).json({list});
    } catch(error) {
      console.log(error.stack);
      return res.status(500).send();
    }
  }

  async getFormated(req: Request, res: Response) {
    try {
      const list = await this.httpClient.get(enumParams.ARG_TYPE.URLPHONESLIST);
      return res.status(200).json({list});
    } catch(error) {
      console.log(error.stack);
      return res.status(500).send();
    }
  }
}
