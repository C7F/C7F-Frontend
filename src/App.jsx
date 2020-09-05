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
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import './App.scss';
import 'terminal.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Challenge from './pages/Challenge';

import Sidebar from './components/Sidebar';

const Page = styled.div`
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.fgColor};
    width: 100%;
    height: 100%;
`;

function App() {
    const theme = useSelector((state) => state.theme);
    return (
        <ThemeProvider theme={theme}>
            <Page>
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
                                <Route path="/challenge/:id">
                                    <Challenge />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </Router>
                    </Col>
                </Row>
            </Page>
        </ThemeProvider>
    );
}

export default App;
