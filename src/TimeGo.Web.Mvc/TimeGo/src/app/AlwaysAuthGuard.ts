import { CanActivate, Router } from "@angular/router";
import { URLSearchParams } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
declare var commonServerData: any;

@Injectable()
export class AlwaysAuthGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate() {
        console.log('AlwaysAuthGuard');
        if (commonServerData != null && commonServerData.Token != null)
            return true;
        window.location.href = '/Login';
        return false;
    }
}