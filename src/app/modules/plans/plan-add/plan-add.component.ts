import { Component, OnInit } from '@angular/core';
import { Plan } from '../../../shared/models/plan';

@Component({
  selector: 'app-plan-add',
  templateUrl: './plan-add.component.html',
  styleUrls: ['./plan-add.component.css']
})
export class PlanAddComponent implements OnInit {

  plan: Plan = {
    planCode: 'DAP01',
    planName: 'CLASSIC LIFELINE ACCELERATOR',
    description: "",
    productCode: "P2033",
    effectiveDate: new Date('2005/01/01')
  };

  constructor() { }

  ngOnInit() {
  }

}
