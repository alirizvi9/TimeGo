import { CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
declare var commonServerData: any;

@Injectable()
export class TaskManagerAuthGuard implements CanActivate {
    canActivate() {
        return commonServerData != null && commonServerData.Token != null && commonServerData.Role == "Task Manager";
    }
}