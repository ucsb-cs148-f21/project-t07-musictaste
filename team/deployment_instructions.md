# Deployment Instructions
## Frontend
Frontend currently deployed to https://optimistic-heisenberg-032868.netlify.app/, to recreate with your own local build:
- Go to https://www.netlify.com/
- Sign up/Log in
- Run ```npm run build``` from project-t07-musictaste/MERN_app/client
- Drag and drop the project-t07-musictaste/MERN_app/client/build/ folder onto the netlify interface
- Once the build has succeeded your frontend will be deployed.
## Backend
- Backend currently deployed to heroku site https://musictaste-backend.herokuapp.com/
- Run heroku login
- Run ```heroku git:remote -a musictaste-backend``` from project-t07-musictaste/MERN_app/server/
- When making changes to the backend, run:
  ```
  git add .
  git commit -m "commit message"
  git push heroku master
  ```
- Check the deployment using the Heroku dashboard
## Deploy Locally
- Navigate to MERN_app/server/.env, add: ```PORT=3001``` to the .env file
- Change ```const API = axios.create({ baseURL: "https://musictaste-backend.herokuapp.com" });``` to ```const API = axios.create({ baseURL: "http://localhost:3000" });``` in MERN_app/client/src/api/index.js
- Run npm start from MERN_app/server/
- Run npm start from MERN_app/client/
