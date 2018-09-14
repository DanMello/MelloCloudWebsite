export function productionDesktop() {
  return {
    type: "PRODUCTION_DESKTOP",
    payload: {
      url: 'http://mellocloud.com',
      device: 'desktop'
    }
  }
}

export function productionMobile() {
  return {
    type: "PRODUCTION_MOBILE",
    payload: {
      url: 'http://m.mellocloud.com',
      device: 'mobile'
    }
  }
}

export function developmentMobile() {
  return {
    type: "DEVELOPMENT_MOBILE",
    payload: {
      url: 'http://localhost:3001',
      device: 'mobile',
      enviroment: 'development'
    }
  }
}

export function developmentDesktop() {
  return {
    type: "DEVELOPMENT_DESKTOP",
    payload: {
      url: 'http://localhost:3001',
      device: 'desktop',
      enviroment: 'development'
    }
  }
}