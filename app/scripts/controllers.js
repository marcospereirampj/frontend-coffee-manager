/**
 * Demo application for the event Friday of Knowledge.
 * Marcos Perira - ITEC 2016
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {
    this.helloText = 'Welcome in CoffeeMananger';
    this.descriptionText = 'Demo application for the event "Friday of Knowledge".';
};

/**
 * MemberCtrl - controller
 */
function MemberCtrl(Member) {
    this.members = Member.list();
};


/**
 * QueueCtrl - controller
 */
function QueueCtrl(Member) {
    this.members = Member.list();
};


angular
    .module('coffeeManager')
    .controller('MainCtrl', MainCtrl)
