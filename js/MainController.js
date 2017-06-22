(function(angular){
    'use strict';

    var controller=angular.module("app.controllers",['ngRoute']);
    // 注册一个主要的控制器
    controller.controller('MainController',['$scope', '$location','MainService', '$routeParams',
    function($scope,$location,MainService,$routeParams){
        //输入文本框
        $scope.input='';
        //获取数据源
        $scope.items=MainService.getItems();
        //添加
        $scope.add=function(){           
           if($scope.input){
               MainService.add($scope.input);
           } 
           $scope.input='';
        };
        //删除
        $scope.remove=MainService.remove;
        //清除 后再获取对象
        $scope.clearCompleted=function(){
            $scope.items=MainService.clearCompleted();
        };
        //是否有已经完成的
        $scope.existCompleted = MainService.existCompleted;

        //当前编辑控制变量
        $scope.currentEditingId=-1;
        //编辑
        $scope.editing=function(id){
            for (var index = 0; index < $scope.items.length; index++) {
                var element = $scope.items[index];
                if(element.id==id&&!element.completed){
                    $scope.currentEditingId=id;
                }
            }
            
        };
        //清除编辑
         $scope.claerEdit=function(id){
            $scope.currentEditingId=-1;
        };
        //保存
        $scope.toggle = MainService.toggle;
        //全选或者全不选
        $scope.toggleAll = MainService.toggleAll;

       
        //获取路由中的参数 判断
        switch($routeParams.status){
            
             case 'active':
                $scope.filter = { completed: false };
                break;
            case 'completed':
                $scope.filter = { completed: true };
                break;
            default:
                $scope.filter = {};
                break;
        };
        //比较
        $scope.equalCompare = function(source, target) {
            alert(source+"\t"+target);
            return angular.equals(source, target);
        };
    }]);
})(angular);