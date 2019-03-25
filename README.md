# MelloCloudWebApp

Front end for https://www.mellocloud.com which is my personal website.

# What I learned

1. I learned how to setup React from scratch using webpack 4 and babel 7 without using create-react-app. The reason I wanted to do this is cause it gave me more freedom like when I wanted to use hot module reloading, I couldn't do it with create-react-app and now I have more say on how my files get bundled and so on.

2. I learned how to use react in general and how powerful it is. Doing things like toggling divs from the screen and showing some things only on mobile become so easy with react. Updating components based on state and props just makes things so much better.

3. Using react-router-dom to create single page web apps.

4. I learned how to use some other cool features like portal, when you want a component to appear above all other components and I used it to create my mobile navigation for my site.

5. I wanted to put all of my web development notes on the site but it was a lot of pdf files and when I first put them on there it took a while to open some of them, especially my node js one which is 96 pages. So I used imageMagick which is a command line tool and I turned my pdf files to png images page by page. Then I created a node js functions that checks how many pages each pdf has, orders them based on the last digits in the name 01, 02, 03 and create a JSON file that displays all the details.
With that json file I can lazy load the images and no matter how big the pdf file is they load at the same time.

6. Learned how to send files to server using rsync and only updating what has changed.