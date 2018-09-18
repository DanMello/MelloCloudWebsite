
export function filteredEvents(events, componentName) {

  let obj = {}

  obj[componentName] = events

  console.log(obj)

  return {
    type: 'FILTERED_EVENTS',
    payload: obj
  }
}

export function filterEvents(events, config, componentName) {

  return {
    type: 'FILTER_EVENTS',
    payload: events,
    device: config.device,
    eventType: config.eventType,
    key: componentName,
    success: filteredEvents
  }
}