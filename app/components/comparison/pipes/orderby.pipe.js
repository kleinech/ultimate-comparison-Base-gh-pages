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
let OrderByPipe_1;
let OrderByPipe = OrderByPipe_1 = class OrderByPipe {
    static _comparator(a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0;
    }
    transform(value, args = []) {
        this.params = { value: args[0], option: args[1] };
        return value.sort((a, b) => {
            for (let i = 0; i < this.params.value.length; i++) {
                if (this.params.option[i] == 0)
                    continue;
                let desc = this.params.option[i] == -1 ? true : false;
                let pA = a[this.params.value[i]] ? a[this.params.value[i]] : a.properties[this.params.value[i]].plain;
                let pB = b[this.params.value[i]] ? b[this.params.value[i]] : b.properties[this.params.value[i]].plain;
                let comparison = !desc ? OrderByPipe_1._comparator(pA, pB) : -OrderByPipe_1._comparator(pA, pB);
                if (comparison != 0)
                    return comparison;
            }
            return 0;
        });
    }
};
OrderByPipe = OrderByPipe_1 = __decorate([
    core_1.Pipe({
        name: 'orderBy',
        pure: false
    }), 
    __metadata('design:paramtypes', [])
], OrderByPipe);
exports.OrderByPipe = OrderByPipe;

//# sourceMappingURL=orderby.pipe.js.map
