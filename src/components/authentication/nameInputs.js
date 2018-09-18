import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { createEvents } from '../../api/eventListener'

let nameTest = /^[a-zA-Z\s]*$/

export default class Nameinputs extends Component {

  constructor () {

    super()

    this.next = this.next.bind(this)
    this.hover = this.hover.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)

    this.state = {
      event: {},
    }
  }

  componentWillMount () {

    let event = createEvents({
      mobileTouch: [
        { event: 'onTouchEnd', method: this.next, target: 'button' },
      ],
      mobileClick: [
        { event: 'onClick', method: this.next, target: 'button'},
      ],
      desktop: [
        { event: 'onClick', method: this.next, target: 'button' },
        { event: 'onMouseEnter', method: this.hover, target: 'button' },
        { event: 'onMouseLeave', method: this.hover, target: 'button' },
      ]
    }, this.props.config)

    console.log(event)

    this.setState({event: event})
  }

  next () {

    if (!this.props.state.firstName || !this.props.state.lastName) {

      return

    } else if (!nameTest.test(this.props.state.firstName) || !nameTest.test(this.props.state.lastName)) {

      this.props.thisRef.setState({error: 'Name can only only contain letters'})

      return

    } else {

      if (this.props.state.focused !== false) {
      
        this.props.state.focused.blur()
      }

      this.props.thisRef.setState({
        step: 2
      })
    }
  }

  hover (e) {

    if (!this.props.state.firstName || !this.props.state.lastName) return
    if (e.type === 'mouseenter') e.target.style.opacity = '0.5'
    if (e.type === 'mouseleave') e.target.style.opacity = '1'
  }

  onKeyDown (e) {

    if (e.key === 'Enter') {

      if (this.props.state.focused !== false) {
      
        this.props.state.focused.blur()
      }

      return
    }
  }

  render() {
    return (
      <div>
        
        <div style={styles.question}>What's your name?</div>

        <div style={styles.inputContainers}>
          
          <div style={styles.error}>{this.props.state.error}</div>
          <div style={styles.error}>{this.props.state.firstNameError}</div>

          <div style={styles.formLabels}>First Name:</div>
          
          <input
            type='text'
            name='firstName'
            ref='firstNameInput'
            autoFocus={false}
            autoComplete='off'
            onKeyDown={this.onKeyDown}
            value={this.props.state.firstName}
            style={styles.formInputs}
            onChange={(e) => {
              
              this.props.thisRef.setState({firstName: e.target.value})
            }}
            onFocus={(e) => {

              this.props.thisRef.setState({firstNameError: '', error: '', focused: this.refs.firstNameInput })

              e.target.style.outline = 'none'
              e.target.style.borderBottom = '1px solid'
              e.target.style.borderBottomColor = 'rgb(0, 122, 255)'
            }}
            onBlur={(e) => {

              if (!this.props.state.firstName) {
                
                this.props.thisRef.setState({
                  firstNameError: 'First Name cannot be empty.',
                  focused: false
                })

                e.target.style.outline = 'solid 1px red'
                e.target.style.border = 'none'

              } else if (!nameTest.test(this.props.state.firstName)) {

                this.props.thisRef.setState({
                  firstNameError: 'First Name can only contain letters',
                  focused: false
                })

                e.target.style.outline = 'solid 1px red'
                e.target.style.border = 'none'
                
              } else {

                e.target.style.outline = 'none'
                e.target.style.borderBottomColor = '#ccc'

                this.props.thisRef.setState({focused: false})
              }
            }}
          />
        </div>

        <div style={styles.inputContainers}>

          <div style={styles.error}>{this.props.state.lastNameError}</div>

          <div style={styles.formLabels}>Last Name:</div>

          <input
            type='lastName'
            name='lastName'
            ref='lastNameInput'
            autoComplete='off'
            onKeyDown={this.onKeyDown}
            value={this.props.state.lastName}
            style={styles.formInputs}
            onChange={(e) => this.props.thisRef.setState({lastName: e.target.value})}
            onFocus={(e) => {

              this.props.thisRef.setState({lastNameError: '', error: '', focused: this.refs.lastNameInput })

              e.target.style.outline = 'none'
              e.target.style.borderBottom = '1px solid'
              e.target.style.borderBottomColor = 'rgb(0, 122, 255)'
            }}
            onBlur={(e) => {

              if (!this.props.state.lastName) {
                
                this.props.thisRef.setState({
                  lastNameError: 'Last Name cannot be empty.',
                  focused: false
                })

                e.target.style.outline = 'solid 1px red'
                e.target.style.border = 'none'

              } else if (!nameTest.test(this.props.state.lastName)) {

                this.props.thisRef.setState({
                  lastNameError: 'First Name can only contain letters',
                  focused: false
                })

                e.target.style.outline = 'solid 1px red'
                e.target.style.border = 'none'
                
              } else {

                e.target.style.outline = 'none'
                e.target.style.borderBottomColor = '#ccc'

                this.props.thisRef.setState({focused: false})
              }
            }}
          />
        </div>

        <div
          {...this.state.event.button}
          enabled={this.props.state.firstName && this.props.state.lastName ? 'true' : 'false' }
          style={Object.assign({}, styles.button, this.props.state.firstName && this.props.state.lastName ? {opacity: '1', cursor: 'pointer'} : {opacity: '0.5', cursor: 'default'})}
          >
          <span>Next</span>
          <FaAngleRight size={'1.2em'} color={'white'} />
        </div>

        <div style={{marginTop: '20px', fontSize: '13px', textAlign: 'center '}}>
          <p>By clicking next you agree to the mello cloud's <br /> <Link to='/terms'> Terms of service </Link> & <Link to='/terms'> Privacy Policy </Link> </p>
        </div>

      </div>
    )
  }
}

const styles = {
  question: {
    textAlign: 'center', 
    fontSize: '22px', 
    marginBottom: '20px', 
    fontWeight: 'bold', 
    color: '#444'
  },
  inputContainers: {
    padding: '5px'
  },
  formLabels: {
    fontSize: '20px',
    marginBottom: '3px',
    color: '#666'
  },
  formInputs: {
    border: 'none',
    borderRadius: '0px',
    padding: '4px',
    color: 'black',
    fontSize: '17px',
    borderBottom: '1px solid #ccc',
    width: '100%'
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
    fontSize: '20px',
    color: 'white',
    paddingTop: '10px',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'rgb(58, 61, 80)',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center'
  }
}