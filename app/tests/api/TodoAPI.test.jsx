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

  describe('filterTodos', ()=>{
    var todos = [{
      id:1,
      text:'test',
      completed:true
    },
    {
      id:2,
      text:'test',
      completed:false
    },
    {
      id:3,
      text:'test',
      completed:true
    }];

    it('should return all todos', ()=> {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return filtered todos', ()=> {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it ('should sort by completed status', ()=>{
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos[0].completed).toBe(false);
    });

  });
});
