/// <reference path="../../../typings/index.d.ts" />
var App = (function () {
    function App() {
        this.todos = [initialTodo];
        this.filter = SHOW_ALL;
    }
    return App;
}());
angular
    .module('app')
    .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App
});
//# sourceMappingURL=App.js.map