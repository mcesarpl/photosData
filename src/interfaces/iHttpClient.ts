import { iHttpClientResponse } from ".";

export interface iHttpClient {
  get<T>(url: string ): Promise<iHttpClientResponse<T>>;
  post<T>(url: string, data: T): Promise<iHttpClientResponse<T>>;
  put<T>(url: string, data: T ): Promise<iHttpClientResponse<T>>;
  delete<T>(url: string, id: string ): Promise<iHttpClientResponse<T>>;
}