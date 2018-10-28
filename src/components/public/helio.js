import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Loader from '../partials/myloader'

class Home extends Component {

  constructor() {
    super()

    this.state = {
      worksupplies: 18931.34,
      gas: 6225.40,
      telephone: 1000.00,
      carInsurance: 2180.00
    }
  }

  render() {

    return (

      <div style={styles.wrapper}>
        
        <div> 
          
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

            <h1>Upper Level Contractor</h1>

            <img src='/assets/logo.jpg' height='125px' />

          </div>  

          <h2>Gross Income Overview 2017</h2>

          <h2 style={{marginTop: '25px', color: 'purple', fontStyle: 'italic'}}>Expenses</h2>

          <div style={styles.listContainer}>

            <div style={styles.listItem}>Work supplies:</div>
            <div style={styles.listValue}>$ {this.state.worksupplies.toLocaleString()}</div>

          </div>

          <div style={styles.listContainer}>

            <div style={styles.listItem}>Gas:</div>
            <div style={styles.listValue}>$ {this.state.gas.toLocaleString()}</div>

          </div>

          <div style={styles.listContainer}>

            <div style={styles.listItem}>Telephone:</div>
            <div style={styles.listValue}>$ {this.state.telephone.toLocaleString()}</div>

          </div>

          <div style={styles.listContainer}>

            <div style={styles.listItem}>Car insurance:</div>
            <div style={styles.listValue}>$ {this.state.carInsurance.toLocaleString()}</div>

          </div>

          <div style={styles.expenseTotal}>

            <div style={{width: '300px'}}>
              <h3 style={{display: 'flex', justifyContent: 'space-between'}}>Expenses total: <span style={{color: '#B22222'}}>$ 28,336.74</span></h3>
              <h3 style={{display: 'flex', justifyContent: 'space-between'}}>Income total: <span style={{color: 'green'}}>$ 62,347.78</span></h3>
            </div>

          </div>

        </div>



      </div>
    )
  }
}

//mileage

const styles = {
  wrapper: {
    padding: '20px'
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ccc',
    marginTop: '10px',
    marginBottom: '10px'
  },
  listItem: {
    padding: '5px',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  listValue: {
    color: '#B22222',
    fontSize: '20px'
  },
  expenseTotal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}

export default hot(module)(Home)