import { RequestHandler } from '_debugger';
import { Observable } from 'rxjs/Rx';
import * as http from 'http';


export function rxStringBodyParser(req: http.IncomingMessage): Observable<string> {
    return Observable.fromEvent(req, 'data')
        .takeUntil(Observable.fromEvent(req, 'end'))
        .reduce((body: string, delta: string) => body + delta, '')
}

export function rxJsonBodyParser(req: http.IncomingMessage): Observable<any> {
    return rxStringBodyParser(req).last().map((str) => JSON.parse(str));
}
