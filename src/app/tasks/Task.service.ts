import { Injectable } from '@angular/core';
import { Task } from '../Type';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.tasks = [];
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(
    newTask: { title: string; description: string; dueDate: string },
    userId: number
  ) {
    this.tasks.unshift({
      userId: userId,
      id: this.tasks.length + 1,
      title: newTask.title,
      description: newTask.description,
      dueDate: newTask.dueDate,
      completed: false,
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  removeTask(id: number) {
    const taskToRemove = this.tasks.filter((item) => item.id !== id);
    this.tasks = taskToRemove;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasksByUserId(userId: number) {
    return this.tasks.filter((task) => task.userId === userId);
  }
}
