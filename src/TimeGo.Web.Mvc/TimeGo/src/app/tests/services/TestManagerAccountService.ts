import { Injectable } from "@angular/core"
import { AccountService } from "../../services/AccountService"

@Injectable()
export class TestManagerAccountService extends AccountService {

    constructor() {
        super();
        this.role = "Task Manager";
        this.login = "testManager";
        this.token = "";
    };
}
