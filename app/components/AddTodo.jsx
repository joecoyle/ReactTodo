var React = require('react');

var AddTodo = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var todoText = this.refs.todo.value;

    if(todoText.length>0){
      this.refs.todo.value='';
      this.props.onAddTodo(todoText);
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

module.exports=AddTodo;
