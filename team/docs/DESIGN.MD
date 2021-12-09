# Overview
Systems Architecture: https://lucid.app/lucidchart/8ea83642-18a8-4d8b-9d87-b6d88ad25fab/edit?viewport_loc=-11%2C-56%2C2155%2C1055%2C0_0&invitationId=inv_fccd9bbd-1ba4-4705-b617-ea3ef8f197bb

![CS148 F21 T07 MusicTaste Systems Architecture](https://user-images.githubusercontent.com/40685456/145325756-590c19e7-57fc-462b-ac2b-8ab76b7de6ef.png)

# Software Architecture
Our application utilizes the MERN stack:
- MongoDB
- Express.js
- React
- Node.js

MongoDB is the database provider which our backend communicates with. 

Our backend is a Node.js javascript runtime, wrapped in an Express framework, compiled into an API which handles calls from the frontend to query and update data in the Mongo database. Our deployment of the backend server is hosted in the cloud on Heroku.

Our frontend application is built from React components for real-time interaction and flexibility. The components send calls to the backend API, providing a user interface for users to interact with and change data. Our deployment of the frontend is hosted on Netlify.

# Design Process
Our team began with a general feeling that the social services of big music streaming platforms were lacking at best and nonexistent at worst. We saw that music lovers were limited to either using general social media apps not designed for discussion centering on music, or using overcomplicated, difficult-to-use applications lacking integration with streaming services. We wanted to fix this issue for music lovers by building a lightweight, simple social platform where users can create, discuss, and connect with others over a shared love of music through intuitive interface design and a focus on simplicity and usability.

Our team decided on the MERN stack for our project because we wanted to maintain the same language throughout our backend and frontend for the sake of simplicity, and the MERN stack stays consistent with javascript utilized across the backend and frontend. Knowing we wanted javascript consistent through our backend and frontend, we knew we would use Node JS for our backend runtime, so we decided on Express as a framework to wrap around that runtime because Express is lightweight and flexible.

# User Interface / UX Flow
![Musix UX Flow](https://user-images.githubusercontent.com/40685456/143955606-4851c678-bc29-44e9-9e2e-44c670f609b8.png)
