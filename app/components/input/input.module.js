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
const platform_browser_1 = require('@angular/platform-browser');
const angular2_select_1 = require('angular2-select');
const select2_component_1 = require('./components/select2.component');
const select_component_1 = require('./components/select.component');
const paper_checkbox_directive_1 = require('./directives/paper-checkbox.directive');
let InputModule = class InputModule {
};
InputModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            angular2_select_1.SelectModule
        ],
        exports: [
            select_component_1.SelectComponent,
            select2_component_1.Select2Component,
            paper_checkbox_directive_1.PaperChechboxDirective
        ],
        declarations: [
            select_component_1.SelectComponent,
            select2_component_1.Select2Component,
            paper_checkbox_directive_1.PaperChechboxDirective
        ],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    }), 
    __metadata('design:paramtypes', [])
], InputModule);
exports.InputModule = InputModule;

//# sourceMappingURL=input.module.js.map
