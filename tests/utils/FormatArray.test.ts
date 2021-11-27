import { FormatArray } from '../../src/utils/FormatArray';
import photosArray from '../mocks/photosArray.json';

describe('Sort Array Tests', () => {
  it('Should return an array sorted by title name', async () => {
    const { body } = photosArray;
    const formatedString = FormatArray.format(body);

    expect(formatedString).toEqual("{1} - {beatae similique accusamus ad facilis cum qui sunt}, {2} - {sunt accusamus beatae et facilis cum similique qui}, {3} - {facilis accusamus beatae et cum similique qui sunt}");
  });
});
