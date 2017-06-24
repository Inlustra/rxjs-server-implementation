import { RxIncomingMessage } from './model/rx-incoming-request.model';
import { Observable, Subject } from 'rxjs/Rx';
import * as http from 'http';
import * as parsers from './rx-body-parser';

interface HttpRequestCallback {
  req: http.IncomingMessage;
  res: http.ServerResponse;
}

export class RxHttpServer<T = any> extends Observable<RxIncomingMessage<T>> {
  constructor(
    private server,
    private parser: ((request: http.IncomingMessage) => Observable<T>) = parsers.rxJsonBodyParser
  ) {
    super();
    this.source = Observable.fromEvent<HttpRequestCallback>(this.server, 'request', (req, res) => ({
      req,
      res
    })).flatMap(({ req }) => this.parser(req), ({ req }, body) => this.transformRequest(req, body));
  }

  protected transformRequest(req: http.IncomingMessage, body: T): RxIncomingMessage<T> {
    return {
      body,
      req,
      method: req.method,
      headers: req.headers,
      url: req.url,
      _parsedUrl: req.url
    };
  }
}
