exports = module.exports = function(app) {

  let application = app || {}
  
  let enviroment = process.env.NODE_ENV || 'development'

  let settings = {
    development: {
      database: {
        client: 'mysql',
        connection: {
          host: 'localhost', // Default local mysql host
          user: 'root', // Put your user for mysql here
          password: 'Mysecurepassword1!',
          database: 'mellocloud' // Put your development database name here, for this project
        }
      },
      url: 'localhost:3001',
      mobileurl: 'm.localhost' // This is the ip address on my laptop in my local network, im using as mobile address because i can access it from my iphone and i leave local host as the desktop one 
    },
    production: {
      database: {
        client: 'mysql',
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME
        }
      },
      url: 'jdanmello.com',
      mobileurl: 'm.jdanmello.com'
    },
    urlencodedParser: {
      extended: false,
      limit: '50mb'
    },
    jsonParser: {
      limit: '50mb'
    },
    deployment: {
      apps: [
        {
          name : 'mellocloud.com',
          script : './index.js',
        }
      ],
      deploy: {
        production: {
          user: 'deploy',
          host: '10.0.0.201', // local ip or public ip if im not connect to local connection
          ref: 'origin/master',
          repo: 'https://github.com/DanMello/mellocloud.com.git',
          path: '/home/deploy/mellocloud/mellocloud.com',
          'post-deploy' : 'nvm install && npm install && npm run build && /home/deploy/.nvm/versions/node/v8.11.3/bin/pm2 reload ecosystem.config.js --env production --only mellocloud.com'
        }
      }
    }
  }

  return {
    enviroment,
    settings
  }
}
