import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AlwaysAuthGuard } from './AlwaysAuthGuard'
import { AdminAuthGuard } from './AdminAuthGuard'
import { TaskManagerAuthGuard } from './TaskManagerAuthGuard'
import { RequestService } from './services/RequestService'

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { HttpModule } from '@angular/http';
// Routing Module
import { AppRoutingModule } from './app.routing';
//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { DialogsModule } from "./dialogs/dialogs.module";

import { environment } from '../environments/environment';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([]),
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        DialogsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }, AlwaysAuthGuard, AdminAuthGuard, TaskManagerAuthGuard, RequestService],
    bootstrap: [AppComponent]
})
export class AppModule { }
