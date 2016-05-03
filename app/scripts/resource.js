/**
 * Demo application for the event Friday of Knowledge.
 * Marcos Perira - ITEC 2016
 */


 angular
     .module('coffeeManager')
     .factory('Member', Member);


function Member($resource, BaseSettings) {
 		var url = BaseSettings.ApiURL + "members/:id";

 		return $resource(url, { id: "@id" }, {
      update: {
  			method: "PUT"
  		},
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
