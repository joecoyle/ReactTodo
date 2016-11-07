var expect = require('expect');

var TodoAPI = require('TodoAPI');


describe ('TodoAPI', ()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });

  it('should exist', ()=>{
    expect(TodoAPI).toExist();
  });

  describe('setTodos', ()=>{
    it('should set valid array', ()=>{
      var todos = [{
        id:34,
        text:'complete tests',
        completed:false
      }];

      TodoAPI.setTodos(todos);

      var actual = JSON.parse(localStorage.getItem('todos'));

      expect(actual).toEqual(todos);
    });

    it('should not set invalid array', ()=>{
      var bad = {a:'b'};
      TodoAPI.setTodos(bad);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', ()=>{
    it('should return empty array for bad local storage', ()=>{
      var actual = TodoAPI.getTodos();
      expect(actual).toEqual([]);
    });
  });
});
