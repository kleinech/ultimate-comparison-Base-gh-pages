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
const index_pipes_1 = require('../pipes/index.pipes');
const index_1 = require('../../modaldialog/index');
const index_2 = require('../../input/index');
const comparison_details_component_1 = require('./comparison-details.component');
const index_3 = require('../shared/index');
const comparison_config_service_1 = require('./comparison-config.service');
const comparison_data_service_1 = require('./comparison-data.service');
const comparison_service_1 = require('./comparison.service');
let ComparisonComponent = class ComparisonComponent {
    constructor(serv, dataServ, confServ) {
        this.serv = serv;
        this.dataServ = dataServ;
        this.confServ = confServ;
        this.criteriaSelection = [];
        this.query = {};
        this.activeRow = new index_3.Data();
        this.confServ.loadComparison();
        this.confServ.loadCriteria();
        this.confServ.loadTableData();
    }
    criteriaChanged(value, crit) {
        if (value) {
            this.query[crit.tag] = new index_3.CriteriaSelection(value, crit);
        }
    }
    showDetails(data) {
        this.activeRow = data;
        this.detailsModal.open();
    }
    showTableProperties() {
        this.settingsModal.open();
    }
};
__decorate([
    core_1.ViewChild('details'), 
    __metadata('design:type', index_1.ModalDialogComponent)
], ComparisonComponent.prototype, "detailsModal", void 0);
__decorate([
    core_1.ViewChild('settings'), 
    __metadata('design:type', index_1.ModalDialogComponent)
], ComparisonComponent.prototype, "settingsModal", void 0);
ComparisonComponent = __decorate([
    core_1.Component({
        selector: 'comparison',
        templateUrl: '../templates/comparison.template.html',
        pipes: [
            index_pipes_1.COMPARISON_PIPES
        ],
        directives: [
            comparison_details_component_1.ComparisonDetailsComponent,
            index_2.INPUT_COMPONENTS,
            index_2.INPUT_DIRECTIVES,
            index_1.ModalDialogComponent,
            angular2_polymer_1.PolymerElement('paper-header-panel'),
            angular2_polymer_1.PolymerElement('paper-dialog'),
            angular2_polymer_1.PolymerElement('paper-toolbar'),
            angular2_polymer_1.PolymerElement('paper-card'),
            angular2_polymer_1.PolymerElement('paper-listbox'),
            angular2_polymer_1.PolymerElement('paper-item'),
            angular2_polymer_1.PolymerElement('paper-checkbox'),
            angular2_polymer_1.PolymerElement('paper-tooltip')
        ],
        styleUrls: ['../styles/style.css'],
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [comparison_service_1.ComparisonService, comparison_data_service_1.ComparisonDataService, comparison_config_service_1.ComparisonConfigService])
], ComparisonComponent);
exports.ComparisonComponent = ComparisonComponent;

//# sourceMappingURL=comparison.component.js.map
