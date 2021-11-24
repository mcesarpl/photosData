import { AxiosAdapter } from "src/adapters/AxiosAdapter";
import { iHttpClient } from "src/interfaces";

export class HttpClientFactory {
  public static create(): iHttpClient {
    return new AxiosAdapter();
  }
}