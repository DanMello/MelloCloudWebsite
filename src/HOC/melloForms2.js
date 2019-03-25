import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { compose } from 'redux'
import { validator } from '../helpers/validators'
import classNames from 'classnames'

const SetInput = function (WrappedComponent) {

  return class extends Component {

    constructor() {

      super()

      this.onChange = this.onChange.bind(this)
      this.onFocus = this.onFocus.bind(this)
      this.onBlur = this.onBlur.bind(this)
    }

    onChange(e) {

      let property  =   e.target.id,
      value         =   e.target.value,
      method        =   e.target.dataset.method,
      required      =   this.props.required || !!this.props.location && !!this.props.location.state && this.props.location.state.required,
      delayErrors   =   this.props.delayErrors || !!this.props.location && !!this.props.location.state && this.props.location.state.delayErrors,
      queryInputs   =   this.props.queryInputs || !!this.props.location && !!this.props.location.state && this.props.location.state.queryInputs

      !!this.props.form.typingDelays[property] && clearTimeout(this.props.form.typingDelays[property].delay)
      !!this.props.form.queryInputs[property] && clearTimeout(this.props.form.queryInputs[property].query)

      if (value === '' && !required.includes(property)) {

        this.props.dispatch({
          type: 'FORM_RESET_FIELDS',
          payload: [property]
        })

      } else {

        let state = {
          data: {
            value: value,
            method: method,
            error: validator(method, value),
            step: this.props.form.step,
            errorMessage: null
          }
        }

        if (delayErrors) {

          delayErrors
          .filter(x => x.input === property)
          .map(delay => {

            state.data = {
              ...state.data,
              typing: true
            }

            state.typingDelays = {
              [delay.input]: {
                delay: setTimeout(() => {

                  this.props.dispatch({
                    type: 'FORM_INPUT_CHANGE',
                    payload: {
                      property: delay.input,
                      data: {
                        typing: false
                      }
                    }
                  })

                }, delay.time)
              }
            }
          })
        }

        if (queryInputs) {

          queryInputs
          .filter(x => x.input === property)
          .map(query => {

            state.data = {
              ...state.data,
              queryVerified: false,
              queryError: false,
              successMessage: false,
            }

            if (state.data.error === false) {

              let method = query.method || this.props.queryMethod

              state.queryInputs = {
                [query.input]: {
                  query: setTimeout(() => {

                    this.props.dispatch(method(value, {
                      cancelable: true 
                    }))

                  }, query.time)                  
                }
              }
            }
          })
        }

        this.props.dispatch({
          type: 'FORM_INPUT_CHANGE',
          payload: {
            ...state,
            property: property
          }
        })
      }
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

      if (e.target.dataset.scrollup === 'true') {
        
        window.scroll(0,0)
      }

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

      let data = Object.keys(this.props.form.data)
        .filter(property => this.props.form.data[property].step === this.props.form.step)
        .reduce((acc, property) => ({...acc, [property]: this.props.form.data[property] }), {})

      return (
        <WrappedComponent 
          {...this.props}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          data={data}
        />
      )
    }
  }
}

const ValidateInput = function (WrappedComponent) {

  return class extends Component {

    render() {

      let allValid
      let required = this.props.required || !!this.props.location && !!this.props.location.state && this.props.location.state.required

      if (Array.isArray(required)) {

        let requiredInputs = required.every(input => {

          if (this.props.data[input]) {

            return this.props.data[input].error === false
          }
          return false
        })

        let notRequired = Object.keys(this.props.data).every(input => {

          if (!required.includes(input)) {

            return this.props.data[input].error === false
          }
          return true
        })

        allValid = [requiredInputs, notRequired].every(item => item === true)
      }

      return (
        <WrappedComponent {...this.props} allValidated={allValid} required={required}/>
      )
    }
  }
}

const QueryInputs = function (WrappedComponent) {

  return class extends Component {

    render() {

      let allQueried
      let queryInputs = this.props.queryInputs || !!this.props.location && !!this.props.location.state && this.props.location.state.queryInputs

      if (Array.isArray(queryInputs)) {

        allQueried = queryInputs.every(property => {

          if (this.props.data[property.input]) {

            return this.props.data[property.input].queryVerified === true
          }
          return false
        })
      }

      return (
        <WrappedComponent {...this.props} allQueried={allQueried} queryInputs={queryInputs} />
      )
    }
  }
}

