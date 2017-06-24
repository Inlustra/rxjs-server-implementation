import * as http from 'http';

export interface RxIncomingMessage<T> {
    body: T,
    method: string,
    headers: object,
    url: string,
    _parsedUrl: string,
    req: http.IncomingMessage

}
