import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', loadChildren: './core/layout/layout.module#LayoutModule' },
    // { path: 'plans', loadChildren: './modules/plans/plans.module#PlansModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }