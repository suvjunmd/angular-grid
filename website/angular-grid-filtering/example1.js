
var module = angular.module("example", ["angularGrid"]);

module.controller("exampleCtrl", function($scope, $http) {

    var columnDefs = [
        {displayName: "Athlete", field: "athlete", width: 150, filter: 'text'},
        {displayName: "Age", field: "age", width: 90, filter: 'number'},
        {displayName: "Country", field: "country", width: 120},
        {displayName: "Year", field: "year", width: 90},
        {displayName: "Date", field: "date", width: 110},
        {displayName: "Sport", field: "sport", width: 110},
        {displayName: "Gold", field: "gold", width: 100, filter: 'number'},
        {displayName: "Silver", field: "silver", width: 100, filter: 'number'},
        {displayName: "Bronze", field: "bronze", width: 100, filter: 'number'},
        {displayName: "Total", field: "total", width: 100, filter: 'number'}
    ];

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: [],
        enableFilter: true
    };

    $http.get("../olympicWinners.json")
        .then(function(res){
            $scope.gridOptions.rowData = res.data;
            $scope.gridOptions.api.onNewRows();
        });
});
