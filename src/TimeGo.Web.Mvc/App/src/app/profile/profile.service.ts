import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {CompanyProfile} from './models/company-profile.model'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var commonServerData: any;

@Injectable()
export class ProfileService {
    headers: Headers =new Headers({
        'Authorization': 'Bearer ' + commonServerData.Token,
        'Access-Control-Allow-Origin' : '*'
    }); 
    options: RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getProfile(id: number): Observable<CompanyProfile> {
        return this.http.get("http://localhost:51816/api/Profile/" + id, this.options).map((response: Response)=>
            response.json())
            .catch(this.handleError);
    }

    getCurrentProfile(): Observable<CompanyProfile> {
        return this.http.get("http://localhost:51816/api/Profile/", this.options)
            .map((response: Response) =>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}