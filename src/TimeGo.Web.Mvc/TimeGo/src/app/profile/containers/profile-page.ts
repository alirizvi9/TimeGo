import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromProfile from '../reducers';
import * as profileEdit from '../actions/profile-edit';

import {CompanyProfile} from '../models/company-profile.model'

@Component({
    selector: 'profile-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <pc-profile-edit [company]="company$ | async" [isLoaded]="isLoaded$ | async" (save)="saveProfile($event)"></pc-profile-edit>
  `,
})
export class ProfileEditPageComponent {
    company$: Observable<CompanyProfile>;
    isLoaded$: Observable<boolean>;

    constructor(private store: Store<fromProfile.State>) {
        this.company$ = store.select(fromProfile.getCompanyEntity);
        this.isLoaded$ = store.select(fromProfile.getLoadingStatus);
    }

    ngOnInit() {
        this.store.dispatch(new profileEdit.GetAction({}));
    }

    saveProfile(company: CompanyProfile) {
        this.store.dispatch(new profileEdit.SaveAction(company));
    }
}