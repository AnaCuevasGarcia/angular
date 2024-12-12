import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!: string;
  //otra manera, la de arriba ya lo hace
  //@Input() name: string | undefined;
  tasks = [
    {
      id: "t1",
      userId: "u1",
      title: "Master Angular",
      summary: "Learn all the basic and avanced features of Angular & how to apply them.",
      dueDate: '31-12-2025'
    },
    {
      id: "t2",
      userId: "u2",
      title: "Master Angular 2",
      summary: "Learn all the basic and avanced features of Angular & how to apply them.",
      dueDate: '31-12-2025'
    },
    {
      id: "t3",
      userId: "u3",
      title: "Master Angular 3",
      summary: "Learn all the basic and avanced features of Angular & how to apply them.",
      dueDate: '31-12-2025'
    }
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
