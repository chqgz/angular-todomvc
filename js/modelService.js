

(function(angular){
    'use strict';
    
    var template=angular.module("app.template",[]);
    template.service("MainService",['$window',function($window){
        //本地缓存数据 html5 存在Web Storag中
        var localStorage=$window.localStorage;
        // 获取数据
        var items= localStorage['item_list'] ? JSON.parse(localStorage['item_list']) : [];
        //保存数据
        function save(){
            //localStorage['item_list']=[];
            localStorage['item_list']=JSON.stringify(items);
        };
        
        //对象ID 唯一性
        function getId(){
            var id = Math.random(); //获取随机数
            ///判断数组中id不能一样
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id === id) {
                        id = getId();
                        break;
                    }
                }
            }
            return id; 
        };

        ///对外接口        
        //数据源
        this.getItems=function(){
            return items;
        };
        //添加对象
        this.add=function(text){
             items.push({
                // 自动增长？
                id: getId(),               
                text: text,
                completed: false
            });
            save();
        };
        //删除对象
         this.remove=function(id){
             for (var index = 0; index < items.length; index++) {
                 var element = items[index];
                 if(element.id=id){
                     items.splice(index,1);
                     index--;
                     break ;
                 }
             }
            save();
         };
         //清除所有的 completed为ture的
         this.clearCompleted=function(){
             for (var index = 0; index < items.length; index++) {
                 var element = items[index];
                 if(element.completed){
                     items.splice(index,1);
                     index--;
                 }
             }
             save();
             return items;
         };
         //判断所有的 completed是否为ture
         this.existCompleted=function(){
             for (var index = 0; index < items.length; index++) {
                 var element = items[index];
                 if(element.completed){
                    return true;
                 }
             }
             return false;
         };
         //将保存 暴露出去
         this.toggle = save;

        //全选/全不选
        var now = true;
        this.toggleAll = function() {
            for (var i = 0; i < items.length; i++) {
                items[i].completed = now;
            }
            now = !now;
            save();
        };
    }]);   
})
(angular);