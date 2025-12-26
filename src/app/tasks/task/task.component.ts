import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../Type';
import { TaskService } from '../Task.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completed = new EventEmitter<number>();
  private taskService = inject(TaskService);

  onComplete() {
    this.taskService.removeTask(this.task.id);
  }
}
