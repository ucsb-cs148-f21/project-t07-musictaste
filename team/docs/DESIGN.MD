Link to live version of document with user stories: https://docs.google.com/document/d/10oviGl2bqhqPWNX8uYH3ky3Qv5BrS_C6s26f9HHJNiY/edit?usp=sharing

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

The overall structure of our project was then constructed from an amalgamation of tutorials on the MERN stack that our team found and used to learn the details of the MERN stack. In particular, the tutorials detailed at https://youtu.be/ngc9gnGgUdA by Youtube channel Javascript Mastery served as a basis for the structure of our project. We then used the basic functionality and skills learned from those tutorials to begin implementing the features we knew we needed to differentiate our site as unique.

The tutorials themselves actually built the Blog Post functionality as a part of the learning process, simply branded as a separate function. Our team simply rebranded that baseline functionality into a blog post about music to match the goals of our project. We then set our goals on building a user profile page and collaborative playlist functionality, for which we used the basic structure of database parameters->backend controllers/models->frontend components learned from the basic skeleton of the Blogs Posts to implement playlists and unique user profiles in similar ways.

# User Interface / UX Flow
![Harmony UX Flow](https://user-images.githubusercontent.com/40685456/145350187-8783939a-6119-4452-bcd6-8d73a6a34212.png)
