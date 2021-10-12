import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Register from './components/Login/Register/Register';
import AuthProvider from './components/Login/Context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
      <AuthProvider>
        <Router>
          <Header/>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/book">
              <Book />
            </PrivateRoute>
          </Switch>
      </Router>
      </AuthProvider>
  );
}

export default App;
