import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewTask, Task } from '../Type';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './Task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: number;
  @Input({ required: true }) name!: string;
  isOpenModal: boolean = false;
  constructor(private taskService: TaskService) {}

  onOpenModal() {
    this.isOpenModal = true;
  }

  onTaskClose() {
    this.isOpenModal = false;
  }

  get userTasks(): Task[] {
    return this.taskService.getTasksByUserId(this.userId);
  }
}
