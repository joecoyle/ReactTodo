var React = require ('react');
var ReactDOM = require ('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
console.log('new state',store.getState());

});

store.dispatch(actions.addTodo('Wash the car'));
store.dispatch(actions.setSearchText('car'));
// load foundation
$(document).foundation();

//app css
require('style!css!sass!AppStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
