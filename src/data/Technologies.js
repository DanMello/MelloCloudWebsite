let Technologies = [
  {
    heading: "Front end",
    list: [
      {
        title: 'React',
        paragraph:  "React is the first Javascript framework I started learning and I built this entire website with it. " +
                    "It makes it a lot easier to create more complicated user interfaces and keeps my code organized. " +
                    "There is a strong community around it and you can usually find a solution to issues you run into pretty easily. " + 
                    "They are always moving React forward and I'm exited to continue to learn the new features like HOOKS!"
      },
      {
        title: 'Redux',
        paragraph:  "I decided to use redux when I started creating a multi-step form and managing state between pages got complicated. " +
                    "I also used redux middleware to create a reusable function to handle all api requests with axios. " +
                    "Some of the config and user information is stored with redux to know if the user is logged in and other info like whether the user is on mobile or desktop." 
      },
      {
        title: 'React Router 4',
        paragraph:  "I figured its worth mentioning React Router since its pretty much a crucial part of making a single page web app with React. " +
                    "In my routes.js file where I assigned all routes, I also connect to the redux store and pass props to the components from there. " +
                    "I also use a function I found on stack overflow that lets me create a props route instead of using render props which just makes my code a mess."
      },
      {
        title: 'Webpack 4 & Babel 7',
        paragraph:  "Originally I was using create-react-app but when I wanted to use react-hot-loader it would not let me without ejecting. " +
                    "So I decided just to start from scratch and setup Webpack and Babel myself. " + 
                    "Now I can use react-hot-loader which is amazing and I have more control over my web app."
      }
    ]
  },
  {
    heading: "Back end",
    list: [
      {
        title: 'Ubuntu server 16',
        paragraph:  "I run my own web server from home on an old computer I got from my girlfriends mom. " +
                    "Since its connect to my home network I had to forward port 80 from my public ip to my local server. " + 
                    "I also setup passwordless ssh login and I have remote access to it because I forward port 22 as well."
      },
      {
        title: 'Nginx',
        paragraph:  "Nginx is used to sniff the clients browser and find out if its mobile or desktop, then rewrite the url appropriately. " +
                    "It also serves all my static assets and redirects the api sub domain to my node js app. " + 
                    "Lastly, it is responsible for redirecting all http traffic to https."
      },
      {
        title: 'Node js',
        paragraph:  "Node js is managed by pm2 and nvm, it runs express to handle all api calls. " +
                    "The node js app is run on a deploy user with less privileges and it doesn't run on port 80. " + 
                    "Credentials are stored using dot-env. I used to use passport to authenticate the user and redis to store sessions but " +
                    "now I use json web tokens to verify the user and local storage for persistent login."
      },
      {
        title: 'Mysql',
        paragraph:  "Mysql is the database I use in my server and so far I'm only storing basic user info. " +
                    "User passwords are encrypted using nodejs-bcrypt and I use knex with node js to update the database."
      }
    ]
  },
  {
    heading: "Work flow & Tools",
    list: [
      {
        title: 'Ubuntu 16.04',
        paragraph:  "I used to use windows for everything I did but when I got into web development I ran into a lot of problems trying to install things. " +
                    "So I decided to switch to Ubuntu and I haven't looked back since, I love it."
      },
      {
        title: 'Sublime text',
        paragraph:  "Sublime text is my favorite text editor so far and on the server I just use nano if I have to edit something."
      },
      {
        title: 'Chrome DevTools & Google',
        paragraph:  "Google is my go to for everything, its where I learned pretty much everything I know today. " +
                    "Chrome Developer Tools is where I debug my website and sometimes mess with styling for things like animations or positioning."
      },
      {
        title: 'Deployment',
        paragraph:  "I used to deploy my app using pm2 deploy production but now I wrote a bash script to do it all. " +
                    "I have more control over how files are transfered for example, I use rsync and I can choose to transfer only the files that changed. " + 
                    "It's also easier to transfer my images, I'm not even sure how you do that with pm2."
      }
    ]
  }
]

export { Technologies }