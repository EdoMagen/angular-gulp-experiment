/// <reference path="../../../typings/index.d.ts" />
var Header = (function () {
    /** @ngInject */
    function Header(todoService) {
        this.todoService = todoService;
    }
    Header.prototype.handleSave = function (text) {
        if (text.length !== 0) {
            this.todos = this.todoService.addTodo(text, this.todos);
        }
    };
    return Header;
}());
angular
    .module('app')
    .component('headerComponent', {
    templateUrl: 'app/components/Header.html',
    controller: Header,
    bindings: {
        todos: '='
    }
});
//# sourceMappingURL=Header.js.map