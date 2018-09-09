import { isMobile } from './isMobile'

export function createEvents(obj) {

  let eventsObj = {}
  let events = []

  if (isMobile) {

    events = obj.mobile

  } else {

    events = obj.desktop
  }

  events.forEach(theEvent => {

    if (!eventsObj[theEvent.target]) eventsObj[theEvent.target] = {}

    eventsObj[theEvent.target][theEvent.event] = theEvent.method
  })

  return eventsObj
}