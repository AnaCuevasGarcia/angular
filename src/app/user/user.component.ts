// import { Component, computed,signal } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';
import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
import { type User } from './user.model';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  

  //si es required con se puede pasar ningun valor
  //estos input solo son de lectura
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() =>'assets/users/' + this.avatar)
  

  //required true obliga a que exista un valor
  // @Input({required:true}) id!: string;
  // @Input({required: true}) avatar!: string; 
  // @Input({required: true}) name!: string; 
  //esto es una manera de crear un objeto con los inputs de arriba
  @Input({required:true}) user!: User;
  // @Output() select = new EventEmitter<string>();
  //esta linea reemplaza a la anterior, mas moderan
  select = output<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser(){
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
  }
}
