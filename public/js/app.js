var app = angular.module("myApp", ["ui.router"]);
app.run(function() {
  sessionStorage.clear();
});
app.config(function($stateProvider) {
  var addUserState = {
    name: "adduser",
    url: "/adduser",
    templateUrl: "../views/add_user.html",
    controller: "AddUserCtrl"
  };

  var summaryState = {
    name: "summary",
    url: "/summary",
    templateUrl: "../views/summary.html",
    controller: "SummaryCtrl"
  };

  var editState = {
    name: "summary.edit",
    url: "/{id}/edit",
    component: "editComponent"
  };
  $stateProvider.state(addUserState);
  $stateProvider.state(summaryState);
});

app.controller("SummaryCtrl", function($scope) {
  $scope.contacts =
    sessionStorage.getItem("contacts") !== null
      ? JSON.parse(sessionStorage.getItem("contacts"))
      : null;
});

app.controller("AddUserCtrl", function($scope) {
  $scope.newContacts = {};
  $scope.saved = sessionStorage.getItem("contacts");
  $scope.contacts = [];
  $scope.saveContact = function() {
    $scope.contacts.push($scope.newContacts);
    if (sessionStorage.getItem("contacts") !== null) {
      console.log("it is not null");
      let sessionStorageItems = JSON.parse(sessionStorage.getItem("contacts"));
      sessionStorageItems.push($scope.newContacts);
      console.log("Seesion item:", sessionStorageItems);
      let updatedSessionStoreItems = JSON.stringify(
        sessionStorageItems
      );
      sessionStorage.setItem("contacts", updatedSessionStoreItems);
    } else {
      sessionStorage.setItem("contacts", JSON.stringify($scope.contacts));
    }
    $scope.newContacts = {};
  };
});
