import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService} from 'src/app/services/todo.service';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      "todo": true,
      "is-completed": this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    // post to server & sync UI when the call returns
    this.todoService.updateTodo(todo).subscribe(resp => todo.completed = !todo.completed);
  }

  onDelete(todo) {
    // tricky thing here is to access the Todos array as a whole (so we can remove our todo from it via Todos.filter())
    // therefore we have to trigger an event on our parent object (todos.component.ts)
    this.deleteTodo.emit(todo);  // the @Output above & the parent component todos.component.html !!!!
  }

}
