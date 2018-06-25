import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlanRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';
import { PlanAddComponent } from './plan-add/plan-add.component';
import { PlanListComponent } from './plan-list/plan-list.component';

@NgModule({
    imports: [CommonModule, FormsModule, PlanRoutingModule],
    declarations: [PlansComponent, PlanAddComponent, PlanListComponent]
})
export class PlansModule { }