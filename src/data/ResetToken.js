const required = ['password', 'passwordConfirmation']

const delayErrors = [
  { input: 'password', time: 1400 },
  { input: 'passwordConfirmation', time: 1400 }
]

const matchRequired = { 
  error: 'Passwords do not match.',
  inputs: ['password', 'passwordConfirmation']
}

export { required, delayErrors, matchRequired }