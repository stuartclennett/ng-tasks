import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // create our new todo item
    const todo = {
      title: this.title,
      completed: false
    };
    // we need access to the parents todo array, 
    // so need to emit this upwards (see Emitter import up top)
    this.addTodo.emit(todo);
    this.title = '';
  }

}
