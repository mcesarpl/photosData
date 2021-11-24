import { iPhoto } from "src/interfaces";

export class FilterParams {
  static filter(photosArray: iPhoto[]) {
    return photosArray.map((item) => {
      return item.url;
    });
  }

  static someParams(photosArray: iPhoto[]): { title: String; url: String; thumbnailUrl: String; }[] {
    return photosArray.map((item) => {
      return { title: item.title, url: item.url, thumbnailUrl: item.thumbnailUrl};
    });
  }

  static sortByTitle<T>(photosArray: T[]) {
    return photosArray.sort((a, b) => {
      if(a['title'] < b['title']) { return -1; }
      if(a['title'] > b['title']) { return 1; }
      return 0;
  })
  }
}