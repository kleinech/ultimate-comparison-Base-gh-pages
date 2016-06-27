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
    var DataFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataFilter = (function () {
                function DataFilter() {
                }
                DataFilter.prototype.transform = function (value, args) {
                    var _this = this;
                    if (args === void 0) { args = []; }
                    this.query = args;
                    if (!this.query) {
                        return value;
                    }
                    return value.filter(function (item) {
                        return _this.query.every(function (cont) {
                            return (cont.value.length < 1) ||
                                (item[cont.crit.tag] &&
                                    item[cont.crit.tag].childs &&
                                    item[cont.crit.tag].childs[0] &&
                                    item[cont.crit.tag].childs[0][0] &&
                                    _this.intersect(cont.value, item[cont.crit.tag].childs[0][0], cont.crit.selectOption));
                        });
                    });
                };
                DataFilter.prototype.intersect = function (small_set, big_set, all) {
                    var inter = all;
                    if (!big_set) {
                        return false;
                    }
                    if (all) {
                        // all elements from the small_set must be in the big_set
                        small_set.every(function (element) {
                            if (big_set.indexOf(element) < 0) {
                                inter = false;
                                return false;
                            }
                            return true;
                        });
                    }
                    else {
                        // at least one elmenet must fit
                        small_set.some(function (element) {
                            if (big_set.indexOf(element) > -1) {
                                inter = true;
                                return true;
                            }
                        });
                    }
                    if (!inter && small_set.length == 0) {
                        return true;
                    }
                    return inter;
                };
                DataFilter = __decorate([
                    core_1.Pipe({
                        name: 'datafilter',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], DataFilter);
                return DataFilter;
            }());
            exports_1("DataFilter", DataFilter);
        }
    }
});

//# sourceMappingURL=datafilter.pipe.js.map
