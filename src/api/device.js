import { getCookie } from './cookies'

export function device () {

  let device = {}
  let deviceCookie = getCookie('device')

  if (deviceCookie === 'mobile') {

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
