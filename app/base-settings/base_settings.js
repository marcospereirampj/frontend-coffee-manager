/**
 * Demo application for the event Friday of Knowledge.
 * Marcos Perira - ITEC 2016
 */

(function () {
    angular
    	.module('BaseSettings', [])
    	.constant("BaseSettings", {
			      TokenHeaderName: "Authorization",
			      ApiURL: "http://localhost:8000/api/"
		  });

})();
