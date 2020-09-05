import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {
    Row,
    Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import 'terminal.css';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import Sidebar from './components/Sidebar';

function App() {
    return (
        <Row>
            <Col md="2">
                <Sidebar />
            </Col>
            <Col>
                <Router>
                    <Switch>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </Col>
        </Row>
    );
}

export default App;
