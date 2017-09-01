import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersListItem } from '../../models/users-list-item.model';
import { UsersListPagingModel } from '../../models/users-list-paging.model';

@Component({
    selector: 'up-users-list',
    templateUrl: './users-list.html',
    styleUrls: ['./users-list.scss']

})
export class UsersListComponent {
    @Input() users: UsersListItem[];
    @Input() isLoaded: boolean = false;
    @Input() loading: boolean = false;
    @Input() pagingModel: UsersListPagingModel;
    @Output() order = new EventEmitter<string>();
    @Output() changePage = new EventEmitter<UsersListPagingModel>();
}

