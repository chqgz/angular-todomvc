/*(function (window) {
	'use strict';

	var myApp= angular.module("myApp",[]);
	myApp.controller("myController",['$scope',function($scope){
		//数据
		$scope.input="";
		$scope.items=[

		];
		//单选点击事件
		$scope.completed=function(id){
			for (var index = 0; index < $scope.items.length; index++) {
				var element = $scope.items[index];
				if(element.id===id){
					element.completed=!element.completed;
				}
			}
		};
		///添加
		$scope.add=function(){
			$scope.items.unshift({id:Math.random(),text:$scope.input,completed:false});
			$scope.input="";
		};
		//删除
		$scope.delete=function(id){
			for (var index = 0; index < $scope.items.length; index++) {
				var element = $scope.items[index];
				if(element.id===id){
					$scope.items.splice(index,1);
					//element.completed=!element.completed;
				}
			}
		};
		$scope.currentEditingId=-1;
		//双点击
		$scope.dbclick=function(id){
			for (var index = 0; index < $scope.items.length; index++) {
				var element = $scope.items[index];
				if(element.id===id&&!element.completed){
					$scope.currentEditingId=element.id;
				}
			}
		};		
		$scope.save=function(){
			$scope.currentEditingId=-1;
		}
		//清除所有的
		$scope.clear=function(){
			for (var index = 0; index < $scope.items.length; index++) {
				var element = $scope.items[index];
				if(element.completed){
					$scope.items.splice(index,1);
					index--;
				}
			}
		};
		$scope.now = true;
		$scope.toggleAll = function() {			
			for (var index = 0; index < $scope.items.length; index++) {
				var element = $scope.items[index];
				element.completed=$scope.now;
			}
			$scope.now = !$scope.now;
		}
	}]);

})(window);*/

;(function(angular){
	'use strict';
	//应用程序的主要的模块
	var myApp = angular.module('myApp', ['app.template','app.controllers', 'ngRoute']);
	myApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/:status?', {
			templateUrl: 'main_tmpl',
			controller: 'MainController'
		});
	}]);
})(angular);