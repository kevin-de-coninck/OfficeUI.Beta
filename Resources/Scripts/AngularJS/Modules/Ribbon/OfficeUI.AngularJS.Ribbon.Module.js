/* Defines the AngularJS module 'OfficeRibbon'. 
   Parameters:
        Name:           The name of the AngularJS module.
        Dependencies:   The dependencies that this module does have.
   
   Remarks: We're using the function 'module' of AngularJS here which accepts an array of items at the end.
            That array defines that AngularJS should create a new instance of that module.
*/
var OfficeUIRibon = angular.module('OfficeUIRibbon', ['ngSanitize', 'ngAnimate']);