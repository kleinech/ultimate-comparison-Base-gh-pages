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
let SelectComponent = class SelectComponent {
    constructor() {
        this.items = new Array();
        this.selected = "";
        this.result = new core_1.EventEmitter();
    }
    select(value) {
        this.result.emit(value);
        this.selected = value;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], SelectComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], SelectComponent.prototype, "selected", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], SelectComponent.prototype, "result", void 0);
SelectComponent = __decorate([
    core_1.Component({
        selector: 'select-default',
        templateUrl: '../templates/select.template.html',
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [])
], SelectComponent);
exports.SelectComponent = SelectComponent;

//# sourceMappingURL=select.component.js.map
