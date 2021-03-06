var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');

describe('AddTodo', ()=>{
  it('should exist',()=>{
    expect(AddTodo).toExist();
  });

  it('should dispatch add_todo if valid data entered', ()=> {
    var todoText='some text';
    var action = {type:'ADD_TODO', text:todoText};
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value=todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not call onAddTodo if invalid data entered', ()=> {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value='';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });



});
