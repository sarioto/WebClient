angular.module("proton", [
  "ngAnimate",
  
  // templates
  "templates-app",
  "templates-common",
  
  // Basic
  "proton.Routes",
  "proton.Auth",
  "proton.Models",

  "proton.filters.strings",

  "proton.Controllers.Auth",
  "proton.Controllers.Messages",
  "proton.Controllers.Contacts"
])

.run(function($document, $rootScope) {
  $document.find("title").html("{{ pageName | capitalize }} &middot; ProtonMail");
  $rootScope.reportBug = function() {
    alert("Reported!");
  };
});
