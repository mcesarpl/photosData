export interface IHttpClientResponse<T> {
  statusCode: number;
  body: T;
}
