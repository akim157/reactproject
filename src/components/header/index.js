import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

    static path = '/';

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">React JS</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/contact">Контакты</Link></li>
                        <li><Link to="/list">Список</Link></li>
                        <li><Link to="/errors">Страница ошибки</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }

}
