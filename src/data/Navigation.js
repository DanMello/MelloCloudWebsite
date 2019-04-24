const NavItems = [
  { 
    category: 'Main Menu',
    key: 'Main Menu',
    items: [
      {key: 'Home', name: 'Home', type: 'link', to: '/'},
      {key: 'Notes', name: 'Notes', type: 'link', to: '/notes'},
      {key: 'Resume', name: 'Resume', type: 'alink', to: '/assets/pdf/DansResume.pdf'},
      {key: 'GitHub', name: 'GitHub', type: 'alink', to: 'https://github.com/DanMello'},
      {key: 'Contact', name: 'Contact', type: 'link', to: '/contact'}
    ]
  }
]

export { NavItems }