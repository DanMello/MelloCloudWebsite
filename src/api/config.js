export function checkHostName (hostname) {

  let config

  if (hostname === 'localhost') config = { url: 'http://localhost:3001', device: 'desktop', enviroment: 'development', eventType: 'click' }
  else if (/10./.test(hostname)) config = { url: 'http://' + hostname + ':3001', device: 'mobile', enviroment: 'development' }
  else if (hostname === 'mellocloud.com') config = { url: 'http://api.mellocloud.com', device: 'desktop', enviroment: 'production',  }
  else if (hostname === 'm.mellocloud.com') config = { url: 'http://api.mellocloud.com', device: 'mobile', enviroment: 'production' }

  if (config.device === 'mobile') {

    if ('ontouchstart' in document.documentElement) {

      config.eventType = 'touch'

    } else {

      config.eventType = 'click'
    }
  }

  return config
}