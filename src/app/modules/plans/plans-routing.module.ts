import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PlansComponent } from '../plans/plans.component';
import { PlanAddComponent } from './plan-add/plan-add.component';

const routes: Routes = [
    { path: '', component: PlansComponent },
    { path: 'edit/:id', component: PlanAddComponent },
    { path: 'add', component: PlanAddComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanRoutingModule { }