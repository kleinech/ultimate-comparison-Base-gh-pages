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
const http_1 = require('@angular/http');
const angular2_polymer_1 = require('@vaadin/angular2-polymer');
const comparison_details_component_1 = require('./comparison-details.component');
const comparison_footnote_component_1 = require('./comparison-footnote.component');
const comparison_component_1 = require('./comparison.component');
const index_pipes_1 = require('../pipes/index.pipes');
const input_module_1 = require('../../input/input.module');
const index_1 = require('../../modaldialog/index');
// Provider imports
const platform_browser_2 = require('@angular/platform-browser');
const comparison_service_1 = require('./comparison.service');
const comparison_data_service_1 = require('./comparison-data.service');
const comparison_config_service_1 = require('./comparison-config.service');
const comparison_citation_service_1 = require('./comparison-citation.service');
let ComparisonModule = class ComparisonModule {
};
ComparisonModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            index_1.ModalDialogModule,
            http_1.HttpModule,
            input_module_1.InputModule
        ],
        exports: [
            comparison_component_1.ComparisonComponent
        ],
        declarations: [
            comparison_component_1.ComparisonComponent,
            comparison_details_component_1.ComparisonDetailsComponent,
            comparison_footnote_component_1.ComparisonFootnoteComponent,
            ...index_pipes_1.COMPARISON_PIPES,
            angular2_polymer_1.PolymerElement('paper-header-panel'),
            angular2_polymer_1.PolymerElement('paper-button'),
            angular2_polymer_1.PolymerElement('paper-dialog'),
            angular2_polymer_1.PolymerElement('paper-toolbar'),
            angular2_polymer_1.PolymerElement('paper-card'),
            angular2_polymer_1.PolymerElement('paper-listbox'),
            angular2_polymer_1.PolymerElement('paper-item'),
            angular2_polymer_1.PolymerElement('paper-checkbox'),
            angular2_polymer_1.PolymerElement('paper-tooltip'),
            angular2_polymer_1.PolymerElement('iron-icon'),
            angular2_polymer_1.PolymerElement('paper-icon-button'),
        ],
        providers: [
            comparison_service_1.ComparisonService,
            comparison_data_service_1.ComparisonDataService,
            comparison_config_service_1.ComparisonConfigService,
            comparison_citation_service_1.ComparisonCitationService,
            ...index_pipes_1.COMPARISON_PIPES,
            platform_browser_2.Title
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    }), 
    __metadata('design:paramtypes', [])
], ComparisonModule);
exports.ComparisonModule = ComparisonModule;

//# sourceMappingURL=comparison.module.js.map
