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
let PaperChechboxDirective = class PaperChechboxDirective {
    constructor(el) {
        this.el = el;
        this.checkedChange = new core_1.EventEmitter();
    }
    ngOnChanges() {
        this.el.nativeElement.checked = this.checked;
    }
    onChange(e) {
        this.checkedChange.emit(this.el.nativeElement.checked);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], PaperChechboxDirective.prototype, "checked", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], PaperChechboxDirective.prototype, "checkedChange", void 0);
__decorate([
    core_1.HostListener('iron-change', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], PaperChechboxDirective.prototype, "onChange", null);
PaperChechboxDirective = __decorate([
    core_1.Directive({ selector: 'paper-checkbox' }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], PaperChechboxDirective);
exports.PaperChechboxDirective = PaperChechboxDirective;

//# sourceMappingURL=paper-checkbox.directive.js.map
