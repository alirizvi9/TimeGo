import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PeriodListItem } from '../../models/period-list-item.model';
import { AddPeriod } from '../../models/add-period.model';
import { PeriodListPagingModel } from '../../models/period-list-paging.model';
import { ChangeStatus } from '../../models/chagne-status-period.model'
import { DeletePeriodModel } from '../../models/delete.model'
import { DatePipe } from '@angular/common';
declare var commonServerData: any;

@Component({
    selector: 'up-period-list',
    templateUrl: './period-list.html',
    styleUrls: ['./period.scss']

})
export class PeriodListComponent {
    @Input() periods: PeriodListItem[];
    @Input() isLoaded: boolean = false;
    @Input() loading: boolean = false;
    @Input() pagingModel: PeriodListPagingModel;
    @Output() order = new EventEmitter<string>();
    @Output() add = new EventEmitter<AddPeriod>();
    @Output() changeStatus = new EventEmitter<ChangeStatus>();
    @Output() changePage = new EventEmitter<PeriodListPagingModel>();
    @Output() delete = new EventEmitter<DeletePeriodModel>();

    role: string;

    addPeriod: AddPeriod = {
        Reminder1: new Date(),
        Reminder2: new Date(),
        StartDate: new Date()
    };

    

    ngOnInit() {
        this.role = commonServerData.Role;
    }

    addPeriodAction(model: AddPeriod) {
        this.add.emit(model);
        this.changePage.emit(this.pagingModel);
    }

    changeStatusAction(model: ChangeStatus) {
        this.changeStatus.emit(model);
        this.changePage.emit(this.pagingModel);
    }
}

