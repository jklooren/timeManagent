import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  createANewTask: {title : string; summary: string; dueDate: string}) {
    this.tasks.push({
      id : new Date().getTime().toString(),
      userId : this.id,
      title : task.title,
      summary: task.summary,
      dueDate: task.dueDate
    })
    this.isAddingTask = false;
  }
}
