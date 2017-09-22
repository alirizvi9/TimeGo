import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersListItem } from '../../models/users-list-item.model';
import { AddEmployee } from '../../models/add-employee.model';
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
    @Output() invite = new EventEmitter<string>();

    addEmployee: AddEmployee = {
        Email: "",
        FirstName: "",
        LastName: "",
        Password: "",
        PhoneNumber: ""
    };
    inviteEmail: "";

    addform: FormGroup;
    inviteform: FormGroup;

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
            Email: new FormControl('', [
                Validators.required,
                Validators.pattern("^.+@.+\\..+$")
            ])
        });

        this.addform = new FormGroup({
            FirstName: new FormControl('', Validators.required),
            LastName: new FormControl('', Validators.required),
            Email: new FormControl('', [
                Validators.required,
                Validators.pattern("^.+@.+\\..+$")
            ]),
            Password: new FormControl('', [
                Validators.minLength(8),
                Validators.required
            ]),
            PhoneNumber: new FormControl('', Validators.required)
        });
    }
}

