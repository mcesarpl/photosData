import axios from 'axios';
import { IHttpClient, IHttpClientResponse } from '../interfaces';

export class AxiosAdapter implements IHttpClient {
  async get<T>(url: string): Promise<IHttpClientResponse<T>> {
    const result = await axios.get(url);
    return { statusCode: result.status, body: result.data };
  }
}