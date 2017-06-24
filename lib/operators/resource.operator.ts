import { Observable } from 'rxjs/Observable';

declare module 'rxjs/Observable' {
    interface Observable<T> {
        resource<U>(url: string): Observable<U>;
    }
}

Observable.prototype.resource = function (url) {
    return this
        .filter((request: any) => request._parsedUrl.startsWith(url))
        .map(({ _parsedUrl, ...request }) => ({
            _parsedUrl: _parsedUrl.slice(url.length),
            ...request
        }));
}
