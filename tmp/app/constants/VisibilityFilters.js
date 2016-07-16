/// <reference path="../../../typings/index.d.ts" />
function showAll() {
    return true;
}
function showCompleted(todo) {
    return todo.completed;
}
function showActive(todo) {
    return !todo.completed;
}
var visibilityFilters = (_a = {},
    _a[SHOW_ALL] = { filter: showAll, type: SHOW_ALL },
    _a[SHOW_COMPLETED] = { filter: showCompleted, type: SHOW_COMPLETED },
    _a[SHOW_ACTIVE] = { filter: showActive, type: SHOW_ACTIVE },
    _a
);
var _a;
//# sourceMappingURL=VisibilityFilters.js.map