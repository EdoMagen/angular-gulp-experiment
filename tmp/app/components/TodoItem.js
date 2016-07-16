/// <reference path="../../../typings/index.d.ts" />
/**
*@Author Edo Magen
*
*@Description The basic TodoItem class - some more description would be helpful here
* Testing if a second line works
*
*@returns a TodoItem
*/
var TodoItem = (function () {
    function TodoItem() {
        this.editing = false;
    }
    TodoItem.prototype.handleDoubleClick = function () {
        this.editing = true;
    };
    TodoItem.prototype.handleSave = function (text) {
        this.onSave({
            todo: {
                text: text,
                id: this.todo.id
            }
        });
        this.editing = false;
    };
    TodoItem.prototype.handleDestroy = function (id) {
        this.onDestroy({ id: id });
    };
    return TodoItem;
}());
angular
    .module('app')
    .component('todoItem', {
    templateUrl: 'app/components/TodoItem.html',
    controller: TodoItem,
    bindings: {
        todo: '<',
        onDestroy: '&',
        onChange: '&',
        onSave: '&'
    }
});
//# sourceMappingURL=TodoItem.js.map