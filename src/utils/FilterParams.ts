import { Iphoto } from '../interfaces';

export class FilterParams {
  static filterUrl(photosArray: Iphoto[]) {
    return photosArray.map((item) => {
      return item.url;
    });
  }

  static mainParams(photosArray: Iphoto[]): { title: string; url: string; thumbnailUrl: string; }[] {
    return photosArray.map((item) => {
      return { title: item.title, url: item.url, thumbnailUrl: item.thumbnailUrl };
    });
  }

  static filterPatternInTitle(photosArray: Iphoto[]): Iphoto[] {
    return photosArray.filter((photo) => {
      const { title } = photo;
      return title.includes(' et ');
    });
  }
}