/// <reference path="../../../typings/index.d.ts" />
function routesConfig(t,e,o){o.html5Mode(!0).hashPrefix("!"),e.otherwise("/"),t.state("app",{url:"/",template:"<app></app>"})}function showAll(){return!0}function showCompleted(t){return t.completed}function showActive(t){return!t.completed}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"];var assign=Object.assign?Object.assign:function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o]},Todo=function(){function t(){}return t}(),initialTodo={text:"Use AngularJS with gulp",completed:!1,id:0},TodoService=function(){function t(){}return t.prototype.addTodo=function(t,e){return[{id:0===e.length?0:e[0].id+1,completed:!1,text:t}].concat(e)},t.prototype.completeTodo=function(t,e){return e.map(function(e){return e.id===t?Object.assign({},e,{completed:!e.completed}):e})},t.prototype.deleteTodo=function(t,e){return e.filter(function(e){return e.id!==t})},t.prototype.editTodo=function(t,e,o){return o.map(function(o){return o.id===t?Object.assign({},o,{text:e}):o})},t.prototype.completeAll=function(t){var e=t.every(function(t){return t.completed});return t.map(function(t){return Object.assign({},t,{completed:!e})})},t.prototype.clearCompleted=function(t){return t.filter(function(t){return t.completed===!1})},t}();angular.module("app",["ui.router"]).service("todoService",TodoService),angular.module("app").config(routesConfig),angular.module("app").run(["$templateCache",function(t){t.put("app/components/Footer.html",'<footer class="footer">\n  <span class="todo-count">\n    <strong>{{$ctrl.activeCount || \'No\'}}</strong> {{$ctrl.activeCount === 1 ? \'item\' : \'items\'}} left\n  </span>\n  <ul class="filters">\n    <li key="filter" ng-repeat="filter in $ctrl.filters">\n      <a ng-class="{\'selected\': filter === $ctrl.selectedFilter.type}" ng-click="$ctrl.handleChange(filter)">{{$ctrl.filterTitles[filter]}}</a>\n    </li>\n  </ul>\n  <button ng-if="$ctrl.completedCount > 0" class="clear-completed" ng-click="$ctrl.handleClear()">\n    Clear completed\n  </button>\n</footer>'),t.put("app/components/Header.html",'<header class="header">\n  <h1>todos</h1>\n  <todo-text-input new-todo="true" on-save="$ctrl.handleSave(text)" placeholder="What needs to be done?"></todo-text-input>\n</header>\n'),t.put("app/components/MainSection.html",'<section class="main">\n  <input ng-if="$ctrl.todos.length" class="toggle-all" type="checkbox" ng-checked="$ctrl.todos.reduce($ctrl.completeReducer, 0) === $ctrl.todos.length" ng-click="$ctrl.handleCompleteAll()">\n  <ul class="todo-list">\n    <todo-item ng-repeat="todo in $ctrl.todos.filter($ctrl.selectedFilter.filter)" todo="todo" on-destroy="$ctrl.handleDestroy(id)" on-change="$ctrl.handleChange(id)" on-save="$ctrl.handleSave(todo)"></todo-item>\n  </ul>\n  <footer-component ng-if="$ctrl.todos.length" completed-count="$ctrl.todos.reduce($ctrl.completeReducer, 0)" active-count="$ctrl.todos.length - $ctr.todos.reduce($ctrl.completeReducer, 0)" filter="$ctrl.selectedFilter" on-clear-completed="$ctrl.handleClearCompleted()" on-show="$ctrl.handleShow(filter)"></footer-component>\n</section>'),t.put("app/components/TodoItem.html",'<li ng-class="{\'editing\': $ctrl.editing, \'completed\': $ctrl.todo.completed}">\n  <todo-text-input ng-if="$ctrl.editing" text="$ctrl.todo.text" editing="$ctrl.editing" on-save="$ctrl.handleSave(text)"></todo-text-input>\n  <div class="view" ng-if="!$ctrl.editing">\n    <input class="toggle" type="checkbox" ng-checked="$ctrl.todo.completed" ng-click="$ctrl.onChange({id: $ctrl.todo.id})">\n    <label ng-dblclick="$ctrl.handleDoubleClick()">{{$ctrl.todo.text}}</label>\n    <button class="destroy" ng-click="$ctrl.handleDestroy($ctrl.todo.id)"></button>\n  </div>\n</li>'),t.put("app/components/TodoTextInput.html",'<input class="textInput" ng-class="{\'edit\': $ctrl.editing, \'new-todo\': $ctrl.newTodo}" ng-model="$ctrl.text" ng-keypress="$ctrl.handleSubmit($event)" ng-blur="$ctrl.handleBlur()" placeholder="{{$ctrl.placeholder}}" type="text">'),t.put("app/containers/App.html",'<header-component todos="$ctrl.todos"></header-component>\n<main-section todos="$ctrl.todos" filter="$ctrl.filter"></main-section>\n')}]);var Footer=function(){function t(){this.filters=[SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED],this.filterTitles=(t={},t[SHOW_ALL]="All",t[SHOW_ACTIVE]="Active",t[SHOW_COMPLETED]="Completed",t);var t}return t.prototype.handleClear=function(){this.onClearCompleted()},t.prototype.handleChange=function(t){this.onShow({filter:t})},t}();angular.module("app").component("footerComponent",{templateUrl:"app/components/Footer.html",controller:Footer,bindings:{completedCount:"<",activeCount:"<",selectedFilter:"<filter",onClearCompleted:"&",onShow:"&"}});var Header=function(){function t(t){this.todoService=t}return t.$inject=["todoService"],t.prototype.handleSave=function(t){0!==t.length&&(this.todos=this.todoService.addTodo(t,this.todos))},t}();angular.module("app").component("headerComponent",{templateUrl:"app/components/Header.html",controller:Header,bindings:{todos:"="}});var MainSection=function(){function t(t){this.todoService=t,this.selectedFilter=visibilityFilters[this.filter],this.completeReducer=function(t,e){return e.completed?t+1:t}}return t.$inject=["todoService"],t.prototype.handleClearCompleted=function(){this.todos=this.todoService.clearCompleted(this.todos)},t.prototype.handleCompleteAll=function(){this.todos=this.todoService.completeAll(this.todos)},t.prototype.handleShow=function(t){this.filter=t,this.selectedFilter=visibilityFilters[t]},t.prototype.handleChange=function(t){this.todos=this.todoService.completeTodo(t,this.todos)},t.prototype.handleSave=function(t){0===t.text.length?this.todos=this.todoService.deleteTodo(t.id,this.todos):this.todos=this.todoService.editTodo(t.id,t.text,this.todos)},t.prototype.handleDestroy=function(t){this.todos=this.todoService.deleteTodo(t,this.todos)},t}();angular.module("app").component("mainSection",{templateUrl:"app/components/MainSection.html",controller:MainSection,bindings:{todos:"=",filter:"<"}});var TodoItem=function(){function t(){this.editing=!1}return t.prototype.handleDoubleClick=function(){this.editing=!0},t.prototype.handleSave=function(t){this.onSave({todo:{text:t,id:this.todo.id}}),this.editing=!1},t.prototype.handleDestroy=function(t){this.onDestroy({id:t})},t}();angular.module("app").component("todoItem",{templateUrl:"app/components/TodoItem.html",controller:TodoItem,bindings:{todo:"<",onDestroy:"&",onChange:"&",onSave:"&"}});var TodoTextInput=function(){function t(t,e,o){this.todoService=t,this.$window=e,this.$timeout=o,this.editing=this.editing||!1,this.text=this.text||"",this.text.length&&this.focus()}return t.$inject=["todoService","$window","$timeout"],t.prototype.handleBlur=function(){this.newTodo||this.onSave({text:this.text})},t.prototype.handleSubmit=function(t){13===t.keyCode&&(this.onSave({text:this.text}),this.newTodo&&(this.text=""))},t.prototype.focus=function(){var t=this;this.$timeout(function(){var e=t.$window.document.querySelector(".editing .textInput");e&&e.focus()},0)},t}();angular.module("app").component("todoTextInput",{templateUrl:"app/components/TodoTextInput.html",controller:TodoTextInput,bindings:{onSave:"&",placeholder:"@",newTodo:"@",editing:"@",text:"<"}});var SHOW_ALL="show_all",SHOW_COMPLETED="show_completed",SHOW_ACTIVE="show_active",visibilityFilters=(_a={},_a[SHOW_ALL]={filter:showAll,type:SHOW_ALL},_a[SHOW_COMPLETED]={filter:showCompleted,type:SHOW_COMPLETED},_a[SHOW_ACTIVE]={filter:showActive,type:SHOW_ACTIVE},_a),_a,App=function(){function t(){this.todos=[initialTodo],this.filter=SHOW_ALL}return t}();angular.module("app").component("app",{templateUrl:"app/containers/App.html",controller:App});