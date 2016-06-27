System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ArrayFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArrayFilter = (function () {
                function ArrayFilter() {
                }
                ArrayFilter.prototype.transform = function (value, args) {
                    if (args === void 0) { args = []; }
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var obj = value_1[_i];
                        if (obj[args[0]] === args[1]) {
                            return obj;
                        }
                    }
                };
                ArrayFilter = __decorate([
                    core_1.Pipe({
                        name: 'arrayfilter',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArrayFilter);
                return ArrayFilter;
            }());
            exports_1("ArrayFilter", ArrayFilter);
        }
    }
});

//# sourceMappingURL=arrayfilter.pipe.js.map
