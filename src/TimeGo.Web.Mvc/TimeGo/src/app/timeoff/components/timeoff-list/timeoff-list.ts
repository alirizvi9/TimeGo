import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimeoffListItem } from '../../models/timeoff-list-item.model';
import { AddTimeoff } from '../../models/add-timeoff.model';
import { TimeoffListPagingModel } from '../../models/timeoff-list-paging.model';
import { ChangeStatus } from '../../models/chagne-status-timeoff.model'
import { DatePipe } from '@angular/common';
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

    role: string;

    addTimeoff: AddTimeoff = {
        StartDate: new Date(),
        EndDate: new Date(),
        Reasone: "",
        ReturningToWork: new Date(),
    };

    

    ngOnInit() {
        this.role = commonServerData.Role;
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