const MatchInputs = function (WrappedComponent) {

  return class extends Component {

    render() {

      let matchRequired = this.props.matchRequired || !!this.props.location && !!this.props.location.state && this.props.location.state.matchRequired
      let doInputsMatch
      let allMatchRequiredValidated
      let matchError

      if (matchRequired) {

        if (Array.isArray(matchRequired.inputs)) {

          doInputsMatch = matchRequired.inputs.every((input, i, arr) => {

            if (this.props.data[input]) {

              return this.props.data[input].value === this.props.data[arr[0]].value
            }
            return false
          })

          allMatchRequiredValidated = matchRequired.inputs.every(input => {

            if (this.props.data[input]) {

              return this.props.data[input].error === false
            }
            return false
          })

          if (!!allMatchRequiredValidated && !doInputsMatch) {

            matchError = matchRequired.error
          }
        }
      }

      return (
        <WrappedComponent {...this.props} doInputsMatch={doInputsMatch} matchError={matchError} matchRequired={matchRequired}/>
      )
    }
  }
}

const EnableButton = function (WrappedComponent) {

  return class extends Component {

    constructor () {
      
      super()

      this.state = {
        validationRequirements: []
      }

      this.next = this.next.bind(this)
      this.previous = this.previous.bind(this)
      this.submit = this.submit.bind(this)
      this.handleClick = this.handleClick.bind(this)
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

      if (this.props.form.tokenObj) {

        data.token = this.props.form.tokenObj.token
        data.property = this.props.form.tokenObj.property
        data.heading = this.props.form.tokenObj.heading
      }

      this.props.dispatch(this.props.onSubmit(data))
    }

    handleClick (e) {

      e.preventDefault()

      return this[e.currentTarget.id](e)
    }

    componentDidMount() {

      let validationRequirements = []

      if (this.props.matchRequired) validationRequirements.push('doInputsMatch')
      if (this.props.required) validationRequirements.push('allValidated')
      if (this.props.queryInputs) validationRequirements.push('allQueried')

      this.setState({
        validationRequirements
      })
    }

    render() {

      let condition = !this.state.validationRequirements.every(requirement => this.props[requirement] === true)

      return (
        <WrappedComponent {...this.props} disabled={condition} onClick={this.handleClick} />
      )
    }
  }
}

export class SmartInput extends Component {


  render() {

    let { property, method, className, focusedClassName, errorClassName, input, textArea, scrolluponblur, ...rest } = this.props

    let error, focused, typing, value

    if (input) {

      typing     =   input.typing
      focused    =   input.focused
      error      =   input.error
      value      =   input.value
    }

    let formInputs = classNames(
      [className],
      {
        [focusedClassName]: focused && (!error || typing),
        [errorClassName]: error && !typing
      }
    )

    let inputType

    textArea ?
      inputType = <textarea id={property} data-method={method} data-scrollup={scrolluponblur} className={formInputs} value={value ? value : ''} {...rest}/>
      :
      inputType = <input id={property} data-method={method} className={formInputs} value={value ? value : ''} {...rest} />

    return (inputType)
  }
}

export class SmartResponse extends Component {

  render() {

    let { validationError, emptyError, input, successClassName, className, matchError, maxCharatersError, ...rest } = this.props

    let error, typing, success, queryError, errorMessage

    if (input) {

      error        =  input.error
      typing       =  input.typing
      success      =  input.successMessage
      queryError   =  input.queryError
      errorMessage =  input.errorMessage
    }

    let errors = {
      validationError: validationError,
      emptyError: emptyError,
      maxCharatersError: maxCharatersError
    }

    let formInputs = classNames(
      [className],
      {
        [successClassName]: success
      }
    )

    return (<div className={formInputs} {...rest}>{!typing && errors[error] || queryError || success || matchError || errorMessage}</div>)
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

export const FormHOC = compose(SetInput, ValidateInput, QueryInputs, MatchInputs, EnableButton)