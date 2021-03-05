"use strict";
var BaseClass = /** @class */ (function () {
    function BaseClass() {
        console.log('Object created INHERITED');
    }
    BaseClass.prototype.toCallFromChild = function () {
    };
    return BaseClass;
}());
