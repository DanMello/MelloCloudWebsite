import { device } from './device'

export function createEvents(obj, deviceSettings) {

  let eventsObj = {}
  let events = []
  let currentDevice = device(deviceSettings)
  
  if (currentDevice.type === 'mobile' && currentDevice.eventType === 'touch') {

    events = obj.mobileTouch

  } else if (currentDevice.type === 'mobile' && currentDevice.eventType === 'click') {

    events = obj.mobileClick

  } else if (currentDevice.type === 'desktop' && currentDevice.eventType === 'click') {

    events = obj.desktop
  }

  events.forEach(theEvent => {

    if (!eventsObj[theEvent.target]) eventsObj[theEvent.target] = {}

    eventsObj[theEvent.target][theEvent.event] = theEvent.method
  })

  return eventsObj
}