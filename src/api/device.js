export function device (deviceSettings) {

  let device = {}

  if (deviceSettings.device === 'mobile') {

    if ('ontouchstart' in document.documentElement) {

      device = {
        type: 'mobile',
        eventType: 'touch'
      }
    } else {

      device = {
        type: 'mobile',
        eventType: 'click'
      }
    }
  } else {

      device = {
        type: 'desktop',
        eventType: 'click'
      }
  }

  return device
}
