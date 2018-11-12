import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const docroot = document.getElementById('root') 
const portalRoot = document.getElementById('portal')

export default class Portal extends Component {

  constructor() {

    super()

    this.el = document.createElement('div')
  }

  componentDidMount() {

    portalRoot.appendChild(this.el)

    portalRoot.addEventListener('click', this.props.method)

    this.el.classList.add(this.props.className)
  }

  componentDidUpdate(prevProps) {

    if (this.props.rootClass !== prevProps.rootClass) {

      docroot.className = this.props.rootClass
      portalRoot.className = this.props.rootClass
    }
  }

  componentWillUnmount () {

    docroot.classList.remove(this.props.rootClass)
    portalRoot.classList.remove(this.props.rootClass)

    portalRoot.removeEventListener('click', this.props.method)

    portalRoot.removeChild(this.el)
  }

  render() {

    let {children } = this.props

    return ReactDOM.createPortal(children, this.el)
  }
}