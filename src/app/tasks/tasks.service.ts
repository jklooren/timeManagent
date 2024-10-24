import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  private tasks = DUMMY_TASKS;

  createANewTask(
    task: { title: string; summary: string; dueDate: string },
    userId: string
  ) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });

  }

  getSelectedUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  
}
