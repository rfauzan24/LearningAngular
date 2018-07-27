'use strict';
    angular.module('TodoListManager', [])
        .controller('ToDoListController', ToDoListController)
        .controller('CompletedItemsController', CompletedItemsController)
        .service('ToDoListService', ToDoListService);
        ToDoListController.$inject = ['ToDoListService'];
        CompletedItemsController.$inject = ['ToDoListService'];
        ToDoListService.$inject = ['$filter'];

        function ToDoListController(ToDoListService) {
            var showList = this;
            showList.items = ToDoListService.getTodoList();
            showList.newItem = "";
            showList.completeToDoItem = function(itemIndex) {
                var itemName = showList.items[itemIndex]["name"];
                ToDoListService.addCompletedItem(itemName);
                ToDoListService.removeToDoItem(itemIndex);
            };
                
            showList.deleteToDoItem = function(itemIndex){
                ToDoListService.removeToDoItem(itemIndex);
            };
                
            showList.addNewItem = function () {
                ToDoListService.addToDoItem(showList.newItem);
            }
        }

        function CompletedItemsController(ToDoListService) {
            var showList = this;
            showList.items = ToDoListService.getCompletedList();
            showList.deleteCompletedItem = function(itemIndex){
                ToDoListService.removeCompletedItem(itemIndex);
            };
        }

        function ToDoListService($filter) {
            var service = this;
            var todoList = [];
            var completedList = [];
            service.getTodoList = function () {
                return todoList;
            };
            
            service.getCompletedList = function () {
                return completedList;
            };

            service.removeToDoItem = function (itemIndex) {
                todoList.splice(itemIndex, 1);
            };

            service.removeCompletedItem = function(itemIndex){
                completedList.splice(itemIndex,1);
            };
            
            service.addToDoItem = function(itemName){
                var item = {
                    name: itemName
                };
                todoList.push(item);
            };

            service.addCompletedItem = function(itemName){
                var finalStr = itemName;;
                var item = {
                    name: finalStr
                };
                completedList.push(item);
            };
        }