import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { ProfileService } from '../profile.service';
import * as profileEdit from '../actions/profile-edit';
import { CompanyProfile } from '../models/company-profile.model';

@Injectable()
export class ProfileEditEffects {
    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(profileEdit.GET)
        .map(toPayload)
        .switchMap(() => {
            const nextGet$ = this.actions$.ofType(profileEdit.GET).skip(1);
            return this.profileService
                .getCurrentProfile()
                .takeUntil(nextGet$)
                .map((company: CompanyProfile) => new profileEdit.GetCompleteAction(company))
                .catch(() => of(new profileEdit.GetCompleteAction(null)));
        });

    @Effect()
    save$: Observable<Action> = this.actions$
        .ofType(profileEdit.SAVE)
        .map(toPayload)
        .switchMap((company : CompanyProfile) => {
            if (!company) 
                return empty();
            
            return this.profileService
                .editCurrentProfile(company)
                .map((result: any) => new profileEdit.SaveCompleteAction(result))
                .catch(() => of(new profileEdit.SaveCompleteAction(null)));
        });

    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) { }
}