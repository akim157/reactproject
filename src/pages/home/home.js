import React from 'react';
import Input from '../../components/ui/input/index';
import './styles.less';

export default class HomePage extends React.Component {
    static path = '/';

    constructor(props) {
        super(props);
        this.state = {
            todoName: '',
            todos: [
                {
                    id: 1,
                    name: 'Todo 1'
                }
            ]
        }
    }

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        if (this.state.todoName === '') return;
        const id = this.state.todos[this.state.todos.length - 1].id + 1;
        const name = this.state.todoName;

        const todos = this.state.todos;
        todos.push({ id, name });

        this.setState({ todos });
        this.setState({ todoName: '' });
    }

    renderTodos(item, idx) {
        return (
            <li key={idx}>{ item }</li>
        );
    }

    render() {
        const { todoName, todos } = this.state;
        return (
            <div className='row-fluid b-home'>
                <div className='col-xs-12'>
                    <ul>
                        { todos.map(this.renderTodos.bind(this)) }
                    </ul>
                    <div className='col-xs-4'>
                        {/*<input type='text' className='form-control' value={ todoName } onChange={ this.inputOnChange.bind(this)}/>*/}
                        <Input value={ '' } onChange={ this.inputOnChange.bind(this) } />
                        <button className='btn btn-primary' onClick={ this.addTodo.bind(this) }>Add</button>
                    </div>
                </div>
            </div>
        );
    }

}
