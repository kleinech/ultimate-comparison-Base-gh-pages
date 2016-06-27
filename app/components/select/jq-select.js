System.register(['@angular/core', 'ng2-select/ng2-select'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_select_1;
    var JQSelect;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            }],
        execute: function() {
            JQSelect = (function () {
                function JQSelect() {
                    this.items = [];
                    this.result = new core_1.EventEmitter();
                    this.maximumSelectionLength = 0;
                }
                JQSelect.prototype.selectedFunction = function () {
                    this.result.emit(this.value);
                    //console.log(this.value)
                };
                JQSelect.prototype.mapme = function (value) {
                    return value.map(function (val) {
                        var retVal = {
                            id: value.indexOf(val),
                            text: val.name
                        };
                        return retVal;
                    });
                };
                JQSelect.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    jQuery('#' + this.id).select2({
                        placeholder: this.placeholder,
                        allowClear: true,
                        tags: true,
                        maximumSelectionLength: this.maximumSelectionLength
                    });
                    jQuery('#' + this.id).on('change', function (e) { return (_this.value = jQuery(e.target).val() ? jQuery(e.target).val() : [], _this.result.emit(_this.value)); });
                };
                // ng2-select listeners
                JQSelect.prototype.ngselected = function (value) {
                    this.value = value.text;
                    this.result.emit(this.value);
                };
                JQSelect.prototype.dummy = function () {
                    //console.log("dummy");
                };
                JQSelect = __decorate([
                    core_1.Component({
                        selector: 'JQSelect',
                        inputs: ['items', 'option', 'placeholder', 'id', 'maximumSelectionLength'],
                        outputs: ['result'],
                        templateUrl: 'app/templates/select.tpl.html',
                        directives: [ng2_select_1.SELECT_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], JQSelect);
                return JQSelect;
            }());
            exports_1("JQSelect", JQSelect);
        }
    }
});

//# sourceMappingURL=jq-select.js.map
