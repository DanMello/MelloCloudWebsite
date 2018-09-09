let isMobile

if ('ontouchstart' in document.documentElement) {

  isMobile = true

} else {

  isMobile = false
}

export { isMobile }
