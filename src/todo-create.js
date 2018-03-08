import React, {Component} from 'react';

const TodoCreate = (props) => {

    const addTodo = (event) => {
        if(event.key === 'Enter') {
            props.addTodo(event.target.value);
        }
    };
    
    return (

        <div class="container">
    
       
            <div className="form-group">
                <label for="TODO"><b>Todo: </b></label>
                <input className="Todo-input" type="text" placeholder="Add ToDo here" onKeyPress={addTodo} />
            </div>
      
        </div>
    );
};

export default TodoCreate;