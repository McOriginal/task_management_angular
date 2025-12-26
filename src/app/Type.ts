export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Task {
  userId: number;
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

export interface NewTask {
  title: string;
  description: string;
  dueDate: string;
}
