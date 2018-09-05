import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from './actions/userActions'

class App extends Component {
    
  componentWillMount () {

    this.props.dispatch(fetchUser())
  }

  render() {

    return (
      <div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    user: state.users.users 
  }
}

export default connect(mapStateToProps)(App)
