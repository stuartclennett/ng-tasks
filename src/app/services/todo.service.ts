import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';  // rxjs = reactive extensions, includes observables

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'Application/JSON'})
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todosURL: string = 'https://jsonplaceholder.typicode.com/todos';
  todosFilter: string = '?_limit=5';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    // ooh this is like generics !!!  an http.get returns an observable of type Todos Array.
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosFilter}`);
  }

  updateTodo(todo: Todo): Observable<any> {
    // PUT requests are for updating (not POST apparently)
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosURL, todo, httpOptions);
  }
}
