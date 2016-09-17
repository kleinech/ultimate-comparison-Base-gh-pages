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
const angular2_polymer_1 = require('@vaadin/angular2-polymer');
const modal_dialog_component_1 = require('./modal-dialog.component');
const paper_dialog_directive_1 = require('../directives/paper-dialog.directive');
let ModalDialogModule = class ModalDialogModule {
};
ModalDialogModule = __decorate([
    core_1.NgModule({
        imports: [],
        exports: [
            modal_dialog_component_1.ModalDialogComponent
        ],
        declarations: [
            modal_dialog_component_1.ModalDialogComponent,
            angular2_polymer_1.PolymerElement('paper-dialog'),
            angular2_polymer_1.PolymerElement('paper-button'),
            paper_dialog_directive_1.PaperDialogDirective
        ],
        providers: []
    }), 
    __metadata('design:paramtypes', [])
], ModalDialogModule);
exports.ModalDialogModule = ModalDialogModule;

//# sourceMappingURL=modal-dialog.module.js.map
