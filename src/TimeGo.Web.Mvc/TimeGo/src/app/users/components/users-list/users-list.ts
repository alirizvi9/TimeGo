import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersListItem } from '../../models/users-list-item.model';
import { AddEmployee } from '../../models/add-employee.model';
import { InviteEmployee } from '../../models/invite-employee.model';
import { UsersListPagingModel } from '../../models/users-list-paging.model';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    @Output() add = new EventEmitter<AddEmployee>();
    @Output() invite = new EventEmitter<InviteEmployee>();
    @Output() reinvite = new EventEmitter<number>();
    @Output() edit = new EventEmitter<UsersListItem>();

    addEmployee: AddEmployee = {
        Email: "",
        FirstName: "",
        LastName: "",
        Password: "",
        PhoneNumber: "",
        IsAdmin: false
    };
    inviteModel: InviteEmployee = {
        Email: "",
        FirstName: "",
        LastName: "",
        IsAdmin: false
    };

    editModel: UsersListItem = {
        email: "",
        firstName: "",
        id: 0,
        isActive: true,
        isAdmin: true,
        isOvertimeCalculated: true,
        last4Ss: "",
        lastName: "",
        phone: "",
        InviteOn: new Date(),
        IsRegistrate: true
    }

    cloneEditUser(user: UsersListItem) {
        this.editModel = Object.assign({}, user);
    }

    addform: FormGroup;
    inviteform: FormGroup;
    editform: FormGroup;

    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
    }

    getArrowClass(field: string): string {
        if (field != this.pagingModel.orderBy)
            return "fa fa-sort";
        if (this.pagingModel.IsAscending)
            return "fa fa-sort-asc";
        return "fa fa-sort-desc";
    }

    ngOnInit() {
        this.inviteform = new FormGroup({
            FirstName: new FormControl('', Validators.required),
            LastName: new FormControl('', Validators.required),
            Email: new FormControl('', Validators.pattern("^.+@.+\\..+$"))
        });

        this.editform = new FormGroup({
            FirstName: new FormControl('', Validators.required),
            LastName: new FormControl('', Validators.required),
            Email: new FormControl('', Validators.pattern("^.+@.+\\..+$"))
        });

        this.addform = new FormGroup({
            FirstName: new FormControl('', Validators.required),
            LastName: new FormControl('', Validators.required),
            Email: new FormControl('', Validators.pattern("^.+@.+\\..+$")),
            Password: new FormControl('', Validators.minLength(8)),
            PhoneNumber: new FormControl('', Validators.required)
        });
    }

    oldIvite(user: UsersListItem): boolean
    {
        let inviteTime = new Date(user.InviteOn);
        let dateNow = new Date();
        let diffMs = (+dateNow.valueOf() - +inviteTime.valueOf());
        var days = (diffMs / (1000 * 60 * 60 * 24));
        return days >= 14;
    }
}

