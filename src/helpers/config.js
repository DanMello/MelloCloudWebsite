export function checkHostName (hostname) {

  let config

  if (hostname === 'localhost') config = { url: 'http://localhost:3001', device: 'desktop', enviroment: 'development', isMobile: false }
  else if (/10./.test(hostname)) config = { url: 'http://' + hostname + ':3001', device: 'mobile', enviroment: 'development', isMobile: true }
  else if (hostname === 'mellocloud.com') config = { url: 'http://api.mellocloud.com', device: 'desktop', enviroment: 'production', isMobile: false }
  else if (hostname === 'm.mellocloud.com') config = { url: 'http://api.mellocloud.com', device: 'mobile', enviroment: 'production', isMobile: true }

  return config
}