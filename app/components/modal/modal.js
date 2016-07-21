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
const tooltip_1 = require('ng2-bootstrap/components/tooltip');
const showdown = require('showdown');
const platform_browser_1 = require('@angular/platform-browser');
const angular2_polymer_1 = require('@vaadin/angular2-polymer');
const arrayfilter_pipe_1 = require('../../pipes/arrayfilter.pipe');
const objectfilter_pipe_1 = require('../../pipes/objectfilter.pipe');
const index_1 = require('./../shared/index');
let ModalComponentMarkdown = class ModalComponentMarkdown {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.opened = false;
        this.header = {
            html: "",
            text: "",
            label: {},
            url: "",
            column: new index_1.TableData(),
        };
        this.converter = new showdown.Converter();
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
            this.openModal();
        }
    }
    openModal() {
        if (this.dialog) {
            document.body.classList.add('modal-open');
            this.container.nativeElement.classList.add('mc-opened');
            this.dialog.nativeElement.open();
            this.dialog.nativeElement.modal = true;
        }
    }
    closeModal() {
        if (this.dialog) {
            document.body.classList.remove('modal-open');
            this.container.nativeElement.classList.remove('mc-opened');
            this.dialog.nativeElement.close();
        }
    }
};
__decorate([
    core_1.ViewChild('details'), 
    __metadata('design:type', core_1.ElementRef)
], ModalComponentMarkdown.prototype, "dialog", void 0);
__decorate([
    core_1.ViewChild('modalcontainer'), 
    __metadata('design:type', core_1.ElementRef)
], ModalComponentMarkdown.prototype, "container", void 0);
ModalComponentMarkdown = __decorate([
    core_1.Component({
        selector: 'modalcomponent',
        templateUrl: '../../templates/details.tpl.html',
        directives: [
            tooltip_1.TOOLTIP_DIRECTIVES,
            angular2_polymer_1.PolymerElement('paper-dialog'),
            angular2_polymer_1.PolymerElement('paper-button'),
            angular2_polymer_1.PolymerElement('paper-card')
        ],
        pipes: [arrayfilter_pipe_1.ArrayFilter, objectfilter_pipe_1.ObjectFilter],
        styleUrls: ['./style.css'],
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
], ModalComponentMarkdown);
exports.ModalComponentMarkdown = ModalComponentMarkdown;

//# sourceMappingURL=modal.js.map
