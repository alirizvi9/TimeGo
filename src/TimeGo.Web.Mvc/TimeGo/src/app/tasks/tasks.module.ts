import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksService } from './tasks.service';
import { TasksPageComponent } from './containers/tasks-page';
import { TasksEffects } from './effects/tasks';
import { ComponentsModule } from './components/index'
import { reducers } from './reducers';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        TasksRoutingModule,
        ComponentsModule,
        StoreModule.forFeature('tasksPage', reducers),
        EffectsModule.forFeature([TasksEffects])
    ],
    declarations: [
        TasksPageComponent
    ],
    providers: [TasksService]
})
export class TasksModule { }
