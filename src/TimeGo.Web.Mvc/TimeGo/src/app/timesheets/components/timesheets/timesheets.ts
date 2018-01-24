import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Timesheets } from '../../models/timesheets.model'
import { Period } from '../../models/period.model'
import { AddModel } from '../../models/add.model'
import { Task } from '../../models/task.model'
import { TimesheetsLine } from '../../models/timesheets-line.model'
import { UsersListItem } from '../../../users/models/users-list-item.model'
import { SelectModel } from '../../models/select-period.model'
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../../services/AccountService'

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
    @Input() users: UsersListItem[];
    @Output() selectPeriod = new EventEmitter<SelectModel>();
    @Output() addLine = new EventEmitter<Date>();
    @Output() save = new EventEmitter<AddModel>();
    @Output() submite = new EventEmitter<number>();
    @Output() approve = new EventEmitter<number>();
    @Output() unlock = new EventEmitter<number>();
    @Output() delete = new EventEmitter<TimesheetsLine>();

    role: string;
    public periodId: number;
    public userId: number;
    public mytime: Date = new Date();

    constructor(private translate: TranslateService, account: AccountService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
        this.role = account.role;
    }

    ngOnInit() {
    }

    public totalLineTimeHr(line: TimesheetsLine): number {
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

    public totalTimeHr(lines: TimesheetsLine[]): number {
        var time = 0;
        for (let line of lines) {
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

    public checkChange(currentLine: TimesheetsLine, lines: TimesheetsLine[]) {
        this.checkIntersection(currentLine, lines);
        for (let line of lines) {
            if (line.Date == currentLine.Date && line.ValidationError != null) {
                this.checkIntersection(line, lines);
            }
        }
        if (currentLine.StartTime > currentLine.EndTime)
            currentLine.ValidationError = "Time range is not valid";
        else
            if (currentLine.ValidationError == "Time range is not valid")
                currentLine.ValidationError = null;
    }

    public checkIntersection(currentLine: TimesheetsLine, lines: TimesheetsLine[]) {
        var error = false;
        for (let line of lines) {
            if (line.Date == currentLine.Date && line != currentLine) {
                if (line.EndTime > currentLine.StartTime && line.StartTime < currentLine.EndTime) {
                    currentLine.ValidationError = "Time range has intersection";
                    error = true;
                }

                if (line.StartTime < currentLine.EndTime && line.EndTime > currentLine.StartTime) {
                    currentLine.ValidationError = "Time range has intersection";
                    error = true;
                }
            }
        }
        if (!error) {
            currentLine.ValidationError = null;
        }
    }


    updateDoB(e) {
        let res = e;
    }
}

