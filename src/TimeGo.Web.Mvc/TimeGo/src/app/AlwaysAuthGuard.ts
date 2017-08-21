import { CanActivate } from "@angular/router";
import { URLSearchParams } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
declare var commonServerData: any;

@Injectable()
export class AlwaysAuthGuard implements CanActivate {
    canActivate() {
        console.log('AlwaysAuthGuard');
        return commonServerData != null && commonServerData.Token != null;
    }
}