import { iPhoto } from "src/interfaces";

export class FormatArray {
  static format(photosArray: iPhoto[]) {
    const formatedArray =  photosArray.map((item) => {
      return `{${item.id}} - {${item.title}}`;
    });

    return formatedArray.join(', ');
  }
}