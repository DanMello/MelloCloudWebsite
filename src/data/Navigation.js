const NavItems = [
  {
    category: 'Main Menu',
    key: 'Main Menu',
    items: [
      {key: 'Home', name: 'Home', type: 'link', to: '/'},
      {key: 'Notes', name: 'Notes', type: 'link', to: '/notes'},
      // {key: 'Resume', name: 'Resume', type: 'alink', to: '/assets/pdf/DansResume.pdf'},
      {key: 'GitHub', name: 'GitHub', type: 'alink', to: 'https://github.com/DanMello'},
      {key: 'LinkedIn', name: 'LinkedIn', type: 'alink', to: 'https://www.linkedin.com/in/jdanmello/'},
      {key: 'Contact', name: 'Contact', type: 'link', to: '/contact'}
    ]
  },
  {
    category: 'Development',
    key: 'Projects',
    development: true,
    items: [	
      {key: 'ResumeEditor', name: 'Resume Editor', type: 'link', to: '/resume'},
      // {key: 'TicTacChat', name: 'Tic-Tac-Chat', type: 'link', to: '/tic-tac-chat'}
    ]
  }
]

export { NavItems }