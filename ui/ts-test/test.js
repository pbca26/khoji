var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = {
    id: 0,
    name: '123'
};
arr = {
    id: 123,
    name: '123'
};
var arr2 = [];
for (var i = 0; i < 10; i++) {
    arr2.push({
        id: i,
        name: 'n' + i
    });
}
var myArrx = /** @class */ (function () {
    function myArrx(id, name) {
        this.id = id;
        this.name = name;
    }
    myArrx.prototype.getFullName = function () {
        return this.id + ' ' + this.name;
    };
    return myArrx;
}());
var myArrx2 = /** @class */ (function (_super) {
    __extends(myArrx2, _super);
    function myArrx2(id, name, code) {
        var _this = _super.call(this, id, name) || this;
        _this.code = code;
        return _this;
    }
    myArrx2.prototype.getCode = function () {
        return this.code;
    };
    return myArrx2;
}(myArrx));
var arr3 = new myArrx(123, '123');
console.log(arr3);
console.log(arr3.getFullName());
var arr4 = new myArrx2(123, '123', '123');
console.log(arr4);
console.log(arr4.getFullName());
console.log(arr4.getCode());
