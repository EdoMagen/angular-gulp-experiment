/// <reference path="../../../typings/index.d.ts" />
var assign = Object.assign ? Object.assign : function (target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    return;
};
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());
var initialTodo = {
    text: 'Use AngularJS with gulp',
    completed: false,
    id: 0
};
var TodoService = (function () {
    function TodoService() {
    }
    TodoService.prototype.addTodo = function (text, todos) {
        return [
            {
                id: (todos.length === 0) ? 0 : todos[0].id + 1,
                completed: false,
                text: text
            }
        ].concat(todos);
    };
    TodoService.prototype.completeTodo = function (id, todos) {
        return todos.map(function (todo) {
            return todo.id === id ?
                Object.assign({}, todo, { completed: !todo.completed }) :
                todo;
        });
    };
    TodoService.prototype.deleteTodo = function (id, todos) {
        return todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoService.prototype.editTodo = function (id, text, todos) {
        return todos.map(function (todo) {
            return todo.id === id ?
                Object.assign({}, todo, { text: text }) :
                todo;
        });
    };
    TodoService.prototype.completeAll = function (todos) {
        var areAllMarked = todos.every(function (todo) { return todo.completed; });
        return todos.map(function (todo) { return Object.assign({}, todo, { completed: !areAllMarked }); });
    };
    TodoService.prototype.clearCompleted = function (todos) {
        return todos.filter(function (todo) {
            return todo.completed === false;
        });
    };
    return TodoService;
}());
//# sourceMappingURL=todos.js.map