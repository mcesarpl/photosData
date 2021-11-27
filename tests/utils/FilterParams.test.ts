import { FilterParams } from '../../src/utils/FilterParams';
import photosArray from '../mocks/photosArray.json';

describe('Filter Params Tests', () => {
  it('Should return an array of photos url', async () => {
    const { body } = photosArray;
    const urlArray = FilterParams.filterUrl(body);

    expect(urlArray).toEqual([
      'https://via.placeholder.com/600/86c952',
      'https://via.placeholder.com/600/52c952',
      'https://via.placeholder.com/600/63c952',
    ]);
  });

  it('Should return an array of photos main params', async () => {
    const { body } = photosArray;
    const mainParamsArray = FilterParams.mainParams(body);

    expect(mainParamsArray).toEqual([
      {
        'thumbnailUrl': 'https://via.placeholder.com/150/86c952',
        'title': 'beatae similique accusamus ad facilis cum qui sunt',
        'url': 'https://via.placeholder.com/600/86c952',
      },
      {
        'thumbnailUrl': 'https://via.placeholder.com/150/52c952',
        'title': 'sunt accusamus beatae et facilis cum similique qui',
        'url': 'https://via.placeholder.com/600/52c952',
      },
      {
        'thumbnailUrl': 'https://via.placeholder.com/150/63c952',
        'title': 'facilis accusamus beatae et cum similique qui sunt',
        'url': 'https://via.placeholder.com/600/63c952',
      },
    ]);
  });

  it('Should return an array of photos with \'et\' in title', async () => {
    const { body } = photosArray;
    const patternArray = FilterParams.filterPatternInTitle(body);

    expect(patternArray).toEqual([{
      'albumId': 4,
      'id': 2,
      'thumbnailUrl': 'https://via.placeholder.com/150/52c952',
      'title': 'sunt accusamus beatae et facilis cum similique qui',
      'url': 'https://via.placeholder.com/600/52c952',
    },
    {
      'albumId': 6,
      'id': 3,
      'thumbnailUrl': 'https://via.placeholder.com/150/63c952',
      'title': 'facilis accusamus beatae et cum similique qui sunt',
      'url': 'https://via.placeholder.com/600/63c952',
    },
    ]);
  });
});
