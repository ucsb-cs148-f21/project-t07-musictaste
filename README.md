# project-t07-musictaste

Team Name: Music Taste (subject to change)

Project Description:
  GV: social app to connect people through music taste
  More realistic vision: supports daily music dump for social groups, provide
    Spotify account data analysis. Perhaps tailor the app for UCSB students.
    (more to come during storytime)
  Our project is going to be a music dump webapp where users can track the music they've listened to, similar to a diary where they can share on the profile their listens and their listening history. It will also have a collaborative playlist feature which allows users to make playlists with their friends and introduces a tiered permission system to make changes to the playlist, similar to discord. 
  
User Roles:
  Standard User: A standard user would have access to a customizable user profile and have the capability to create and contribute to collaborative playlists.


Team Members & GitHub Handles:
- Brandon Son @brandonwrson
- Karanina (Laszlo) Zim @laszlo-tw
- Karanveer (KB) Benipal @ksbenipal
- Kevin Tran @320trankt

Deployments:
- Brandon's deployment: https://frozen-brook-59380.herokuapp.com/
- Brandon's deployment repo: https://github.com/brandonwrson/hello-world-deployment
- Karanina's deployment: https://frozen-citadel-26811.herokuapp.com/
- Karanina's deployment repo: https://github.com/laszlo-tw/frozen-citadel-26811/tree/master
- Karanveer's deployment: https://dp83-hello-world-2.herokuapp.com
- Karanveer's Repo: https://github.com/ksbenipal/Heroku-Deployment-App/tree/master
- Kevin's deployment: https://murmuring-wildwood-54924.herokuapp.com/
- Kevin's Repo: https://github.com/320trankt/hello-world-node-app

Tech Stack:
- MERN stack
- Uses Javascript consistently through frontend and backend for ease of coding

MVP Demo steps:
Prerequistes:
- Need to install the latest version of node on machine.
Dependencies:
- React - runs the front end
- Axios - is used to make https requests and handle their responses in client/src/api/index.js
- express - eliminates boiler plate abd helped to make simpler api for creating end points
- mongoose - connecting to database
- The rest of the dependencies are for small functionality for specific functions. To install these, when you open the server and client side respectively, run npm install on both and the dependencies will be installed. Ignore the vulnerabilities for now. (will be described below)
Installation Steps:
- Download files from tag onto local machine
- open up two terminals and cd into MERN_app/client and MERN_app/server
- run npm install to get all dependencies 
- run npm start on both terminals
- this will prompt the local browser to run the app!
Functionality 
- In this app you can currently log in and make some posts about music. For the log in, you can either make a new account with the form or use google authentication. Once logged in, you can make your own posts or like others posts. Next, we have a user profile page that can be toggled with the profile icon on the top header to the right. There will be more on this page to come later.
Known Problems
- One issue that we have right now is that even if you aren't the creator, you can delete and edit others posts. You should only be able to do that to your own posts and we will be addressing that right after the MVP.
