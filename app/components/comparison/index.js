"use strict";
const http_1 = require('@angular/http');
const platform_browser_1 = require('@angular/platform-browser');
const comparison_component_1 = require('./components/comparison.component');
const comparison_service_1 = require('./components/comparison.service');
const comparison_data_service_1 = require('./components/comparison-data.service');
const comparison_config_service_1 = require('./components/comparison-config.service');
exports.COMPARISON_DIRECTIVES = [
    comparison_component_1.ComparisonComponent
];
exports.COMPARISON_PROVIDERS = [
    comparison_service_1.ComparisonService,
    comparison_data_service_1.ComparisonDataService,
    comparison_config_service_1.ComparisonConfigService,
    ...http_1.HTTP_PROVIDERS,
    platform_browser_1.Title
];

//# sourceMappingURL=index.js.map
