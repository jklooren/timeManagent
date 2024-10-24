import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from "../shared/card/card.component";
import { NewTask } from './task/task.module';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  onAddNewTask(task: {task: NewTask}) {
    this.tasks.push({
      id : new Date().getTime().toString(),
      userId : this.id,
      title : task.,
      summary: task.summary,
      dueDate: task.dueDate
    })
    this.isAddingTask = false;
  }

  onComplete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  tasks = DUMMY_TASKS;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }

  onStartAddClick() {
    this.isAddingTask = true;
  }

  onCancelAdd() {
    this.isAddingTask = false;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
