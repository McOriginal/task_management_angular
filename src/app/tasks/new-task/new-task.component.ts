import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../Type';
import { TaskService } from '../Task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: number;
  @Output() closeModal = new EventEmitter<boolean>();
  private taskService = inject(TaskService);
  entredTitle = '';
  entredDescription = '';
  entredDueDate = '';

  onCloseNewTaskModal() {
    this.closeModal.emit(false);
  }

  onAddNewTask() {
    this.taskService.addTask(
      {
        title: this.entredTitle,
        description: this.entredDescription,
        dueDate: this.entredDueDate,
      },
      this.userId
    );
    this.closeModal.emit(false);
  }
}
