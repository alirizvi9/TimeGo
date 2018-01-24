import { Injectable } from "@angular/core"
import { AccountService } from "../../services/AccountService"

@Injectable()
export class TestEmployeeAccountService extends AccountService {

    constructor() {
        super();
        this.role = "Employee";
        this.login = "Employee";
        this.token = "";
    };
}