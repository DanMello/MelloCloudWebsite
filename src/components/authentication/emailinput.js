import React, { Component } from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { createEvents } from '../../api/eventListener'

export default class EmailInput extends Component {

  constructor () {

    super()

    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.hover = this.hover.bind(this)

    this.state = {
      event: {},
      alreadyTouched: false
    }
  }

  componentWillMount () {

    let event = createEvents({
      mobileTouch: [
        { event: 'onTouchEnd', method: this.next, target: 'button' },
        { event: 'onTouchEnd', method: this.previous, target: 'previousButton' },
      ],
      mobileClick: [
        { event: 'onClick', method: this.next, target: 'button'},
        { event: 'onClick', method: this.previous, target: 'previousButton'},
      ],
      desktop: [
        { event: 'onClick', method: this.next, target: 'button' },
        { event: 'onMouseEnter', method: this.hover, target: 'button' },
        { event: 'onMouseLeave', method: this.hover, target: 'button' },
        { event: 'onMouseEnter', method: () => {this.refs.previosButton.style.opacity = '0.5'}, target: 'previousButton'},
        { event: 'onMouseLeave', method: () => {this.refs.previosButton.style.opacity = '1'}, target: 'previousButton'},
        { event: 'onClick', method: this.previous, target: 'previousButton' },
      ]
    }, this.props.config)

    this.setState({event: event})
  }

  next () {

    if (!!this.state.alreadyTouched) return

    let emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailTest.test(this.props.state.email)) {

      this.setState({
        alreadyTouched: true
      })

      if (this.props.state.focused !== false) {
      
        this.props.state.focused.blur()
      }

      fetch(this.props.config.url + '/account/signup/emailCheck', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({
          email: this.props.state.email
        })

      }).then(res => {

        return res.json()

      }).then(resJson => {

        if (resJson.error) {

          this.props.thisRef.setState({error: resJson.message})
          this.setState({alreadyTouched: false})

        } else {

          if (this.props.state.focused !== false) {
          
            this.props.state.focused.blur()
          }

          this.props.thisRef.setState({
            step: 3
          })
        }

      }).catch(err => {

        console.log(err)

        this.props.thisRef.setState({
          error: "There was an error connection to the server, this most likely means the server is down or under maintenance. Please try again in a couple of hours.",
        })

        this.setState({alreadyTouched: false})
      })

    } else {

      this.props.thisRef.setState({error: 'Please enter a valid email address'})
    }

  }

  previous () {

    if (this.props.state.focused !== false) {
    
      this.props.state.focused.blur()
    }

    this.props.thisRef.setState({
      step: 1,
      emailError: '',
      error: ''
    })
  }

  hover (e) {

    if (!this.props.state.email) return
    if (e.type === 'mouseenter') e.target.style.opacity = '0.5'
    if (e.type === 'mouseleave') e.target.style.opacity = '1'
  }

  render() {
    return (
      <div>
        
        <div style={styles.question}>What's your email?</div>

        <div style={styles.inputContainers}>
          
          <div style={styles.error}>{this.props.state.error}</div>
          <div style={styles.error}>{this.props.state.emailError}</div>

          <div style={styles.formLabels}>Email:</div>
          
          <input
            type='email'
            name='email'
            ref='emailInput'
            autoFocus={false}
            autoComplete='off'
            value={this.props.state.email}
            style={styles.formInputs}
            onChange={(e) => {
              
              this.props.thisRef.setState({email: e.target.value})
            }}
            onFocus={(e) => {

              this.props.thisRef.setState({emailError: '', error: '', focused: this.refs.emailInput })

              e.target.style.outline = 'none'
              e.target.style.borderBottom = '1px solid'
              e.target.style.borderBottomColor = 'rgb(0, 122, 255)'
            }}
            onBlur={(e) => {

              if (!this.props.state.email) {
                
                this.props.thisRef.setState({
                  emailError: 'Email cannot be empty.',
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

        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>

          <div
            {...this.state.event.button}
            enabled={this.props.state.email ? 'true' : 'false' }
            style={Object.assign({}, styles.button, this.props.state.email ? {opacity: '1', cursor: 'pointer'} : {opacity: '0.5', cursor: 'default'}, {flexGrow: 1})}
            >
            <span>Next</span>
            <FaAngleRight size={'1.2em'} color={'white'} />
          </div>

        </div>

        <div
          {...this.state.event.previousButton}
          ref='previosButton'
          style={styles.previousButton}
          >
          <FaAngleLeft size={'1.2em'} />
          <span>Previous</span>
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
  previousButton: {
    position: 'absolute',
    bottom: -35,
    left: 0,
    color: 'rgb(0, 122, 255)',
    textDecorationLine: 'none',
    fontSize: '19px',
    display: 'flex',
    marginRight: '20px',
    alignSelf: 'center',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center'
  }
}

            //midnight blue 'rgb(58, 61, 80)'
  //light blue 'rgb(154, 218, 232)'
  //rose gold 'rgb(212,174,157)'