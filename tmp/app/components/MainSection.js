/// <reference path="../../../typings/index.d.ts" />
var MainSection = (function () {
    /** @ngInject */
    function MainSection(todoService) {
        this.todoService = todoService;
        this.selectedFilter = visibilityFilters[this.filter];
        this.completeReducer = function (count, todo) { return todo.completed ? count + 1 : count; };
    }
    MainSection.prototype.handleClearCompleted = function () {
        this.todos = this.todoService.clearCompleted(this.todos);
    };
    MainSection.prototype.handleCompleteAll = function () {
        this.todos = this.todoService.completeAll(this.todos);
    };
    MainSection.prototype.handleShow = function (filter) {
        this.filter = filter;
        this.selectedFilter = visibilityFilters[filter];
    };
    MainSection.prototype.handleChange = function (id) {
        this.todos = this.todoService.completeTodo(id, this.todos);
    };
    MainSection.prototype.handleSave = function (e) {
        if (e.text.length === 0) {
            this.todos = this.todoService.deleteTodo(e.id, this.todos);
        }
        else {
            this.todos = this.todoService.editTodo(e.id, e.text, this.todos);
        }
    };
    MainSection.prototype.handleDestroy = function (e) {
        this.todos = this.todoService.deleteTodo(e, this.todos);
    };
    return MainSection;
}());
angular
    .module('app')
    .component('mainSection', {
    templateUrl: 'app/components/MainSection.html',
    controller: MainSection,
    bindings: {
        todos: '=',
        filter: '<'
    }
});
//# sourceMappingURL=MainSection.js.map