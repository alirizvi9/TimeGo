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
    spinner: boolean = false;

    constructor(public http: Http,
        public router: Router,
        private spinnerService: SpinnerService) {
    }

    async show()
    {
        this.spinner = true;
        setTimeout(3000);
        if (this.spinner)
          this.spinnerService.show('mySpinner');
    }

    hide()
    {
        this.spinner = false;
        this.spinnerService.hide('mySpinner');
    }

    get<T>(path: string): Observable<T> {
        this.show();
        return this.intercept(this.http.get(path, this.options).map(res => {
            this.hide();
            return res.json();
        }));
    }

    post<T>(path: string, body?: Object): Observable<T> {
        this.show();
        return this.intercept(this.http.post(path, body, this.options).map(res => {
            this.hide();
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