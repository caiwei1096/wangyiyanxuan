import React from 'react';
import ReactDOM from 'react-dom'
import Home from './container/Home/Home'
import Cart from './container/Cart/Cart'
import Class from './container/Class/Class'
import Goods from './container/Goods/Goods'
import Profile from './container/Profile/Profile'
import App from './container/App'
import store from './store'
import {Provider} from 'react-redux'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

ReactDOM.render(
    <Router>

            <App>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/class" component={Class}/>
                <Route path="/goods" component={Goods}/>
                <Route path="/profile" component={Profile}/>
            </App>
        
    </Router>,window.root)