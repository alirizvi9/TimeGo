import { createSelector } from '@ngrx/store';
import { CompanyProfile } from '../models/company-profile.model';
import * as editProfile from '../actions/profile-edit';

export interface State {
    company: CompanyProfile;
    isLoaded: boolean;
}

export const initialState: State = {
    company: null,
    isLoaded: false
};

export function reducer(
    state = initialState,
    action: editProfile.Actions
): State {
    switch (action.type) {
        case editProfile.GET:
            {
                return {
                    company: state.company,
                    isLoaded: false
                };
            }

        case editProfile.GET_COMPLETE: {
            const loadedCompany = action.payload;
            return {
                company: loadedCompany,
                isLoaded: true
            };
        }

        default: {
            return state;
        }
    }
}

export const getCompany = (state: State) => state.company;
export const getLoadingStatus = (state: State) => state.isLoaded;

