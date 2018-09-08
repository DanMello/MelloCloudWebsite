import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

//Reducers
import { fetchUser } from './actions/userActions'

//partials
import Header from './components/partials/header'

//Routes
import Home from './components/public/home'
import About from './components/public/about'

class AppRoutes extends Component {

  componentWillMount() {

    this.props.dispatch(fetchUser())
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact strict render={(props) => <Home {...props} user={this.props.state.user} /> }/>
          <Route path="/about" exact strict component={About}/>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {

  return {
    state
  }
}

export default connect(mapStateToProps)(AppRoutes)