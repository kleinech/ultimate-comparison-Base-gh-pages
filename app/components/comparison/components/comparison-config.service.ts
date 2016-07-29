import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Title } from '@angular/platform-browser';

import { TableDataSet, CriteriaSet, Comparison } from './../shared/index';
import { ComparisonDataService } from './comparison-data.service';

@Injectable()
export class ComparisonConfigService {
    public tableDataSet: TableDataSet;
    public criteriaSet: CriteriaSet;
    public comparison: Comparison;
    
    constructor(
            public title: Title,
            private http: Http,
            private comparisonDataService: ComparisonDataService
        ){}
        
    public loadTableData(){
        this.http.request('comparison-configuration/table.json')
        .subscribe(res => {
            this.tableDataSet = new TableDataSet(res.json());
            this.comparisonDataService.loadData(this.tableDataSet);
        })
    }
    
    public loadCriteria(){       
        this.http.request('comparison-configuration/criteria.json')
        .subscribe(res => {
            this.criteriaSet = new CriteriaSet(res.json());
        });
    }
    
    public loadComparison(){
        this.http.request('comparison-configuration/comparison.json')
        .subscribe(res => {
            this.comparison = new Comparison(res.json());
            this.title.setTitle(this.comparison.title);
        });
    }
}