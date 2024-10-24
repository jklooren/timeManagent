import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from "../shared/card/card.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  constructor(private taskService: TasksService) {}

  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  isAddingTask = false;

  onStartAddClick() {
    this.isAddingTask = true;
  }

  onCancelAdd() {
    this.isAddingTask = false;
  }

}
