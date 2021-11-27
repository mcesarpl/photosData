import { IHttpClientResponse } from '.';

export interface IHttpClient {
  get<T>(url: string ): Promise<IHttpClientResponse<T>>;
}