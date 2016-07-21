(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                          'app', // 'dist',
    '@angular':                     'node_modules/@angular',
    'angular2-in-memory-web-api':   'node_modules/angular2-in-memory-web-api',
    'rxjs':                         'node_modules/rxjs',
    'ng2-select/ng2-select':        'node_modules/ng2-select/ng2-select',
    'angular2-modal':               'node_modules/angular2-modal',
    'angular2':                     'node_modules/@angular',
    'ng2-bootstrap':                'node_modules/ng2-bootstrap',
    'showdown':                     'node_modules/showdown',
    'jquery':                       'node_modules/jquery',
    'select2':                      'node_modules/select2',
    "@vaadin/angular2-polymer":     'node_modules/@vaadin/angular2-polymer'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                          { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                         { defaultExtension: 'js' },
    'angular2-in-memory-web-api':   { main: 'index.js', defaultExtension: 'js' },
    'node_modules/ng2-select':      { defaultExtension: 'js' },
    'node_modules/angular2-modal':  { defaultExtension: 'js' },
    'node_modules/ng2-bootstrap':   { defaultExtension: 'js' },
    'node_modules/showdown':        { main: './dist/showdown.js', defaultExtension: 'js' },
    'node_modules/jquery':          { main: './dist/jquery.js', defaultExtension: 'js' },
    'node_modules/select2':         { main: './dist/js/select2.full.js', defaultExtension: 'js' },
    '@vaadin/angular2-polymer':     { main: 'index.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
