import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimeoffListItem } from '../../models/timeoff-list-item.model';
import { AddTimeoff } from '../../models/add-timeoff.model';

@Component({
    selector: 'up-timeoff-list',
    templateUrl: './timeoff-list.html',
    styleUrls: ['./timeoff-list.scss']

})
export class TimeoffListComponent {
    @Input() timeoffrequests: TimeoffListItem[];
    @Input() isLoaded: boolean = false;
    @Input() loading: boolean = false;
    @Output() order = new EventEmitter<string>();
    @Output() add = new EventEmitter<AddTimeoff>(); 
    addTimeoff: AddTimeoff = {
        StartDate: new Date(),
        EndDate: new Date(),
        Reasone: "",
        ReturningToWork: new Date()
    };

    ngOnInit() {
    }
}

