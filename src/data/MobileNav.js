const NavItems = [
  // {
  //   category: 'My Account',
  //   key: 'My Account',
  //   loginRequired: true,
  //   items: [
  //     {key: 'About Me', name: 'About Me', type: 'link', to: '/user/profile'},
  //   ]
  // },
  // {
  //   category: 'Products',
  //   key: 'Products',
  //   items: [
  //     {key: 'mello cloud IOS', name: 'mello cloud IOS', type: 'link', to: '/products/mellocloudios'},
  //   ]
  // },
  { 
    category: 'Main Menu',
    key: 'Main Menu',
    items: [
      {key: 'Home', name: 'Home', type: 'link', to: '/'},
      {key: 'About', name: 'About', type: 'link', to: '/about'},
      {key: 'Contact', name: 'Contact', type: 'link', to: '/contact'},
    ]
  },
  {
    category: 'Help & Settings',
    key: 'Help & Settings',
    items: [
      {key: 'Create Account', name: 'Need an account?', type: 'link', to: '/account/signup', loginRequired: false},
      {key: 'Manage Account', name: 'Manage Account', type: 'link', to: '/settings', loginRequired: true},
      {key: 'Terms & Policies', name: 'Terms & Policies', type: 'link', to: '/account/terms'},
      {key: 'Sign in', name: 'Sign in', type: 'link', to: '/account/login', loginRequired: false},
      {key: 'Sign out', name: 'Sign out', type: 'button', method: 'logOut', loginRequired: true},
    ]
  }
]

export { NavItems }