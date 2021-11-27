import { iPhoto } from "src/interfaces";

export class FilterParams {
  static filterUrl(photosArray: iPhoto[]) {
    return photosArray.map((item) => {
      return item.url;
    });
  }

  static mainParams(photosArray: iPhoto[]): { title: String; url: String; thumbnailUrl: String; }[] {
    return photosArray.map((item) => {
      return { title: item.title, url: item.url, thumbnailUrl: item.thumbnailUrl};
    });
  }

  static filterPatternInTitle(photosArray: iPhoto[]): iPhoto[] {
    return photosArray.filter((photo) => {
      const { title } = photo;
      return title.includes(' et ');
    });
  }
}