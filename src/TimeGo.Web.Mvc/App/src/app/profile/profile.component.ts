import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service'
import {CompanyProfile} from './models/company-profile.model'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

    weekDays: Array<any> = [{ text: 'Sunday' },
        { text: 'Monday' },
        { text: 'Tuesday' },
        { text: 'Wednesday' },
        { text: 'Thursday' },
        { text: 'Friday' },
        { text: 'Saturday' }];

    timesheets: Array<any> = [{ text: '1' },
        { text: '2' }];

    company: CompanyProfile;

    constructor(private _profileService: ProfileService) { }

    ngOnInit() {
        this._profileService.getCurrentProfile().subscribe(res => {
            this.company = res;
        });
    }

}
