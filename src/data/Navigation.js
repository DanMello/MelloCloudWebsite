const NavItems = [
  { 
    category: 'Main Menu',
    key: 'Main Menu',
    items: [
      {key: 'Home', name: 'Home', type: 'link', to: '/'},
      {key: 'Notes', name: 'Notes', type: 'link', to: '/notes'},
      {key: 'Resume', name: 'Resume', type: 'alink', to: '/assets/DansResume.pdf', development: true},
      {key: 'GitHub', name: 'GitHub', type: 'alink', to: 'https://github.com/DanMello'},
      {key: 'Contact', name: 'Contact', type: 'link', to: '/contact'},
    ]
  },
  {
    category: 'Projects',
    key: 'Projects',
    items: [
      {key: 'react-video-player', name: 'react-video-player', type: 'link', to: '/react-video-player'},
      {key: 'react-smart-forms', name: 'redux-smart-forms', type: 'link', to: '/redux-smart-forms', development: true}
    ]
  }
]

export { NavItems }