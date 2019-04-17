import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {
    //import services here, don't do much initialisation !

   }

  ngOnInit() {
    // .subscribe is like .then 
    this.todoService.todosFilter = '?_limit=10';
    this.todoService.getTodos().subscribe(response => {
      this.todos = response;
    });
  }

  deleteTodo(todo : Todo) {
    console.log('delete called in the Todos component')
    this.todoService.deleteTodo(todo).subscribe(resp => {
      // there should be no resp object (delete requests don't return anything)
      // so here we will delete the item from our local array & therefore update the UI
      this.todos = this.todos.filter(item => item.id != todo.id);
    });
  }

  addTodo(todo : Todo) {
    // console.dir(todo);
    this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo));
  }

}
