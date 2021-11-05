Project: Music Taste WebApp

Mentor: Alan, Nagarjun

Meeting Time: Lecture 10 Monday November 1, 2021

Type of meeting: Sprint Planning + Storytime

Team: Brandon Son [X], Karanina (Laszlo) Zim [X], Karanveer (KB) Benipal [X], Kevin Tran [X]

Team:

Brandon:

Laszlo:

KB:

Kevin: added some preliminary items to kanban board to be considered during story time

**Scribed Discussion:**

Biggest priorities for this week:
- fix heroku deployment
- develop unit testing for user authentication
- develop unit testing for user profile page
- develop higher level testing (this week's lab)

Backend pair discussion:
- database: set up user database (connect to user profile)
    - "as a user I want to log into my user profile and have recent changes be reflected (no hard code) so that my user profile remains up to date"

Misc.
- use Jest for unit testing (great for React)
- repurpose groups around features (because there needs to be a lot of collaboration and communication between frontend and backend for each feature, would overcomplicate and draw out the process)
        - though if issues come up specifically for frontend or backend, the originally designated pairs can look into it
- "as a user I don't want other users to be able to delete my diary posts so that I can have control over my posts and information"
- "as a user I want to be able to comment on other's diary posts and have others comment on my diary posts so that I can interact with other users"

**Product Backlog:**
1. [Bug fix: Fix Heroku deployment] As a typical user I want to be able to remotely access the web app in my browser via a fixed url so that I don't have to deploy it locally (I do not have the means or knowledge to do this).
2. [Testing: Develop unit testing for user authentication] [Last week's lab] As a product developer I want to have a built-in unit test using a React testing framework for user authentication so that I can quickly, easily, and thoroughly verify that the user authentication functionality is working correctly.
3. [Testing: Develop unit testing for user profile page] [Last week's lab] As a product developer I want to have a built-in unit test using a React testing framework for the user profile page so that I can quickly, easily, and thoroughly verify that the front-end components of the user profile page are working correctly.
4. [Testing: Develop higher level testing] [This week's lab] As a product developer I want to have acceptance criteria tests to refer to when reviewing product deliverables so that I can quickly, easily, and thoroughly verify that the user experience adheres to the corresponding user stories.
5. [Funtionality: Connect user database to user profile page (replace hard code)] As a typical user I want to log into my user profile and see the user profile page accurately reflect recent changes in my profile so that my user profile remains up to date.
6. [Functionality: Connect blog post music field to Spotify API] As a typical user creating a diary post I want to be able to search for and select the music I am basing my post around from Spotify's collection so that it seems more official and standardized (idk).
7. [Bug fix: blog post privileges] As a typical user I don't want other users to be able to delete my diary posts so that I can retain control over my posts and information.
8. [Functionality: blog post comments] As a typical user I want to be able to comment on others' diary posts and have others comment on my diary posts so that I can interact with other web app users.
9. [Functionality: music dump] tbd later
