import { iPhoto } from "src/interfaces";

export class FilterParams {
  static filter(photosArray: iPhoto[]) {
    return photosArray.map((item) => {
      return item.url;
    });
  }
}