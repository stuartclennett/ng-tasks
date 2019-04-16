import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() {
    //import services here, don't do much initialisation !
   }

  ngOnInit() {
    this.todos = [
      {id:1,title:'Go to shops',completed:false},
      {id:2,title:'Go riding',completed:true},
      {id:3,title:'Go home',completed:false}
    ]
  }

}
