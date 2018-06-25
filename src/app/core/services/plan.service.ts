import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Plan } from '../../shared/models/plan';
import { Plans } from '../mocks/plan-mock';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private messageService: MessageService) { }

  getPlans(): Observable<Plan[]> {
    this.messageService.add('Get plan recrods!');
    return of(Plans);
  }
}
