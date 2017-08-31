import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CompanyProfile } from './models/company-profile.model'
import { RequestService } from '../services/RequestService'

@Injectable()
export class ProfileService {
    constructor(private requestService: RequestService) { }

    getProfile(id: number): Observable<CompanyProfile> {
        return this.requestService.get<CompanyProfile>("/api/Profile/" + id);
    }

    getCurrentProfile(): Observable<CompanyProfile> {
        return this.requestService.get<CompanyProfile>("/api/Profile/");
    }

    editCurrentProfile(model: CompanyProfile): Observable<CompanyProfile> {
        return this.requestService.post<CompanyProfile>("/api/Profile/", model);
    }
}