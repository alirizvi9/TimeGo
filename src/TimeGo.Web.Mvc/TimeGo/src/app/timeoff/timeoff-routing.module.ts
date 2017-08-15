﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeoffComponent } from './timeoff.component';

const routes: Routes = [
  {
    path: '',
    component: TimeoffComponent,
    data: {
      title: 'Timeoff Requests'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeoffRoutingModule { }