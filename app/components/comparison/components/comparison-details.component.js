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
const index_1 = require('../shared/index');
const comparison_config_service_1 = require('./comparison-config.service');
const comparison_data_service_1 = require('./comparison-data.service');
const comparison_service_1 = require('./comparison.service');
const comparison_citation_service_1 = require('./comparison-citation.service');
let ComparisonDetailsComponent = class ComparisonDetailsComponent {
    constructor(serv, dataServ, confServ, citationServ) {
        this.serv = serv;
        this.dataServ = dataServ;
        this.confServ = confServ;
        this.citationServ = citationServ;
        this.opened = false;
        this.header = {
            html: "",
            text: "",
            label: {},
            url: "",
            column: new index_1.TableData(),
        };
    }
    getBody() {
        return this.confServ.comparison ? this.serv.converter.makeHtml(this.data.getProperty(this.confServ.comparison.details.body).plain) : "";
    }
    getHeaderText() {
        return this.confServ.comparison ? this.data[this.confServ.comparison.details.header] : "";
    }
    getHeaderUrl() {
        return this.confServ.comparison ? this.data[this.confServ.comparison.details.headerUrl] : "";
    }
    getHeaderColumn() {
        return (this.confServ.comparison && this.confServ.tableDataSet) ? this.confServ.tableDataSet.getTableData(this.confServ.comparison.details.headerLabel) : new index_1.TableData();
    }
    getHeaderLabel() {
        return (this.confServ.comparison && this.confServ.tableDataSet) ? this.confServ.tableDataSet.getTableData(this.confServ.comparison.details.headerLabel).type : new index_1.Type();
    }
    getTable(tag) {
        return this.confServ.tableDataSet ? this.confServ.tableDataSet.getTableData(tag) : new index_1.TableData();
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', index_1.Data)
], ComparisonDetailsComponent.prototype, "data", void 0);
ComparisonDetailsComponent = __decorate([
    core_1.Component({
        selector: 'comparison-details',
        templateUrl: '../templates/comparison-details.template.html',
        styleUrls: ['../styles/style.css'],
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [comparison_service_1.ComparisonService, comparison_data_service_1.ComparisonDataService, comparison_config_service_1.ComparisonConfigService, comparison_citation_service_1.ComparisonCitationService])
], ComparisonDetailsComponent);
exports.ComparisonDetailsComponent = ComparisonDetailsComponent;

//# sourceMappingURL=comparison-details.component.js.map
