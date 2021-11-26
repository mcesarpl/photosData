import { iHttpClientResponse } from ".";

export interface iHttpClient {
  get<T>(url: string ): Promise<iHttpClientResponse<T>>;
}