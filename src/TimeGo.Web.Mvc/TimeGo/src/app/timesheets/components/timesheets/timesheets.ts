import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Timesheets } from '../../models/timesheets.model'
import { Period } from '../../models/period.model'
import { Task } from '../../models/task.model'
import { TimesheetsLine } from '../../models/timesheets-line.model'
import { DatePipe } from '@angular/common';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
declare var commonServerData: any;

@Component({
    selector: 'up-timesheets',
    templateUrl: './timesheets.html',
    styleUrls: ['./timesheets.scss']
})

export class TimesheetsComponent {
    @Input() timesheets: Timesheets;
    @Input() isLoaded: boolean = false;
    @Input() loading: boolean = false;
    @Input() periods: Period[];
    @Input() tasks: Task[];
    @Output() selectPeriod = new EventEmitter<number>();

    ngOnInit() {
    }

    public totalLineTime(line: TimesheetsLine): number
    {
        var result = (+line.EndTime.valueOf() - +line.StartTime.valueOf()) / 1000 / 60 / 60;
        return result;
    }

    public totalTime(lines: TimesheetsLine[]):number
    {
        var time = 0;
        for (let line of lines)
        {
            time += this.totalLineTime(line);
        }
        return time;
    }
    
}

