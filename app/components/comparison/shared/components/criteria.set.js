"use strict";
const index_1 = require('../index');
class CriteriaSet {
    constructor(jsonObj) {
        this.criteriaSet = {};
        jsonObj.forEach(crit => {
            let criteria = new index_1.Criteria();
            criteria.name = crit.name ? crit.name : crit.tag;
            criteria.tag = crit.tag;
            criteria.description = crit.description ? crit.description : "";
            criteria.and_search = typeof crit.and_search !== typeof undefined ? crit.and_search : true;
            crit.values.forEach(val => {
                let value = new index_1.Value();
                value.name = val.name ? val.name : "undefined value";
                value.value = val.name ? val.name : "undefined value";
                value.label = val.name ? val.name : "undefined value";
                value.description = val.description ? val.description : "";
                criteria.values.push(value);
            });
            criteria.placeholder = crit.placeholder ? crit.placeholder : "";
            this.criteriaSet[crit.tag] = criteria;
        });
    }
    getCriteriaArray() {
        let set = new Array();
        for (let key in this.criteriaSet) {
            if (!this.criteriaSet.hasOwnProperty(key))
                continue;
            set.push(this.criteriaSet[key]);
        }
        return set;
    }
    getCriteria(tag) {
        return this.criteriaSet[tag] ? this.criteriaSet[tag] : new index_1.Criteria();
    }
}
exports.CriteriaSet = CriteriaSet;

//# sourceMappingURL=criteria.set.js.map
