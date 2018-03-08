import React, {Component} from 'react';
import './App.css';

const TodoFilter = (props) => {

    return (
        <div className="filters">
            <span>{props.todoList.length} items added</span>
            <span onClick={() => {
                props.updateFilter(null)
            }} ></span>
           
        </div>
    );

}

export default TodoFilter;