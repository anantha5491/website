
import React from 'react';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Pages from './components/Pages'
import About from './pages/About';
import Blog from './pages/Blog';
import Publications from './pages/Publications';
import Talks from './pages/Talks';


export default function Router1() {
    return (

        <Route
            path="/page"
            render={({ match: { url } }) => (
                <>
                    <Route path={`${url}/`} component={Pages} exact />
                    <Route path={`${url}/about`} component={About} />
                    <Route path={`${url}/publications`} component={Publications} />
                    <Route path={`${url}/talks`} component={Talks} />
                    <Route path={`${url}/blog`} component={Blog} />
                </>
            )}
        />


    )
}