import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Timesheets } from '../../models/timesheets.model'
import { Period } from '../../models/period.model'
import { AddModel } from '../../models/add.model'
import { Task } from '../../models/task.model'
import { TimesheetsLine } from '../../models/timesheets-line.model'
import { DatePipe } from '@angular/common';
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
    @Output() addLine = new EventEmitter<Date>();
    @Output() save = new EventEmitter<AddModel>();
    public periodId: number;
    public mytime: Date = new Date();

    ngOnInit() {
    }

    public totalLineTimeHr(line: TimesheetsLine): number
    {
        let endTime = new Date(line.EndTime);
        let startTime = new Date(line.StartTime);
        let diffMs = (+endTime.valueOf() - +startTime.valueOf());
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        return diffHrs;
    }

    public totalLineTimeMin(line: TimesheetsLine): number {
        let endTime = new Date(line.EndTime);
        let startTime = new Date(line.StartTime);
        let diffMs = (+endTime.valueOf() - +startTime.valueOf());
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        return diffMins;
    }

    public totalLineTimeMs(line: TimesheetsLine): number {
        let endTime = new Date(line.EndTime);
        let startTime = new Date(line.StartTime);
        let diffMs = (+endTime.valueOf() - +startTime.valueOf());
        return diffMs;
    }

    public Start(line: TimesheetsLine): Date {
        let startTime = new Date(line.StartTime);
        return startTime;
    }

    public End(line: TimesheetsLine): Date {
        let endTime = new Date(line.EndTime);
        return endTime;
    }

    public totalTimeHr(lines: TimesheetsLine[]):number
    {
        var time = 0;
        for (let line of lines)
        {
            time += this.totalLineTimeMs(line);
        }
        var diffHrs = Math.floor((time % 86400000) / 3600000); // hours
        return diffHrs;
    }

    public totalTimeMin(lines: TimesheetsLine[]): number {
        var time = 0;
        for (let line of lines) {
            time += this.totalLineTimeMs(line);
        }
        var diffMins = Math.round(((time % 86400000) % 3600000) / 60000); // minutes
        return diffMins;
    }


    updateDoB(e) {
        let res = e;
    }
}

