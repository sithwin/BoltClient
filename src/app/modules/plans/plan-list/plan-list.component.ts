import { Component, OnInit } from '@angular/core';

import { Plan } from '../../../shared/models/plan';
import { PlanService } from '../../../core/services/plan.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {

  plans: Plan[];

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.getPlans();
  }

  getPlans(): void {
    this.planService.getPlans().subscribe(plans => this.plans = plans);
  }
}
