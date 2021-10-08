import { Injectable } from '@angular/core';
import { ISteps } from '../interfaces/Steps.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  steps: ISteps[] = [
    {
      id: 0,
      name: 'Step 1',
      status: false,
      text: 'You have completed 25% !!',
    },
    {
      id: 1,
      name: 'Step 2',
      status: false,
      text: 'You have completed 50% !!',
    },
    {
      id: 2,
      name: 'Step 3',
      status: false,
      text: 'You have completed 75% !!',
    },
    {
      id: 3,
      name: 'Finish',
      status: false,
      text: 'Congratulations! You have completed the task !!',
    },
  ];

  getSteps() {
    return this.steps;
  }
}
