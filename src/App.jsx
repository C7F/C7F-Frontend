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
import Logout from './pages/Logout';
import Register from './pages/Register';
import Challenge from './pages/Challenge';

import Sidebar from './components/Sidebar';

import { getTheme } from './slices/themeSlice';

const Page = styled.div`
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.fgColor};
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    word-wrap: break-word;
    padding-right: 2rem;
`;

function App() {
    const theme = useSelector(getTheme);
    return (
        <ThemeProvider theme={theme}>
            <Page>
                <Router basename={process.env.PUBLIC_URL}>
                    <Row>
                        <Col md="3">
                            <Sidebar />
                        </Col>
                        <Col>
                            <Switch>
                                <Route path="/register">
                                    <Register />
                                </Route>
                                <Route path="/login">
                                    <Login />
                                </Route>
                                <Route path="/logout">
                                    <Logout />
                                </Route>
                                <Route path="/challenge/:id">
                                    <Challenge />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Router>
            </Page>
        </ThemeProvider>
    );
}

export default App;
