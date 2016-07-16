/// <reference path="../../../typings/index.d.ts" />
describe('MainSection component', function () {
    var MockTodoService = (function () {
        function MockTodoService() {
        }
        MockTodoService.prototype.addTodo = function () { return; };
        MockTodoService.prototype.editTodo = function () { return; };
        MockTodoService.prototype.deleteTodo = function () { return; };
        MockTodoService.prototype.completeTodo = function () { return; };
        MockTodoService.prototype.completeAll = function () { return; };
        MockTodoService.prototype.clearCompleted = function () { return; };
        return MockTodoService;
    }());
    var component;
    beforeEach(angular.mock.module('app', function ($provide) {
        $provide.factory('mainSection', function () {
            return {
                templateUrl: 'app/components/MainSection.html'
            };
        });
    }));
    beforeEach(angular.mock.module('app', function ($provide) {
        $provide.factory('todoService', function () {
            return new MockTodoService();
        });
    }));
    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function ($componentController) {
        component = $componentController('mainSection', {}, {});
    }));
    it('shoud call clearCompleted', function () {
        spyOn(component.todoService, 'clearCompleted').and.callThrough();
        component.handleClearCompleted();
        expect(component.todoService.clearCompleted).toHaveBeenCalled();
    });
    it('shoud call completeAll', function () {
        spyOn(component.todoService, 'completeAll').and.callThrough();
        component.handleCompleteAll();
        expect(component.todoService.completeAll).toHaveBeenCalled();
    });
    it('shoud set selectedFilter', function () {
        component.handleShow('show_completed');
        expect(component.selectedFilter.type).toEqual('show_completed');
        expect(component.selectedFilter.filter({ completed: true })).toEqual(true);
    });
    it('shoud call completeTodo', function () {
        spyOn(component.todoService, 'completeTodo').and.callThrough();
        component.handleChange();
        expect(component.todoService.completeTodo).toHaveBeenCalled();
    });
    it('shoud call deleteTodo', function () {
        spyOn(component.todoService, 'deleteTodo').and.callThrough();
        component.handleSave({ text: '' });
        expect(component.todoService.deleteTodo).toHaveBeenCalled();
    });
    it('shoud call editTodo', function () {
        spyOn(component.todoService, 'editTodo').and.callThrough();
        component.handleSave({ text: 'Hello' });
        expect(component.todoService.editTodo).toHaveBeenCalled();
    });
    it('shoud call deleteTodo', function () {
        spyOn(component.todoService, 'deleteTodo').and.callThrough();
        component.handleDestroy();
        expect(component.todoService.deleteTodo).toHaveBeenCalled();
    });
});
//# sourceMappingURL=MainSection.spec.js.map