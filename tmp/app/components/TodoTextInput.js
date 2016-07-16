/// <reference path="../../../typings/index.d.ts" />
var TodoTextInput = (function () {
    /** @ngInject */
    function TodoTextInput(todoService, $window, $timeout) {
        this.todoService = todoService;
        this.$window = $window;
        this.$timeout = $timeout;
        this.editing = this.editing || false;
        this.text = this.text || '';
        if (this.text.length) {
            this.focus();
        }
    }
    TodoTextInput.prototype.handleBlur = function () {
        if (!this.newTodo) {
            this.onSave({ text: this.text });
        }
    };
    TodoTextInput.prototype.handleSubmit = function (e) {
        if (e.keyCode === 13) {
            this.onSave({ text: this.text });
            if (this.newTodo) {
                this.text = '';
            }
        }
    };
    TodoTextInput.prototype.focus = function () {
        var _this = this;
        this.$timeout(function () {
            var element = _this.$window.document.querySelector('.editing .textInput');
            if (element) {
                element.focus();
            }
        }, 0);
    };
    return TodoTextInput;
}());
angular
    .module('app')
    .component('todoTextInput', {
    templateUrl: 'app/components/TodoTextInput.html',
    controller: TodoTextInput,
    bindings: {
        onSave: '&',
        placeholder: '@',
        newTodo: '@',
        editing: '@',
        text: '<'
    }
});
//# sourceMappingURL=TodoTextInput.js.map