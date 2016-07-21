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
const ng2_select_1 = require('ng2-select/ng2-select');
const tooltip_1 = require('ng2-bootstrap/components/tooltip');
const jQuery = require('jquery');
require('select2');
let JQSelect = class JQSelect {
    constructor() {
        this.items = [];
        this.result = new core_1.EventEmitter();
        this.maximumSelectionLength = 0;
    }
    selectedFunction() {
        this.result.emit(this.value);
    }
    mapme(value) {
        return value.map(function (val) {
            let retVal = {
                id: value.indexOf(val),
                text: val.name
            };
            return retVal;
        });
    }
    ngAfterViewInit() {
        jQuery('#' + this.id).select2({
            placeholder: this.placeholder,
            allowClear: true,
            tags: true
        });
        jQuery('#' + this.id).on('change', (e) => (this.value = jQuery(e.target).val() ? jQuery(e.target).val() : [], this.result.emit(this.value)));
    }
    // ng2-select listeners
    ngselected(value) {
        this.value = value.text;
        this.result.emit(this.value);
    }
};
JQSelect = __decorate([
    core_1.Component({
        selector: 'JQSelect',
        inputs: ['items', 'option', 'placeholder', 'id', 'maximumSelectionLength'],
        outputs: ['result'],
        templateUrl: 'app/templates/select.tpl.html',
        directives: [ng2_select_1.SELECT_DIRECTIVES, tooltip_1.TOOLTIP_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [])
], JQSelect);
exports.JQSelect = JQSelect;

//# sourceMappingURL=jq-select.js.map
