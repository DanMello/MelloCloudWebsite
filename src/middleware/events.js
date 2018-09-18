const events = ({ dispatch, getState}) => next => action => {

  if (action.type === 'FILTER_EVENTS') {

    let obj = {}
    let eventsObj = {}
    let eventsArray = []
    
    if (action.device === 'mobile' && action.eventType === 'touch') {

      eventsArray = action.payload.mobileTouch

    } else if (action.device === 'mobile' && action.eventType === 'click') {

      eventsArray = action.payload.mobileClick

    } else if (action.device === 'desktop' && action.eventType === 'click') {

      eventsArray = action.payload.desktop
    }

    eventsArray.forEach(theEvent => {

      if (!eventsObj[theEvent.target]) eventsObj[theEvent.target] = {}

      eventsObj[theEvent.target][theEvent.event] = theEvent.method
    })

    dispatch(action.success(eventsObj, action.key))

  } else {

    return next(action)
  }
}

export default events