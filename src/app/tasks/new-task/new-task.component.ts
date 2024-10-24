import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() onClick = new EventEmitter();
  @Output() add = new EventEmitter<{title : string; summary: string; dueDate: string}>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onClickCancel() {
    this.onClick.emit();
  }

  onFormSubmit() {
    this.add.emit({
      title : this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
  }
}
