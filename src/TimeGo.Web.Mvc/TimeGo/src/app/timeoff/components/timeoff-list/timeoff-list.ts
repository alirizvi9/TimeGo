import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { TimeoffListItem } from '../../models/timeoff-list-item.model';
import { AddTimeoff } from '../../models/add-timeoff.model';
import { TimeoffListPagingModel } from '../../models/timeoff-list-paging.model';
import { ChangeStatus } from '../../models/chagne-status-timeoff.model'
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
declare var commonServerData: any;

@Component({
    selector: 'up-timeoff-list',
    templateUrl: './timeoff-list.html',
    styleUrls: ['./timeoff-list.scss']

})
export class TimeoffListComponent {
    @Input() timeoffrequests: TimeoffListItem[];
    @Input() isLoaded: boolean = false;
    @Input() loading: boolean = false;
    @Input() pagingModel: TimeoffListPagingModel;
    @Output() order = new EventEmitter<string>();
    @Output() add = new EventEmitter<AddTimeoff>();
    @Output() changeStatus = new EventEmitter<ChangeStatus>();
    @Output() changePage = new EventEmitter<TimeoffListPagingModel>();

    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
    }

    role: string;
    dateNow: Date = new Date();

    addTimeoff: AddTimeoff = {
        StartDate: new Date(),
        EndDate: new Date(),
        Reasone: "",
        ReturningToWork: new Date(),
    };

    ngOnInit() {
        this.role = commonServerData.Role;
    }

    getArrowClass(field: string): string {
        if (field != this.pagingModel.orderBy)
            return "fa fa-sort";
        if (this.pagingModel.IsAscending)
            return "fa fa-sort-asc";
        return "fa fa-sort-desc";
    }

    addTimeoffAction(model: AddTimeoff) {
        this.add.emit(model);
        this.changePage.emit(this.pagingModel);
    }

    changeStatusAction(model: ChangeStatus) {
        this.changeStatus.emit(model);
        this.changePage.emit(this.pagingModel);
    }
}

