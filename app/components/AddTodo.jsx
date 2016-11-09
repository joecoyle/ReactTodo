var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todo.value;

    if(todoText.length>0){
      this.refs.todo.value='';
      dispatch(actions.addTodo(todoText));
    }else{
      this.refs.todo.focus();
    }

  },
  render: function(){
    return (
      <div className='container__footer'>
        <form onSubmit={this.onSubmit} ref='form'>
          <input type='text' ref='todo'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
