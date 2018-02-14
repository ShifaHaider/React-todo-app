import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todoText: 'Hello World ',
            todos: []
        }
    }

    handleChange(e) {
        this.setState({todoText: e.target.value})
    }

    addTodo() {
        var arr = this.state.todos;
        arr.push({
            text: this.state.todoText,
            time: Date.now()
        });

        this.setState({todos: arr, todoText: ''})
    }
    render() {
        return (
            <div className='center'>
                <AppBar title="React Todo App" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                <TextField hintText="Text Field" floatingLabelText="React-Todo-App"
                           onChange={this.handleChange.bind(this)} value={this.state.todoText}
                           value={this.state.todoText}/>
                <RaisedButton label="Add" primary={true} onClick={this.addTodo.bind(this)}/>
                <List>
                    {
                        this.state.todos.map((todo, i ,a)=> {
                            console.log(todo);
                            return (
                                <ListItem
                                    primaryText={todo.text}
                                    secondaryText={new Date(todo.time).toLocaleString() }
                                    key={i}/>
                            )
                        })
                    }
                </List>


            </div>
        )
    }
}

export default Todo;