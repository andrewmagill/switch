define([
  'app'
], function (app) {
  app.factory('notify', ['$window', '$log', function($win, $log) {
    /////
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length == 3) {
       $win.alert(msgs.join("\n"));
       $log.log(msgs);
       msgs = [];
     }
   };
    /////
  }]);  
});