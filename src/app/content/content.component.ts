import { Component } from '@angular/core';
import {Todo} from '../Todo';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  todos : Todo[] = [];
  newTodo: string;

  saveTodo() {
    if(this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isDone = true;
      this.todos.push(todo);
      this.newTodo = '';
    }
    else{
      alert("Please enter To do")
    }
  }

  done(id:number) {
    this.todos[id].isDone = !this.todos[id].isDone;
  }

  remove(id:number) {
    this.todos = this.todos.filter((v,i) => i !== id)
  }

}
