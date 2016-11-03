"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let DataPipe = class DataPipe {
    transform(value, args = []) {
        this.query = args[0];
        if (!this.query) {
            return value;
        }
        return value.filter((item) => {
            if (item.tag.trim() === "Template" && !args[1])
                return false;
            for (let key in this.query) {
                if (!this.query.hasOwnProperty(key))
                    continue;
                let cont = this.query[key];
                let values = item.getPropertyTags(cont.criteria.tag);
                if (!((cont.values.length < 1) || (this.intersect(cont.values, values, cont.criteria.and_search)))) {
                    return false;
                }
            }
            return true;
        });
    }
    intersect(small_set, big_set, all) {
        var inter = all;
        if (!big_set) {
            return false;
        }
        if (all) {
            // all elements from the small_set must be in the big_set
            small_set.every(element => {
                if (big_set.indexOf(element) < 0) {
                    inter = false;
                    return false;
                }
                return true;
            });
        }
        else {
            // at least one elmenet must fit
            small_set.some(element => {
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
    }
};
DataPipe = __decorate([
    core_1.Pipe({
        name: 'datafilter',
        pure: false
    }), 
    __metadata('design:paramtypes', [])
], DataPipe);
exports.DataPipe = DataPipe;

//# sourceMappingURL=data.pipe.js.map
