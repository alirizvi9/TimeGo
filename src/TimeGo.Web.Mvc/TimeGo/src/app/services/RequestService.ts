import { Injectable } from "@angular/core"
import { Subscription, Observable } from "rxjs"
import { Http, Headers, URLSearchParams, RequestOptions, Request, RequestMethod } from "@angular/http"
import { Router } from "@angular/router"
import { SpinnerService } from 'angular-spinners';
declare var commonServerData: any;

@Injectable()
export class RequestService {

    headers: Headers = new Headers({
        'Authorization': 'Bearer ' + commonServerData.Token,
        'Content-Type': 'application/json'
    });
    options: RequestOptions = new RequestOptions({ headers: this.headers });
    

    constructor(public http: Http,
        public router: Router,
        private spinnerService: SpinnerService) {
    }

    get<T>(path: string): Observable<T> {
        this.spinnerService.show('mySpinner');
        return this.intercept(this.http.get(path, this.options).map(res => {
            this.spinnerService.hide('mySpinner');
            return res.json();
        }));
    }

    post<T>(path: string, body?: Object): Observable<T> {
        this.spinnerService.show('mySpinner');
        return this.intercept(this.http.post(path, body, this.options).map(res => {
            this.spinnerService.hide('mySpinner');
            return res.json();
        }));
    }

    intercept(observable: Observable<any>) {
        return observable.catch(err => {

            if (err.status === 401) {
                return this.unauthorised();

            } else if (err.status === 403) {
                return this.forbidden();
            } else {
                return Observable.throw(err);
            }
        });
    }

    unauthorised(): Observable<any> {
        window.location.href = '/Login';
        return Observable.empty();
    }

    forbidden(): Observable<any> {
        this.router.navigate(['/']);
        return Observable.empty();
    }
}