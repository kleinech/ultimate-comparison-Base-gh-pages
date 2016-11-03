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
let PaperDialogDirective = class PaperDialogDirective {
    constructor(el) {
        this.el = el;
        this.openedChange = new core_1.EventEmitter();
    }
    open(e) {
        this.openedChange.emit(true);
    }
    close(e) {
        this.openedChange.emit(false);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], PaperDialogDirective.prototype, "opened", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], PaperDialogDirective.prototype, "openedChange", void 0);
__decorate([
    core_1.HostListener('iron-overlay-opened', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], PaperDialogDirective.prototype, "open", null);
__decorate([
    core_1.HostListener('iron-overlay-closed', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], PaperDialogDirective.prototype, "close", null);
PaperDialogDirective = __decorate([
    core_1.Directive({
        selector: 'paper-dialog'
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], PaperDialogDirective);
exports.PaperDialogDirective = PaperDialogDirective;

//# sourceMappingURL=paper-dialog.directive.js.map
