/// <reference path="../../../typings/index.d.ts" />
var Footer = (function () {
    function Footer() {
        this.filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];
        this.filterTitles = (_a = {},
            _a[SHOW_ALL] = 'All',
            _a[SHOW_ACTIVE] = 'Active',
            _a[SHOW_COMPLETED] = 'Completed',
            _a
        );
        var _a;
    }
    Footer.prototype.handleClear = function () {
        this.onClearCompleted();
    };
    Footer.prototype.handleChange = function (filter) {
        this.onShow({ filter: filter });
    };
    return Footer;
}());
angular
    .module('app')
    .component('footerComponent', {
    templateUrl: 'app/components/Footer.html',
    controller: Footer,
    bindings: {
        completedCount: '<',
        activeCount: '<',
        selectedFilter: '<filter',
        onClearCompleted: '&',
        onShow: '&'
    }
});
//# sourceMappingURL=Footer.js.map