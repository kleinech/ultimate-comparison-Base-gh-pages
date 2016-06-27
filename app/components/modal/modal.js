System.register(['@angular/core', 'angular2-modal/angular2-modal', '@angular/router-deprecated', '../../pipes/arrayfilter.pipe', '../../pipes/objectfilter.pipe'], function(exports_1, context_1) {
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
    var core_1, angular2_modal_1, router_deprecated_1, arrayfilter_pipe_1, objectfilter_pipe_1;
    var ModalComponentMarkdown;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (arrayfilter_pipe_1_1) {
                arrayfilter_pipe_1 = arrayfilter_pipe_1_1;
            },
            function (objectfilter_pipe_1_1) {
                objectfilter_pipe_1 = objectfilter_pipe_1_1;
            }],
        execute: function() {
            ModalComponentMarkdown = (function () {
                function ModalComponentMarkdown(modal, elementRef, ref, viewContainer) {
                    this.modal = modal;
                    this.elementRef = elementRef;
                    this.ref = ref;
                    this.header = {
                        html: "",
                        text: "",
                        label: {},
                        url: "",
                    };
                    this.converter = new showdown.Converter();
                    modal.defaultViewContainer = viewContainer;
                }
                ModalComponentMarkdown.prototype.closed = function () {
                    this.selected = '(closed) ' + this.modalSelected;
                };
                ModalComponentMarkdown.prototype.dismissed = function () {
                    this.selected = '(dismissed)';
                };
                ModalComponentMarkdown.prototype.open = function (data, detail, table) {
                    if (this.data == data) {
                        this.openModal();
                    }
                    else {
                        this.table = table;
                        this.detail = detail;
                        var dataBody = data[detail.body] ? data[detail.body].plain : "";
                        this.description = this.converter.makeHtml(dataBody);
                        this.data = data;
                        this.header.text = data[detail.header];
                        this.header.label = table.find(function (obj) { return obj.tag == detail["header-label"]; }).type;
                        this.header.url = data[detail["header-url"]];
                        this.ref.tick();
                        this.header.html = this.elementRef.nativeElement.children.header.innerHTML;
                        this.body = this.elementRef.nativeElement.children.body.innerHTML;
                        this.openModal();
                    }
                };
                ModalComponentMarkdown.prototype.openModal = function () {
                    this.modal.alert()
                        .titleHtml(this.header.html)
                        .size('lg')
                        .dialogClass('modal-dialog')
                        .body(this.body)
                        .open();
                };
                ModalComponentMarkdown = __decorate([
                    core_1.Component({
                        selector: 'modalcomponent',
                        templateUrl: 'app/templates/details.tpl.html',
                        directives: router_deprecated_1.ROUTER_DIRECTIVES.slice(),
                        providers: angular2_modal_1.MODAL_PROVIDERS.slice(),
                        pipes: [arrayfilter_pipe_1.ArrayFilter, objectfilter_pipe_1.ObjectFilter]
                    }), 
                    __metadata('design:paramtypes', [angular2_modal_1.Modal, core_1.ElementRef, core_1.ApplicationRef, core_1.ViewContainerRef])
                ], ModalComponentMarkdown);
                return ModalComponentMarkdown;
            }());
            exports_1("ModalComponentMarkdown", ModalComponentMarkdown);
        }
    }
});

//# sourceMappingURL=modal.js.map
