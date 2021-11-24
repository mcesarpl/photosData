import { PhotosController } from "src/controllers/PhotosController";
import { HttpClientFactory } from "./HttpClientFactory";

class PhotosControllerFactory {
  public static create() {
    const httpClient = HttpClientFactory.create();
    return new PhotosController(httpClient);
  }
}

export default PhotosControllerFactory.create();