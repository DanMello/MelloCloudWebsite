export function truncate(string) {

  if (string.length > 20) {

    return string.substring(0,20)+'...'

  } else {

    return string
  }
}
