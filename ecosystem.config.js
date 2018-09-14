module.exports = {
  apps: [
    {
      name : 'MelloCloudWebite',
      script : './index.js',
    }
  ],
  deploy: {
    production: {
      user: 'deploy',
      host: '10.0.0.201', // local ip or public ip if im not connect to local connection
      ref: 'origin/master',
      repo: 'https://github.com/DanMello/mellocloud.com.git',
      path: '/home/deploy/MelloCloud/MelloCloudWebsite',
      'post-deploy' : 'nvm install && npm install && npm run build && /home/deploy/.nvm/versions/node/v8.11.3/bin/pm2 reload ecosystem.config.js --env production --only MelloCloudWebite'
    }
  }
}