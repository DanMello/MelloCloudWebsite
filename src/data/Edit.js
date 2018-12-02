const propertyList = {
  firstName: {
    heading: 'first name',
    property: 'first_name',
    inputs: [
      {
        property: 'first_name',
        title: 'First name',
        method: '["notEmpty","onlyLetters","maxCharaters"]',
        type: 'text',
        placeholder: true,
        response: {
          maxCharatersError: 'New first name cannot be longer than 35 characters.',
          emptyError: 'New first name cannot be empty.',
          validationError: 'New first name can only contain letters'
        }
      },
    ],
    required: ['first_name']
  },
  lastName: {
    heading: 'last name',
    property: 'last_name',
    inputs: [
      {
        property: 'last_name',
        title: 'Last name',
        method: '["notEmpty","onlyLetters","maxCharaters"]',
        type: 'text',
        placeholder: true,
        response: {
          maxCharatersError: 'New last name cannot be longer than 35 characters.',
          emptyError: 'New last name cannot be empty.',
          validationError: 'New last name can only contain letters'
        }
      }
    ],
    required: ['last_name']
  },
  email: {
    heading: 'email',
    property: 'email',
    inputs: [
      {
        property: 'email',
        title: 'Email',
        method: '["notEmpty","validEmail"]',
        type: 'email',
        placeholder: true,
        response: {
          emptyError: 'New email cannot be empty.',
          validationError: 'Please enter a valid new email.'
        }
      }
    ],
    required: ['email'],
    delayErrors: [
      { input: 'email', time: 1400 },
    ],
    queryInputs: [
      { input: 'email', delayAfterValidated: 350 }
    ]
  },
  password: {
    heading: 'password',
    property: 'password',
    inputs: [
      {
        property: 'password',
        title: 'Password',
        method: '["notEmpty","validPassword"]',
        type: 'password',
        response: {
          matchError: true,
          emptyError: 'New password cannot be empty.',
          validationError: 'New password does not contain at least 8 characters and 1 number.'
        }
      },
      {
        property: 'passwordConfirmation',
        title: 'Password Confirmation',
        method: '["notEmpty","validPassword"]',
        type: 'password',
        response: {
          emptyError: 'New password Confirmation cannot be empty.',
          validationError: 'New password Confirmation does not contain at least 8 characters and 1 number.'
        }
      },
    ],
    required: ['password', 'passwordConfirmation'],
    delayErrors: [
      { input: 'password', time: 1400 },
      { input: 'passwordConfirmation', time: 1400 }
    ],
    matchRequired: {
      error: 'Passwords do not match.',
      inputs: ['password', 'passwordConfirmation']
    }
  }
}

export { propertyList }