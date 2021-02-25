
import React from 'react';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pages from './components/Pages'


export default function Router() {
    return (

        <BrowserRouter>

            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/page">
                <Pages />
            </Route>

        </BrowserRouter>


    )
}