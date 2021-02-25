
import React from 'react';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Pages from './components/Pages'
import About from './pages/About';
import Blog from './pages/Blog';
import Publications from './pages/Publications';
import Talks from './pages/Talks';


export default function Router1() {
    return (

        <BrowserRouter>

            <Route exact path="/page/publications">
                <Publications />
            </Route>
            <Route exact path="/page/talks">
                <Talks />
            </Route>
            <Route exact path="/page/about">
                <About />
            </Route>
            <Route exact path="/page/blog">
                <Blog />
            </Route>
           

        </BrowserRouter>


    )
}