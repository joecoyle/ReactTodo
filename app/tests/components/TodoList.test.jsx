var React = require('react');
var {Provider} = require('react-redux');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

import {configure} from 'configureStore';

describe('TodoList', ()=>{
  it('should exist',()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo for each todo', ()=>{
    var todos = [{id:1,text:'clean car',completed:false,completedAt:undefined,createdAt:578},
    {id:2,text:'check mail',completed:false,completedAt:undefined,createdAt:578}];

    var store = configure({todos});

    var provider = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedTodoList/></Provider>);
    var todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedTodoList)[0];

    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todoComponents.length).toBe(todos.length);
  });
});
