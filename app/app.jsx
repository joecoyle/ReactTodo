var React = require ('react');
var ReactDOM = require ('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');

var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe(()=>{
  var state = store.getState();
  console.log('new state',state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// load foundation
$(document).foundation();

//app css
require('style!css!sass!AppStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
