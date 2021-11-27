export class SortArrays {
  static sortByTitle<T>(photosArray: T[]) {
    return photosArray.sort((a, b) => {
      if(a['title'] < b['title']) { return -1; }
      if(a['title'] > b['title']) { return 1; }
      return 0;
    });
  }
}