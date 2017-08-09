import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service'
import {CompanyProfile} from './models/company-profile.model'
import {AppConstants} from '../common/constants'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

    weekDays = AppConstants.weekDays;

    timesheets = AppConstants.timesheets;

    company: CompanyProfile;


    constructor(private profileService: ProfileService) {}

    ngOnInit() {
        this.profileService.getCurrentProfile().subscribe((res : CompanyProfile) => {
            this.company = res;
        });
    }

    saveProfile() {
        this.profileService.editCurrentProfile(this.company).subscribe();
    }

}
