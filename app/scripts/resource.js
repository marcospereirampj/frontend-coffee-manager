/**
 * Demo application for the event Friday of Knowledge.
 * Marcos Perira - ITEC 2016
 */


(function() {

    'use strict';

	function Member($resource, BaseSettings) {
		var url = BaseSettings.ApiURL + "members/:id";

		return $resource(url, { id: "@id" }, {
			get: {
				method: "GET",
        isArray: false,
				transformResponse: function(data, headers){
					data = JSON.parse(data);
					return data;
				}
			},
      list: {
				method: "GET",
        isArray: true,
				transformResponse: function(data, headers){
					data = JSON.parse(data);
					return data;
				}
			}
		});
	};

  angular
      .module('coffeeManager')
      .factory('Member', Member);

})();
