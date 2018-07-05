import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RatesListItem } from '../../models/rates-list-item.model';
import { AddRate } from '../../models/add-rates.model';
import { RatesListPagingModel } from '../../models/rates-list-paging.model';
import { DeleteRateModel } from '../../models/delete.model'
import { DatePipe } from '@angular/common';
import { UsersListItem } from '../../../users/models/users-list-item.model'
import { TranslateService } from '@ngx-translate/core';
declare var commonServerData: any;

@Component({
    selector: 'up-rates-list',
    templateUrl: './rates.html',
    styleUrls: ['./rates.scss']

})
export class RatesComponent {
    @Input() rates: RatesListItem[];
    @Input() users: UsersListItem[];
    @Input() isLoaded: boolean = false;
    @Input() loading: boolean = false;
    @Input() pagingModel: RatesListPagingModel;
    @Output() order = new EventEmitter<string>();
    @Output() add = new EventEmitter<AddRate>();
    @Output() changePage = new EventEmitter<RatesListPagingModel>();
    @Output() delete = new EventEmitter<DeleteRateModel>();

    role: string;
    deleteId: number;
    dateNow: Date = new Date();

    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
    }

    getArrowClass(field: string): string {
        if (field != this.pagingModel.orderBy)
            return "fa fa-sort";
        if (this.pagingModel.IsAscending)
            return "fa fa-sort-asc";
        return "fa fa-sort-desc";
    }

    addRate: AddRate = {
        EndDate: new Date(),
        Rate: 0,
        StartDate: new Date(),
        UserId: 0
    };

    ngOnInit() {
        this.role = commonServerData.Role;
    }

    addRateAction(model: AddRate) {
        this.add.emit(model);
        this.changePage.emit(this.pagingModel);
    }

    cleanAddModel() {
      this.addRate = {
        EndDate: new Date(),
        Rate: 0,
        StartDate: new Date(),
        UserId: 0
      };
    }
}

