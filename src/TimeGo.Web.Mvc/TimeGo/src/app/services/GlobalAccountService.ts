import { Injectable } from "@angular/core"
import { AccountService } from "./AccountService"
declare var commonServerData: any;

@Injectable()
export class GlobalAccountService extends AccountService {

    constructor() {
        super();
        this.role = commonServerData.Role;
        this.login = commonServerData.Login;
        this.token = commonServerData.Token;
    };
}