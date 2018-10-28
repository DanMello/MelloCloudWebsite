import React, { Component } from 'react'
import { compose } from 'redux'
import classNames from 'classnames'
import { validator } from '../api/validators'

const Inputs = (WrappedComponent) => {

  return class extends Component {

    constructor() {

      super()

      this.onChange = this.onChange.bind(this)
      this.onFocus = this.onFocus.bind(this)
      this.onBlur = this.onBlur.bind(this)
    }

    onChange(e) {

      let validation = validator(e.target.dataset.method, e.target.value)

      this.props.dispatch({
        type: 'FORM_INPUT_CHANGE',
        payload: {
          property: e.target.id,
          data: {
            value: e.target.value,
            error: validation ? validation : false,
            validated: !validation ? true : false,
            step: this.props.form.step,
            queryInput: this.props.queryInputs ? true : false,
            successMessage: null,
            queryError: null,
            queryDone: null
          }
        }
      })
    }

    onFocus(e) {

      this.props.dispatch({
        type: 'FORM_INPUT_CHANGE',
        payload: {
          property: e.target.id,
          data: {
            focused: true
          }
        }
      })
    }

    onBlur(e) {

      this.props.dispatch({
        type: 'FORM_INPUT_CHANGE',
        payload: {
          property: e.target.id,
          data: {
            focused: false,
            typing: false
          }
        }
      })
    }

    render() {

      return (
        <WrappedComponent
          {...this.props}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
      )
    }
  }
}

