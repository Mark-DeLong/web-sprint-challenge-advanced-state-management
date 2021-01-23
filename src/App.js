import React, { Component, useEffect } from "react"
import { connect } from 'react-redux'

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { fetchSmurfs } from './actions'

class App extends Component {

  componentDidMount(){
    
      this.props.fetchSmurfs()
  }

  render() {

    return (
      <div 
        className="App"
      >
        <nav 
          className="navbar navbar-dark bg-primary"
        >
          <a 
            href="https://google.com" 
            className="navbar-brand"
          >
            Smurf Village Database
          </a>
        </nav>
        <main>
          <AddForm />
          <SmurfDisplay />
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      smurfs: state.smurfs,
      error: state.error,
      appLoading: state.appLoading,
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App)

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.