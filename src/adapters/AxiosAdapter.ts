import axios from 'axios';
import { iHttpClient, iHttpClientResponse, iPhoto } from 'src/interfaces';

export class AxiosAdapter implements iHttpClient {
  async get<T>(url: string): Promise<iHttpClientResponse<T>> {
    const result = await axios.get(url);
    return { statusCode: result.status, body: result.data };
  }
  async post<T>(url: string, data: T): Promise<iHttpClientResponse<T>> {
    const result = await axios.post(url, data);
    return { statusCode: result.status, body: result.data };
  }
  async put<T>(url: string, data: T): Promise<iHttpClientResponse<T>> {
    const result = await axios.put(url, data);
    return { statusCode: result.status, body: result.data };
  }
  async delete<T>(url: string, id: string): Promise<iHttpClientResponse<T>> {
    const result = await axios.delete(`${url}/${id}`);
    return { statusCode: result.status, body: result.data };
  }
}