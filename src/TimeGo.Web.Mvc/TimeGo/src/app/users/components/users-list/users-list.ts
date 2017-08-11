import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersListItem } from '../../models/users-list-item.model';

@Component({
    selector: 'up-users-list',
    templateUrl: './users-list.html',
    styleUrls: ['./users-list.scss']

})
export class UsersListComponent {
    @Input() users: UsersListItem[];
    @Input() isLoaded: boolean = false;
    @Input() loading: boolean = false;
    @Output() order = new EventEmitter<string>();
}

