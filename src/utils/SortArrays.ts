import { Iphoto } from '../interfaces';

export class SortArrays {
  static sortByTitle(photosArray: Iphoto[]) {
    return photosArray.sort((a, b) => {
      if (a.title < b.title) { return -1; }
      if (a.title > b.title) { return 1; }
      return 0;
    });
  }
}