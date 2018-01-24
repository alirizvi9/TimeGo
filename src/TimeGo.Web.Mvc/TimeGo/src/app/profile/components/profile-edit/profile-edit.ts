import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CompanyProfile } from '../../models/company-profile.model';
import { AppConstants } from '../../../common/constants'
import { TranslateService } from '@ngx-translate/core';
declare var commonServerData: any;

@Component({
    selector: 'pc-profile-edit',
    templateUrl: './profile-edit.html',
    styleUrls: ['./profile-edit.scss']

})
export class ProfileEditComponent {
    @Input() company: CompanyProfile;
    @Input() isLoaded: boolean = false;
    @Output() save = new EventEmitter<CompanyProfile>();

    role: string;
    weekDays = AppConstants.weekDays;
    timesheets = AppConstants.timesheets;

    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
    }

    ngOnInit() {
        this.role = commonServerData.Role;
    }
}

