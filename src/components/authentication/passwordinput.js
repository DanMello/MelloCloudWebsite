import React, { Component } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { createEvents } from '../../api/eventListener'

let passwordTest = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

export default class passwordInput extends Component {

  constructor () {

    super()

    this.previous = this.previous.bind(this)
    this.hover = this.hover.bind(this)
    this.validatePassword = this.validatePassword.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)

    this.state = {
      event: {}
    }
  }

  componentWillMount () {

    let event = createEvents({
      mobileTouch: [
        { event: 'onTouchEnd', method: this.validatePassword, target: 'button' },
        { event: 'onTouchEnd', method: this.previous, target: 'previousButton' },
      ],
      mobileClick: [
        { event: 'onClick', method: this.validatePassword, target: 'button'},
        { event: 'onClick', method: this.previous, target: 'previousButton'},
      ],
      desktop: [
        { event: 'onClick', method: this.validatePassword, target: 'button' },
        { event: 'onMouseEnter', method: this.hover, target: 'button' },
        { event: 'onMouseLeave', method: this.hover, target: 'button' },
        { event: 'onMouseEnter', method: () => {this.refs.previosButton.style.opacity = '0.5'}, target: 'previousButton'},
        { event: 'onMouseLeave', method: () => {this.refs.previosButton.style.opacity = '1'}, target: 'previousButton'},
        { event: 'onClick', method: this.previous, target: 'previousButton' },
      ]
    }, this.props.config)

    this.setState({event: event})
  }

  previous () {

    if (this.props.state.focused !== false) {
    
      this.props.state.focused.blur()
    }

    this.props.thisRef.setState({
      step: 2,
      passwordError: '',
      password: '',
      passwordRepeat: '',
      error: ''
    })
  }

  hover (e) {

    if (!this.props.state.password) return
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

  validatePassword () {

    if (!!this.props.state.alreadyTouched) return

    if (!this.props.state.password || !this.props.state.passwordRepeat) return

    if (!passwordTest.test(this.props.state.password) || !passwordTest.test(this.props.state.passwordRepeat)) {

      this.props.thisRef.setState({
        passwordError: "Password doesn't contain at least 8 characters and 1 number",
        alreadyTouched: false
      })

    } else if (this.props.state.password !== this.props.state.passwordRepeat) {

      this.props.thisRef.setState({
        passwordError: 'Passwords do not match',
        alreadyTouched: false
      })

    } else {

      if (this.props.state.focused !== false) {
      
        this.props.state.focused.blur()
      }

      this.props.thisRef.setState({ 
        alreadyTouched: true
      })

      this.props.thisRef.handleSubmit()
    }
  }

  render() {
    return (
      <div>
        
        <div style={styles.question}>Let's secure your account!</div>

        <div style={styles.inputContainers}>
          
          <div style={styles.error}>{this.props.state.error}</div>
          <div style={styles.error}>{this.props.state.passwordError}</div>

          <div style={styles.formLabels}>Password:</div>
          
          <input
            type='password'
            name='password'
            ref='passwordInput'
            autoFocus={false}
            autoComplete='off'
            onKeyDown={this.onKeyDown}
            style={styles.formInputs}
            onChange={(e) => {
              
              this.props.thisRef.setState({password: e.target.value})
            }}
            onFocus={(e) => {

              this.props.thisRef.setState({passwordError: '', error: '', focused: this.refs.passwordInput })

              e.target.style.outline = 'none'
              e.target.style.borderBottom = '1px solid'
              e.target.style.borderBottomColor = 'rgb(0, 122, 255)'
            }}
            onBlur={(e) => {

              if (!this.props.state.password) {
                
                this.props.thisRef.setState({
                  passwordError: 'Password cannot be empty.',
                  focused: false
                })

                e.target.style.outline = 'solid 1px red'
                e.target.style.border = 'none'

              } else if (!passwordTest.test(this.props.state.password)) {

                this.props.thisRef.setState({
                  passwordError: "Password doesn't contain at least 8 characters and 1 number",
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
          
          <div style={styles.error}>{this.props.state.passwordRepeatError}</div>

          <div style={styles.formLabels}>Repeat password:</div>
          
          <input
            type='password'
            name='passwordRepeat'
            ref='passwordRepeatInput'
            autoFocus={false}
            autoComplete='off'
            onKeyDown={this.onKeyDown}
            style={styles.formInputs}
            onChange={(e) => {
              
              this.props.thisRef.setState({passwordRepeat: e.target.value})
            }}
            onFocus={(e) => {

              this.props.thisRef.setState({passwordRepeatError: '', error: '', focused: this.refs.passwordRepeatInput })

              e.target.style.outline = 'none'
              e.target.style.borderBottom = '1px solid'
              e.target.style.borderBottomColor = 'rgb(0, 122, 255)'
            }}
            onBlur={(e) => {

              if (!this.props.state.password) {
                
                this.props.thisRef.setState({
                  passwordRepeatError: 'Password cannot be empty.',
                  focused: false
                })

                e.target.style.outline = 'solid 1px red'
                e.target.style.border = 'none'

              } else if (!passwordTest.test(this.props.state.passwordRepeat)) {

                this.props.thisRef.setState({
                  passwordRepeatError: "Password doesn't contain at least 8 characters and 1 number",
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
            enabled={this.props.state.password && this.props.state.passwordRepeat  ? 'true' : 'false' }
            style={Object.assign({}, styles.button, this.props.state.password && this.props.state.passwordRepeat ? {opacity: '1', cursor: 'pointer'} : {opacity: '0.5', cursor: 'default'}, {flexGrow: 1})}
            >
            <span>Submit</span>
          </div>

        </div>

        <div style={{marginTop: '20px', fontSize: '13px', textAlign: 'center '}}>
          <p style={{color: 'grey'}}>Password must contain atleast 8 characters and 1 number</p>
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
    textAlign: 'center',
    fontSize: '20px',
    color: 'white',
    paddingTop: '10px',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'rgb(212,174,157)',
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