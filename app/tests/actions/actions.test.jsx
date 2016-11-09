var expect = require('expect');
var actions = require('actions');

describe('Actions',()=>{
  it('should generate search text action', ()=>{
    var action = {
      type:'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', ()=>{
    var action = {
      type:'ADD_TODO',
      text: 'Some text'
    };

    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate initial add todos action', ()=>{
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

    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', ()=>{
    var action = {
      type:'TOGGLE_TODO',
      id: 2
    };

    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', ()=>{
    var action = {
      type:'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });
});
