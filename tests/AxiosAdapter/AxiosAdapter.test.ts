import { AxiosAdapter } from '../../src/adapters/AxiosAdapter';
import { Iphoto } from '../../src/interfaces/Iphoto';
import { enumParams } from '../../src/global';

describe('Axios Adapter Tests', () => {
  it('should return value when called', async () => {
    const axiosAdapter = new AxiosAdapter();

    const result = await axiosAdapter.get<Iphoto[]>(enumParams.ARG_TYPE.URLPHONESLIST);

    expect(result.statusCode).toBe(200);
    expect(result.body[0]).toEqual({
      'albumId': 1,
      'id': 1,
      'thumbnailUrl': 'https://via.placeholder.com/150/92c952',
      'title': 'accusamus beatae ad facilis cum similique qui sunt',
      'url': 'https://via.placeholder.com/600/92c952',
    });
  });
});
