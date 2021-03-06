/// <reference path="../../../typings/index.d.ts" />

interface ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

let assign = Object.assign ? Object.assign : function(target: any, ...sources: any[]): any {
    return;
};

class Todo {
  id: number;
  completed: boolean;
  text: string;
}

let initialTodo: Todo = {
  text: 'Use AngularJS thanks',
  completed: false,
  id: 0
};

class TodoService {
  addTodo(text: string, todos: Todo[]) {
    return [
      {
        id: (todos.length === 0) ? 0 : todos[0].id + 1,
        completed: false,
        text
      }
    ].concat(todos);
  }

  completeTodo(id: number, todos: Todo[]) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo;
    });
  }

  deleteTodo(id: number, todos: Todo[]) {
    return todos.filter(todo => todo.id !== id);
  }

  editTodo(id: number, text: string, todos: Todo[]) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {text}) :
        todo;
    });
  }

  completeAll(todos: Todo[]) {
    const areAllMarked = todos.every(todo => todo.completed);
    return todos.map(todo => Object.assign({}, todo, {completed: !areAllMarked}));
  }

  clearCompleted(todos: Todo[]) {
    return todos.filter(todo => {
      return todo.completed === false;
    });
  }
}
