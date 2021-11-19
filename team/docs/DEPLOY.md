# Deployment Instructions
## Getting Started
- Begin by cloning the repository to your local machine using ```git clone https://github.com/ucsb-cs148-f21/project-t07-musictaste.git```
- Open two terminal windows: one will be used to start the backend, the other will be used to start the frontend.
- In one terminal, navigate to project-t07-musictaste/MERN_app/server/, this will be your backend terminal. See the Backend section for instructions on starting the backend from here.
- In the other terminal, navigate to project-t07-musictaste/MERN_app/client/, this will be your frontend terminal. See the Frontend section for instructions on starting the frontend from here.
## Setting up the database
You need to set up a persistent database for the backend to communicate with which will store data about user profiles and playlists. To do that:
- Go to https://mongodb.com/ and either sign up or log in to an existing account.
- Create a new project, name it, then build a database.
- Pick the free shared cluster option, then pick any server/provider combination, then create your cluster database.
- While the cluster is being created, navigate to Database Access->Add New Database User, create a new user with privileges to read and write to any database, and write down the username and password.
- Navigate to Network Access->Add IP Address, then add your current IP address.
- Once the cluster has been created, navigate to the cluster and click Connect->Connect your Application. Copy down the connection string, replacing \<username\> with the name of your user created in the previous steps, and \<password\> with the accompanying password.
- Create a .env file in project-t07-musictaste/MERN_app/server/ and add the line ```CONNECTION_URL = <connection string>```, replacing \<connection string\> with your copied connection string to your database.
## Backend
Now you need to set up a backend server which will communicate with the database to fetch and push data, and expose an API for the frontend to communicate with. First: 
- Go to https://id.heroku.com/login and either sign up or log in to an existing account.
- Navigate to New->Create New App. Name your app, write down the name, then create it.

From your backend terminal (which should be at project-t07-musictaste/MERN_app/server/):
- Log in to heroku using the Heroku CLI with ```heroku login```.
- (You may need to run ```git init``` at this step if the next step throws errors)
- Run ```heroku git:remote -a <app-name>```, replacing \<app-name\> with the name of your heroku app.
- Run:
  ```
  git add .
  git commit -m "deploying backend server to heroku"
  git push heroku master
  ```
- Check the deployment using the Heroku dashboard
## Frontend
Now you need to deploy a frontend webapp that will serve as the user interface to interact with the data called from the backend. To do this:
- Navigate to project-t07-musictaste/MERN_app/client/src/api/index.js, then replace the URL in ```const API = axios.create({ baseURL: "https://localhost:3000" });``` with the url of the backend (accessible from your heroku dashboard) that you created in the previous section.
- Run ```npm run build``` from project-t07-musictaste/MERN_app/client/
- If ```npm run build``` fails, run ```rm -rf node_modules``` and ```npm install```, then try again.
- Go to https://www.netlify.com/ and either sign up or log in to an existing account.
- On netlify, navigate to Sites from the user dashboard
- Drag and drop the project-t07-musictaste/MERN_app/client/build/ folder from your local machine onto the netlify interface
- Once the build has succeeded your frontend will be deployed.
## Deploy Locally
If you want to deploy locally:
- Navigate to MERN_app/server/.env, add: ```PORT=3001``` to the .env file
- Change ```const API = axios.create({ baseURL: <backend-server-url> });``` to ```const API = axios.create({ baseURL: "http://localhost:3000" });``` in MERN_app/client/src/api/index.js
- Run npm start from MERN_app/server/
- Run npm start from MERN_app/client/
