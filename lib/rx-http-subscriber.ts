import { RxServerResponse } from './model/rx-server-response.model';
import { Observable } from 'rxjs/Rx';
export class RxHttpSubscriber {

    private observables: Observable<RxServerResponse>[];

    constructor(...observables: Observable<RxServerResponse>[]) {
        this.observables = observables;
    }

    init() {
        this.observables.forEach(observable => {

        });
    }
}
