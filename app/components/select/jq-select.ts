import {Component, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {SELECT_DIRECTIVES}  from 'ng2-select/ng2-select';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/components/tooltip';
import * as jQuery from 'jquery';
import 'select2';

@Component({
selector: 'JQSelect',
inputs: ['items', 'option', 'placeholder', 'id', 'maximumSelectionLength'],
outputs:['result'],
templateUrl: 'app/templates/select.tpl.html',
directives: [SELECT_DIRECTIVES, TOOLTIP_DIRECTIVES]
})
export class JQSelect implements AfterViewInit {
    private items: Array<string> = [];
    private result: EventEmitter<any> = new EventEmitter();
    private value: Array<string>;
    private id: string;
    private placeholder: string;
    private maximumSelectionLength: number = 0;
    @ViewChild('select2') el:ElementRef;
    
    private selectedFunction (){
        this.result.emit(this.value);
    }
    
    private mapme(value:any) {
        return value.map(function(val){
            let retVal = {
                id: value.indexOf(val),
                text: val.name
            };
            return retVal;
        });
    }
    ngAfterViewInit(){
        jQuery(this.el.nativeElement).select2({
            placeholder: this.placeholder,
            allowClear: true,
            tags: true    
        });
        jQuery(this.el.nativeElement).on(
          'change',
          (e) => (this.value = jQuery(e.target).val() ? jQuery(e.target).val():[], this.result.emit(this.value)) 
        )
    }
    
    // ng2-select listeners
    private ngselected(value:any) {
        this.value = value.text;
        this.result.emit(this.value);
    }
}