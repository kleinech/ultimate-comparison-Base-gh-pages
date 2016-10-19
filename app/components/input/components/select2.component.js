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
let Select2Component = class Select2Component {
    constructor() {
        this.ops = [{ value: 't1', label: 't2' }];
        this.options = new Array();
        this.maximumSelectionLength = 0;
        this.result = new core_1.EventEmitter();
        this.value = new Array();
    }
    select(item) {
        this.value.push(item.value);
        this.result.emit(this.value);
    }
    deSelect(item) {
        let index = this.value.indexOf(item.value);
        if (index >= -1) {
            this.value.splice(index, 1);
        }
        this.result.emit(this.value);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], Select2Component.prototype, "options", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], Select2Component.prototype, "maximumSelectionLength", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], Select2Component.prototype, "placeholder", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], Select2Component.prototype, "result", void 0);
Select2Component = __decorate([
    core_1.Component({
        selector: 'select2',
        templateUrl: '../templates/select2.template.html',
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [])
], Select2Component);
exports.Select2Component = Select2Component;

//# sourceMappingURL=select2.component.js.map
