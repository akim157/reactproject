import React, { PropTypes } from 'react';
import Input from '../../components/ui/input/index';
import Loader from '../../components/ui/loader/index';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { 
	addTodo, 
	likeTodo, 
	deleteTodo, 
	getTodos,
	saveTodos 
} from './actions';
import classnames from 'classnames';
import { LocalStorageManager } from '../../utils/index';
import './styles.less';

class HomePage extends React.Component {
    static path = '/';
    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            todoName: ''
        }

        bindAll(this, ['renderTodos', 'inputOnChange', 'addTodo']);
		}
		
		componentWillMount() {			
			this.props.dispatch( getTodos() );
		}

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        // if (this.state.todoName === '') {
        //     this.setState({ error: 'Поле не должно быть пустым' });
        //     return;
        // }
        // const id = this.state.todos[this.state.todos.length - 1].id + 1;
        // const name = this.state.todoName;
        //
        // const todos = this.state.todos;
        // todos.push({ id, name });
        //
        // this.setState({ todos });
        // this.setState({ todoName: '', error: '' });

        const { todos } = this.props.home;
        const id = todos[this.state.todos.length - 1].id + 1;
        const name = this.state.todoName;
        this.props.dispatch(addTodo(id, name));
        this.setState({ todoName: '' });
    }

    deleteTodo(todo) {
        this.props.dispatch(deleteTodo(todo));
    }

    renderTodos(item, idx) {
        const todoClasses = classnames('b-home-todo', {
            'is-liked': item.liked
        });
        const btnClasses = classnames('btn', {
            'active': item.liked
        });
        return (
            <li key={idx}>
                <span className={ todoClasses }>{ item }</span>
                <button className='btn' onClick={ this.deleteTodo.bind(this, item) }><i className="glyphicon glyphicon-remove" /></button>
                <button className={ btnClasses } onClick={ this.likeTodo.bind(this, item)}><i className="glyphicon glyphicon-heart" /></button>
            </li>
        );
    }

    likeTodo(todo) {
        this.props.dispatch( likeTodo(todo));
    }

    render() {
        const { todoName } = this.state;
				const { todos, error } = this.props.home;
				LocalStorageManager.set('todos', todos);
        return (
            <div className='row-fluid b-home'>
                <div className='col-xs-12'>
                    <ul>
                        { 
													todos.length === 0 ? <Loader /> :
													todos.map(this.renderTodos) 
												}
                    </ul>
                    <div className='col-xs-4'>
                        {/*<input type='text' className='form-control' value={ todoName } onChange={ this.inputOnChange.bind(this)}/>*/}
                        <Input
                            value={ todoName }
                            onChange={ this.inputOnChange }
                            error={ error }
                        />
                        <button className='btn btn-primary b-home-submit' onClick={ this.addTodo }>Add</button>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
				//LocalStorageManager.set('todos', this.props.home.todos);
				//this.props.dispatch(saveTodos(this.props.home.todos));
    }

}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
