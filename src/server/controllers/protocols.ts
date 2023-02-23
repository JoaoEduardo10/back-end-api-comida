export interface IHttpResponse<B> {
  statusCode: number;
  body: B;
}

export interface IHttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export interface IControllers {
  handle(req: IHttpRequest<unknown>): Promise<IHttpResponse<unknown>>;
}