const ShowErrorTimeout = (WrappedComponent) => {

  return class extends Component {

    constructor() {

      super()

      this.state = {
        displayErrorDelay: []
      }

      this.setDelay = this.setDelay.bind(this)
    }

    setDelay(input) {

      input.reduce((acc, current) => {
        
        let newArray = acc || []

        if (current.for === this.props.form.currentInput) {

          let currentDelay = this.state.displayErrorDelay.find((delayObj, i) => {

            if (delayObj !== undefined) {

              if (delayObj.for === current.for) {

                clearTimeout(this.state.displayErrorDelay[i].delay)

                this.setState({
                  displayErrorDelay: this.state.displayErrorDelay.splice(i, 1)
                })
              }
            }
          })

          newArray.push(current)
        }

        return newArray

      }, []).map(currentInput => {

        this.props.dispatch({
          type: 'FORM_INPUT_CHANGE',
          payload: {
            property: currentInput.for,
            data: {
              typing: true
            }
          }
        })

        this.setState({
          displayErrorDelay: [
            ...this.state.displayErrorDelay,
            {
              for: currentInput.for,
              delay: setTimeout(() => {

                this.props.dispatch({
                  type: 'FORM_INPUT_CHANGE',
                  payload: {
                    property: currentInput.for,
                    data: {
                      typing: false
                    }
                  }
                })
              }, currentInput.errorDelay) 
            }
          ]
        })
      })
    }

    componentDidUpdate(prevProps) {

      if (this.props.displayErrorDelay) {

        let currentInput =  this.props.form.currentInput

        if (this.props.form.data[currentInput] && prevProps.form.data[currentInput]) {

          if (prevProps.form.data[currentInput].value !== this.props.form.data[currentInput].value) {

            this.setDelay(this.props.displayErrorDelay)
          }
        }
      }
    }

    render() {

      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

const QueryInputs = (WrappedComponent) => {

  return class extends Component {

    constructor() {

      super()

      this.state = {
        queryInputsDelay: []
      }

      this.queryInputs = this.queryInputs.bind(this)
    }

    queryInputs(input) {

      input.reduce((acc, current) => {

        let newArray = acc || []

        if (current.for === this.props.form.currentInput) {

          let currentDelay = this.state.queryInputsDelay.find((delayObj, i) => {

            if (delayObj !== undefined) {

              if (delayObj.for === current.for) {

                clearTimeout(this.state.queryInputsDelay[i].delay)

                this.setState({
                  queryInputsDelay: this.state.queryInputsDelay.splice(i, 1)
                })
              }
            }
          })

          if (this.props.form.data[this.props.form.currentInput].validated) {
            
            newArray.push(current)
          }
        }

        return newArray

      }, []).map(currentInput => {

        let value = this.props.form.data[currentInput.for].value

        this.setState({
          queryInputsDelay: [
            ...this.state.queryInputsDelay,
            {
              for: currentInput.for,
              delay: setTimeout(() => {

                this.props.dispatch(currentInput.method(value, { cancelable: true }))

              }, currentInput.queryDelay) 
            }
          ]
        })
      })
    }

    componentDidUpdate(prevProps) {

      if (this.props.queryInputs) {

        let currentInput =  this.props.form.currentInput

        if (this.props.form.data[currentInput] && prevProps.form.data[currentInput]) {

          if (prevProps.form.data[currentInput].value !== this.props.form.data[currentInput].value) {

            this.queryInputs(this.props.queryInputs)
          }
        }
      }
    }

    componentWillUnmount() {

      this.props.dispatch({type: 'CANCEL_FETCH'})
    }

    render() {

      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

const MatchInputs = (WrappedComponent) => {

  return class extends Component {

    constructor() {

      super()

      this.dotheymatch = this.dotheymatch.bind(this)
    }

    dotheymatch (inputs) {

      let allinputsavailable = !!inputs.every(input => Object.keys(this.props.form.data).includes(input))

      if (allinputsavailable) {

        let allValidated = !!inputs.every(input => this.props.form.data[input].validated)

        if (allValidated) {

          return inputs.every((input) => this.props.form.data[inputs[0]].value === this.props.form.data[input].value)
        }
      }
      return true
    }

    componentDidUpdate(prevProps) {

      if (this.props.matchInputs) {

        let currentInput =  this.props.form.currentInput

        if (this.props.form.data[currentInput] && prevProps.form.data[currentInput]) {

          if (prevProps.form.data[currentInput].value !== this.props.form.data[currentInput].value) {

            let match = this.dotheymatch(this.props.matchInputs.inputs)

            this.props.dispatch({
              type: 'FORM_INPUT_CHANGE',
              payload: {
                property: this.props.matchInputs.inputs[0],
                data: {
                  matchError: match ? false : this.props.matchInputs.error
                }
              }
            })
          }
        }
      }
    }

    render() {

      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

const Button = (WrappedComponent) => {

  return class extends Component {

    constructor() {

      super()

      this.containsErrors = this.containsErrors.bind(this)
      this.next = this.next.bind(this)
      this.previous = this.previous.bind(this)
      this.submit = this.submit.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }

    containsErrors(data) {

      let containsErrors = this.props.required.filter(input => {

        if (data[input] === undefined) {

          return input
        }

        if (data[input].validated !== true || data[input].error) {

          return input
        }

        if (data[input].queryInput && data[input].queryDone !== true) {

          return input
        }

        if (data[input].queryInput && data[input].queryError) {

          return input
        }

        return Object.keys(data).find(property => {

          if (!this.props.required.includes(property) && data[input].step === data[property].step) {

            return data[property].validated !== undefined && data[property].validated !== true 
          }
        })
      })

      let buttonCondition = containsErrors.length > 0

      console.log(containsErrors, data)

      this.props.dispatch({
        type: 'FORM_BUTTON_CHANGE',
        payload: {
          condition: buttonCondition
        }
      })
    }

    componentDidUpdate(prevProps) {

      let currentInput = this.props.form.currentInput

      if (this.props.form.data[currentInput] && prevProps.form.data[currentInput]) {

        let condition1 = prevProps.form.data[currentInput].value !== this.props.form.data[currentInput].value

        let condition2 = prevProps.form.error !== this.props.form.error

        let condition3 = prevProps.form.data[currentInput].error !== this.props.form.data[currentInput].error

        if (condition1 || condition2 || condition3) {

          this.containsErrors(this.props.form.data)
        }
      }
    }

    next (e) {

      e.preventDefault()

      this.props.dispatch({
        type: 'FORM_INCREMENT_STEP'
      })
    }

    previous (e) {

      e.preventDefault()

      this.props.dispatch({
        type: 'FORM_DECREMENT_STEP'
      })
    }

    submit (e) {

      e.preventDefault()

      let data = Object.keys(this.props.form.data).reduce((acc, current) => {

        let obj = acc || {}

        obj[current] = this.props.form.data[current].value

        return obj

      }, {})

      this.props.dispatch(this.props.onSubmit(data))
    }

    handleClick (e) {

      e.preventDefault()

      return this[e.currentTarget.id](e)
    }

    componentDidMount() {

      this.containsErrors(this.props.form.data)
    }

    render() {

      return (
        <WrappedComponent {...this.props} onClick={this.handleClick} />
      )
    }
  }
}

export class SmartInput extends Component {


  render() {

    let { property, method, className, focusedClassName, errorClassName, input, ...rest } = this.props

    let error, focused, typing, value, queryError

    if (input) {

      typing     =   input.typing
      focused    =   input.focused
      error      =   input.error
      value      =   input.value
      queryError =   input.queryError
    }

    let formInputs = classNames(
      [className],
      {
        [focusedClassName]: focused && (!error || typing) && (!queryError),
        [errorClassName]: (error && !typing ) || queryError
      }
    )

    return (<input id={property} data-method={method} className={formInputs} value={value ? value : ''} {...rest} />)
  }
}

export class SmartResponse extends Component {

  render() {

    let { validationError, emptyError, input, successClassName, className, ...rest } = this.props

    let error, typing, success, queryError

    if (input) {

      error      =  input.error
      typing     =  input.typing
      success    =  input.successMessage
      queryError =  input.queryError
    }

    let errors = {
      validationError: validationError,
      emptyError: emptyError
    }

    let formInputs = classNames(
      [className],
      {
        [successClassName]: success
      }
    )

    return (<div className={formInputs} {...rest}>{!typing && errors[error] || queryError || success}</div>)
  }
}

export class SmartButton extends Component {

  render() {

    let { className, disabledClassName, loading, type, ...rest } = this.props

    let formInputs = classNames(
      [className],
      {
        [disabledClassName]: this.props.disabled && !loading
      }
    )

    return (
      <button className={formInputs} id={type} {...rest}>
        {this.props.children}
      </button>
    )
  }
}

export const FormHOC = compose(Inputs, ShowErrorTimeout, QueryInputs, MatchInputs, Button)