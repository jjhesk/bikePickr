;(function(){
'use strict';


  // Configuring the Articles module
  angular
    .module('generators')
    .run( Run );

  /* @inject */
  function Run(Menus) {
    // Set top bar menu items
    Menus.set('Generators', '/generators', 'blue-500');
    Menus.set('Foobits', '/foobit', 'red-900');
  }

}).call(this);
