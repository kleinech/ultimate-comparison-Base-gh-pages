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
const index_1 = require('angular2-modal/plugins/bootstrap/index');
const router_deprecated_1 = require('@angular/router-deprecated');
const tooltip_1 = require('ng2-bootstrap/components/tooltip');
const showdown = require('showdown');
const arrayfilter_pipe_1 = require('../../pipes/arrayfilter.pipe');
const objectfilter_pipe_1 = require('../../pipes/objectfilter.pipe');
const index_2 = require('./../shared/index');
let ModalComponentMarkdown = class ModalComponentMarkdown {
    constructor(modal, elementRef, ref, viewContainer) {
        this.modal = modal;
        this.elementRef = elementRef;
        this.ref = ref;
        this.header = {
            html: "",
            text: "",
            label: {},
            url: "",
            column: new index_2.TableData(),
        };
        this.converter = new showdown.Converter();
        modal.defaultViewContainer = viewContainer;
    }
    closed() {
        this.selected = '(closed) ' + this.modalSelected;
    }
    dismissed() {
        this.selected = '(dismissed)';
    }
    open(data, detail, table) {
        if (this.data == data) {
            this.openModal();
        }
        else {
            this.table = table;
            this.detail = detail;
            this.description = this.converter.makeHtml(data.getProperty(detail.body).plain);
            this.data = data;
            this.header.text = data[detail.header];
            this.header.url = data[detail["header-url"]];
            this.header.column = table.find(obj => obj.tag == detail["header-label"]);
            this.header.label = this.header.column.type;
            this.ref.tick();
            this.header.html = this.elementRef.nativeElement.children.header.innerHTML;
            this.body = this.elementRef.nativeElement.children.body.innerHTML;
            this.openModal();
        }
    }
    openModal() {
        this.modal.alert()
            .titleHtml(this.header.html)
            .size('lg')
            .body(this.body)
            .open();
    }
};
ModalComponentMarkdown = __decorate([
    core_1.Component({
        selector: 'modalcomponent',
        templateUrl: 'app/templates/details.tpl.html',
        directives: [...router_deprecated_1.ROUTER_DIRECTIVES, tooltip_1.TOOLTIP_DIRECTIVES],
        viewProviders: [...index_1.BS_MODAL_PROVIDERS],
        pipes: [arrayfilter_pipe_1.ArrayFilter, objectfilter_pipe_1.ObjectFilter]
    }), 
    __metadata('design:paramtypes', [index_1.Modal, core_1.ElementRef, core_1.ApplicationRef, core_1.ViewContainerRef])
], ModalComponentMarkdown);
exports.ModalComponentMarkdown = ModalComponentMarkdown;

//# sourceMappingURL=modal.js.map
