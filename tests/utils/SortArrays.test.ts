import { SortArrays } from '../../src/utils/SortArrays';
import photosArray from '../mocks/photosArray.json';

describe('Sort Array Tests', () => {
  it('Should return an array sorted by title name', async () => {
    const { body } = photosArray;
    const sortedArray = SortArrays.sortByTitle(body);

    expect(sortedArray).toEqual([
      {
        'albumId': 1,
        'id': 1,
        'thumbnailUrl': 'https://via.placeholder.com/150/86c952',
        'title': 'beatae similique accusamus ad facilis cum qui sunt',
        'url': 'https://via.placeholder.com/600/86c952',
      },
      {
        'albumId': 6,
        'id': 3,
        'thumbnailUrl': 'https://via.placeholder.com/150/63c952',
        'title': 'facilis accusamus beatae et cum similique qui sunt',
        'url': 'https://via.placeholder.com/600/63c952',
      },
      {
        'albumId': 4,
        'id': 2,
        'thumbnailUrl': 'https://via.placeholder.com/150/52c952',
        'title': 'sunt accusamus beatae et facilis cum similique qui',
        'url': 'https://via.placeholder.com/600/52c952',
      },
    ]);
  });
});
