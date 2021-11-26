import axios from 'axios';
import { iHttpClient, iHttpClientResponse, iPhoto } from 'src/interfaces';

export class AxiosAdapter implements iHttpClient {
  async get<T>(url: string): Promise<iHttpClientResponse<T>> {
    const result = await axios.get(url);
    return { statusCode: result.status, body: result.data };
  }
}