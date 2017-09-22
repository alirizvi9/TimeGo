import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TasksListItem } from '../../models/tasks-list-item.model';
import { AddTask } from '../../models/add-task.model';
import { TasksListPagingModel } from '../../models/tasks-list-paging.model';
import { DeleteTaskModel } from '../../models/delete.model'
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
declare var commonServerData: any;

@Component({
    selector: 'up-tasks-list',
    templateUrl: './tasks.html',
    styleUrls: ['./tasks.scss']
})
export class TasksComponent {
    @Input() tasks: TasksListItem[];
    @Input() isLoaded: boolean = false;
    @Input() loading: boolean = false;
    @Input() pagingModel: TasksListPagingModel;
    @Output() order = new EventEmitter<string>();
    @Output() add = new EventEmitter<AddTask>();
    @Output() changePage = new EventEmitter<TasksListPagingModel>();
    @Output() delete = new EventEmitter<DeleteTaskModel>();
    @Output() allow = new EventEmitter<TasksListItem>();

    role: string;
    deleteId: number;

    addTask: AddTask = {
        TaskName: ""
    };

    selectTask: TasksListItem;
    select: false;

    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
    }

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

    addTaskAction(model: AddTask) {
        this.add.emit(model);
        this.changePage.emit(this.pagingModel);
    }
}

