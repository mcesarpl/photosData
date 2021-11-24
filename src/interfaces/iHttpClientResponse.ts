export interface iHttpClientResponse<T> {
  statusCode: number;
  body: T;
}
