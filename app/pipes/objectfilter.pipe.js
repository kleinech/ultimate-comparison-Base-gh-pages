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
    var ObjectFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ObjectFilter = (function () {
                function ObjectFilter() {
                }
                ObjectFilter.prototype.transform = function (value, args) {
                    return value[args];
                };
                ObjectFilter = __decorate([
                    core_1.Pipe({
                        name: 'objectfilter',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], ObjectFilter);
                return ObjectFilter;
            }());
            exports_1("ObjectFilter", ObjectFilter);
        }
    }
});

//# sourceMappingURL=objectfilter.pipe.js.map
