import { Iphoto } from '../interfaces';

export class FormatArray {
  static format(photosArray: Iphoto[]) {
    const formatedArray =  photosArray.map((item) => {
      return `{${item.id}} - {${item.title}}`;
    });

    return formatedArray.join(', ');
  }
}