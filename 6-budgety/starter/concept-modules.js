// BUDGET CONTROLLER
var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    return x + a;
  };

  return {
    publicTest: function(b) {
      return add(b);
    }
  };
})();

// UI CONTROLLER
var UIController = (function() {})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(54);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  };
})(budgetController, UIController);
