import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { FaAngleLeft, FaPaperPlane, FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Loader from '../partials/myloader'
import { SimplerForm, Input, Response, Button } from 'react-simpler-forms'
import SingleStepForm from './react-simpler-forms-single-step-form'
import MultiStep from './react-simpler-forms-multi-step'

import './react-simpler-forms.css'

class SimplerFormsVisualRepresentation extends Component {

  constructor () {

    super()

    this.state = {
      disabled: false,
      checked: 'single',
      height: 0
    }

    this.className = this.className.bind(this)
    this.updateFormType = this.updateFormType.bind(this)
    this.updateButton = this.updateButton.bind(this)

    this._form = React.createRef()
  }

  componentDidUpdate(prevProps, prevState) {

    if (this._form.current.offsetHeight !== prevState.height) {

      this.setState({
        height: this._form.current.offsetHeight
      })
    }
  }

  componentDidMount() {

    this.setState({
      height: this._form.current.offsetHeight
    })
  }

  updateFormType(e) {

    this.props.updateform('resetForm')

    this.setState({
      checked: e.target.value
    })
  }

  updateButton(e) {

    this.setState({
      disabled: e.target.checked
    })
  }

  className(value) {

    let classNames

     switch (typeof value) {
      case 'string':
        classNames = 'react-simpler-forms-string'
        break;
      case 'boolean':
        classNames = 'react-simpler-forms-bool'
        break;
      case 'number': 
        classNames = 'react-simpler-forms-number'
        break;
      case 'object':
        classNames = 'react-simpler-forms-object'
        break;
      default:
        classNames = 'react-simpler-forms-default-property'
    }

    return classNames
  }

  render() {

    let isMobile = !this.props.config.isMobile

    let formProps = {
      form: this.props.form,
      updateform: this.props.updateform
    }

    // console.log(this.state.formType)

    return (

      <div style={{display: 'flex', flexDirection: 'column', minWidth: '1100px'}}>

        <div className='react-simpler-forms-heading-container'>

          <div>
            <h1>react-simpler-forms</h1>
            <div className='react-simpler-forms-version'>Version 1.0.0</div>
            <div className='react-simpler-forms-title'>Live demo.</div>
          </div>

          <div>
            <Link to='/' className={'react-simpler-forms-logo-container'}>

              <FaCloud className='react-simpler-forms-logo-cloud' />

              <h1 className={'react-simpler-forms-logo-heading'}>mello cloud</h1>

            </Link>
          </div>

        </div>

        <div className='react-simpler-seperate-containers'>

          <div className='react-simpler-forms-container-top'>
            
            <h1 className='react-simpler-forms-sub-headings'>Form Options</h1>

            <div className='react-simpler-forms-form-type-radio-containers'>

              <div className='react-simpler-forms-form-type-heading'>Form type</div>

              <div className='react-simpler-forms-form-type-radio-containers'>
                <input type='radio' name='formtype' value='single' onChange={this.updateFormType} checked={this.state.checked === 'single'} />
                <label className='react-simpler-forms-form-type-labels'>Single step form</label>
              </div>

              <div className='react-simpler-forms-form-type-radio-containers'>
                <input type='radio' name='formtype' value='multi' onChange={this.updateFormType} checked={this.state.checked === 'multi'}/>
                <label className='react-simpler-forms-form-type-labels'>Multi step form</label>
              </div>
            </div>

            <div className='react-simpler-forms-form-type-radio-containers'> 

              <div className='react-simpler-forms-form-type-heading'>Button</div>

              <div className='react-simpler-forms-form-type-radio-containers'>
                <input type='checkbox' name='formbutton' value='disabled' onChange={this.updateButton} />
                <label className='react-simpler-forms-form-type-labels'>disabled until all inputs validated.</label>
              </div>

            </div>
          </div>

          <div style={{display: 'flex'}}>

            <div className='react-simpler-forms-container-left' style={{maxHeight: this.state.height + 'px'}}>

              <div className='react-simpler-forms-heading-subcontainer'>
                <h1 className='react-simpler-forms-sub-headings'>Form state</h1>
              </div>

              <div>
                <div className='react-simpler-forms-statement'>Managed by the HOC SimplerForm</div>

                <div className='react-simpler-state-container'>
                  <div>step: <div className={this.className(formProps.form.step)}>{formProps.form.step}</div>,</div>
                  <div>error: <div className={this.className(formProps.form.error)}>{String(formProps.form.error)}</div>,</div>
                  <div>response: <div className={this.className(formProps.form.response)}>{String(formProps.form.response)}</div>,</div>
                  <div>loading: <div className={this.className(formProps.form.loading)}>{String(formProps.form.loading)}</div>,</div>
                  <div>
                    Data: {'{'} {Object.keys(formProps.form.data).map(item => {

                      return (
                        <div className='react-simpler-forms-properties' key={item}>
                          <div>{item} : {'{'}</div>

                             {Object.keys(formProps.form.data[item]).map(property => {

                              let data = formProps.form.data[item]

                              if (property === 'validators') {

                                return <div className='react-simpler-forms-properties' key={property}>
                                  validators: [ {data.validators.map((obj, i) => {
                                    return (
                                      <div 
                                        key={item + '-validators' + i} 
                                        className='react-simpler-forms-properties'
                                        >
                                        {'{'}
                                          <div className='react-simpler-forms-properties'>"method": <div className='react-simpler-forms-string'>{obj.method}</div>,</div>
                                          <div className='react-simpler-forms-properties'>"error": <div className={this.className(obj.error)}>{String(obj.error)}</div></div>
                                        {'}'},
                                      </div>
                                    )
                                  })}
                                  ],
                                </div>

                              } else if (property === 'values') {

                                return <div className='react-simpler-forms-properties' key={property}>
                                  values: [
                                    {data.values.map((obj, i) => {

                                      return (
                                        <div
                                          key={item + '-values' + i} 
                                          className='react-simpler-forms-properties'
                                        >
                                          {'{'}
                                            <div className='react-simpler-forms-properties'>"value": <div className='react-simpler-forms-string'>{obj.value}</div>,</div>
                                            <div className='react-simpler-forms-properties'>"checked": <div className={this.className(obj.checked)}>{String(obj.checked)}</div>,</div>
                                            {obj.required && <div className='react-simpler-forms-properties'>"required": <div className={this.className(obj.required)}>{String(obj.required)}</div>,</div>}
                                          {'}'},
                                        </div>
                                      )
                                    })}
                                  ],
                                </div>

                              } else {

                                 return <div className='react-simpler-forms-properties' key={property}>
                                            {property} : <div className={this.className(data[property])}>{String(data[property])}</div>,
                                        </div>
                              }
                            })}
                          {'}'},
                        </div>
                      )
                      })}
                    {'}'}
                  </div>
                </div>
              </div>

            </div>

            <div className='react-simpler-forms-container-right' ref={this._form}>
              
              <div style={{display: 'flex', alignItems: 'center'}}>

                <h1 className='react-simpler-forms-sub-headings'>Example Form</h1>

                {formProps.form.loading && <Loader containerClass='react-simpler-forms-loader' width={'25px'} height={'25px'} color={'rgb(0,125,255)'} />}

              </div>

              <div style={{color: '#444', marginBottom: '10px'}}>Type something and see the form state change.</div>

              <div className='react-simpler-forms-success-response'>{formProps.form.response}</div>
              <div className='react-simpler-forms-error-response'>{formProps.form.error}</div>

              {this.state.checked === 'single' ? 
                <SingleStepForm 
                  formProps={formProps} 
                  disabled={this.props.disabled}
                  disabledState={this.state.disabled} 
                  config={this.props.config} 
                />
                :
                <MultiStep 
                  formProps={formProps} 
                  disabled={this.props.disabled}
                  disabledState={this.state.disabled} 
                  config={this.props.config} 
                />
              }

            </div>

          </div>

        </div>
        
        <div className='react-simpler-forms-bottom-links'>
          <div>View react-simpler-forms on 
            <a className='footer-link' href=''>GitHub</a> 
            or 
            <a className='footer-link' href=''>npm</a>
            V1.0.0
          </div>
        </div>

      </div>
    )
  }
}

export default hot(module)(SimplerForm(SimplerFormsVisualRepresentation))