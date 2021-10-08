import { DataService } from './../../services/data.service';
import { ISteps } from './../../interfaces/Steps.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent implements OnInit {
  steps!: ISteps[];
  selected: any;
  isCompleted!: boolean;
  taskPercent!: string;

  constructor(private stepService: DataService) {
    this.steps = stepService.getSteps();
  }

  onSelect(step: ISteps) {
    this.selected = step;

    this.steps.forEach((e) => {
      if (e.id <= step.id) {
        step.status = true;
        this.isCompleted = step.status;
        this.taskPercent = step.text;
      }
    });
  }

  isSelected(step: ISteps) {
    return this.selected === step;
  }

  ngOnInit(): void {}
}
