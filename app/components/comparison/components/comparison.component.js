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
const saveAs = require('file-saver');
const index_1 = require('../shared/index');
const index_2 = require('../../modaldialog/index');
const comparison_config_service_1 = require('./comparison-config.service');
const comparison_data_service_1 = require('./comparison-data.service');
const comparison_service_1 = require('./comparison.service');
const comparison_citation_service_1 = require('./comparison-citation.service');
let ComparisonComponent = class ComparisonComponent {
    constructor(serv, dataServ, confServ, citationServ, cd) {
        this.serv = serv;
        this.dataServ = dataServ;
        this.confServ = confServ;
        this.citationServ = citationServ;
        this.cd = cd;
        this.criteriaSelection = [];
        this.query = {};
        this.order = new Array(3);
        this.orderOption = new Array(3);
        this.ctrlCounter = 0;
        this.activeRow = new index_1.Data();
        this.showTable = false;
        this.confServ.loadComparison(this.cd);
        this.confServ.loadCriteria(this.cd);
        this.confServ.loadTableData(this.cd);
        this.confServ.loadDescription(this.cd);
        this.citationServ.loadCitationData(this.cd);
        this.order[0] = this.order[1] = this.order[2] = "tag";
        this.orderOption[0] = 1;
        this.orderOption[1] = this.orderOption[2] = 0;
    }
    criteriaChanged(value, crit) {
        if (value) {
            this.query[crit.tag] = new index_1.CriteriaSelection(value, crit);
        }
        this.cd.markForCheck();
    }
    orderChanged(value, pos) {
        if (this.order.length > pos) {
            this.order[pos] = value;
        }
        this.cd.markForCheck();
    }
    orderOptionChanged(value, pos) {
        if (this.orderOption.length > pos) {
            this.orderOption[pos] = value;
        }
        this.cd.markForCheck();
    }
    orderClick(e, value) {
        let pos = this.order.findIndex(name => name == value);
        if (e.ctrlKey) {
            this.ctrlCounter = this.order[this.ctrlCounter] == value ? this.ctrlCounter : this.ctrlCounter + 1;
        }
        else {
            this.ctrlCounter = 0;
        }
        if (typeof pos != 'undefined' && pos >= 0) {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = this.orderOption[pos] == 1 ? -1 : 1;
            this.orderOption[pos] = pos != this.ctrlCounter ? 0 : this.orderOption[this.ctrlCounter];
        }
        else {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = 1;
        }
        if (this.ctrlCounter == 0) {
            for (let i = 1; i < this.orderOption.length; i++) {
                this.orderOption[i] = 0;
            }
        }
        this.cd.markForCheck();
    }
    displayOrder(value, option) {
        return this.order.findIndex(val => val == value) >= 0 && this.orderOption[this.order.findIndex(val => val == value)] == option;
    }
    showDetails(data) {
        this.activeRow = data;
        this.detailsModal.open();
    }
    showTableProperties() {
        this.settingsModal.open();
    }
    downloadLatexTable() {
        let content = this.latexTable.nativeElement.textContent;
        content = content.substr(content.indexOf('%'), content.length);
        let blob = new Blob([content], { type: 'plain/text' });
        let s = saveAs;
        saveAs(blob, "latextable.tex");
        return window.URL.createObjectURL(blob);
    }
    previewLatexTable(show) {
        if (show) {
            this.latexTable.nativeElement.classList.remove("ltable");
        }
        else {
            this.latexTable.nativeElement.classList.add("ltable");
        }
    }
};
__decorate([
    core_1.ViewChild('details'), 
    __metadata('design:type', index_2.ModalDialogComponent)
], ComparisonComponent.prototype, "detailsModal", void 0);
__decorate([
    core_1.ViewChild('settings'), 
    __metadata('design:type', index_2.ModalDialogComponent)
], ComparisonComponent.prototype, "settingsModal", void 0);
__decorate([
    core_1.ViewChild('latextable'), 
    __metadata('design:type', core_1.ElementRef)
], ComparisonComponent.prototype, "latexTable", void 0);
ComparisonComponent = __decorate([
    core_1.Component({
        selector: 'comparison',
        templateUrl: '../templates/comparison.template.html',
        styleUrls: ['../styles/style.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [comparison_service_1.ComparisonService, comparison_data_service_1.ComparisonDataService, comparison_config_service_1.ComparisonConfigService, comparison_citation_service_1.ComparisonCitationService, core_1.ChangeDetectorRef])
], ComparisonComponent);
exports.ComparisonComponent = ComparisonComponent;

//# sourceMappingURL=comparison.component.js.map
