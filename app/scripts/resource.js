/**
 * Demo application for the event Friday of Knowledge.
 * Marcos Perira - ITEC 2016
 */


 angular
     .module('coffeeManager')
     .factory('Member', Member)
     .factory('Queue', Queue)
     .factory('Registry', Registry)


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


function Queue($resource, BaseSettings) {
 		var url = BaseSettings.ApiURL + "queue";

 		return $resource(url, {}, {
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


function Registry($resource, BaseSettings) {
 		var url = BaseSettings.ApiURL + "registries/";

 		return $resource(url, {}, {
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
