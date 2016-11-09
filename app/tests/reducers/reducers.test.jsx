var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe ('Reducers',()=>{
  describe('searchTextReducer',()=>{
    it('should set search text', ()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''),df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer',()=>{
    it('should toggle show completed', ()=>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false),df(action));
      expect(res).toEqual(true);

    });
  });

  describe('todosReducer',()=>{
    it('should add todo', ()=>{
      var action = {
        type: 'ADD_TODO',
        text: 'a todo'
      };

      var res = reducers.todosReducer(df([]),df(action));
      expect(res[0].text).toEqual(action.text);

    });

    it('should toggle todo', ()=>{
      var action = {
        type:'TOGGLE_TODO',
        id:123
      };

      var todos = [{
        id:123,
        text:"Something",
        completed:true,
        createdAt:123456,
        completedAt:1234567
      }];

      var res = reducers.todosReducer(df(todos),df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });

    it('should add intial todos', ()=>{
      var todos = [{
        id:111,
        text:'dfshdsh',
        completed:false,
        completedAt:undefined,
        createdAt:34567
      },
      {
        id:222,
        text:'dwertyuih',
        completed:true,
        completedAt:968375,
        createdAt:3457
      }];
      var action = {
        type:'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]),df(action));
      expect(res.length).toEqual(2);
    });
  });
});
