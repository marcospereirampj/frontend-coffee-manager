/**
 * Demo application for the event Friday of Knowledge.
 * Marcos Perira - ITEC 2016
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {
    this.helloText = 'Welcome in PhoneBook';
    this.descriptionText = 'Demo application for the event "Friday of Knowledge".';

};


angular
    .module('friday')
    .controller('MainCtrl', MainCtrl)
