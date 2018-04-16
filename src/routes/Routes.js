import React, { Component } from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { App } from '../components/App'
import { Whoops404 } from '../components/Whoops404'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App}/>
                    <Route path="/add-item" component={App}/>
                    <Route path="/todolist" component={App}/>
                    <Route component={Whoops404}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes