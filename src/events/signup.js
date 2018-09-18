
function goHome () {

  this.props.history.push('/')
}

function toggleLogo () {

  this.setState(prevState => ({
    hoverLogo: !prevState.hoverLogo
  }))
}

export default function initializeEvents () {

  return {
    mobileTouch: [
      { 
        event: 'onTouchEnd', 
        method: goHome.bind(this),
        target: 'logoGoHome'
      },
    ],
    mobileClick: [
      { 
        event: 'onClick', 
        method: goHome.bind(this), 
        target: 'logoGoHome'
      }
    ],
    desktop: [
      { 
        event: 'onClick', 
        method: goHome.bind(this), 
        target: 'logoGoHome'
      },
      { 
        event: 'onMouseEnter', 
        method: toggleLogo.bind(this),
        target: 'logoGoHome'
      },
      { 
        event: 'onMouseLeave', 
        method: toggleLogo.bind(this),
        target: 'logoGoHome'
      },
    ]
  }
}