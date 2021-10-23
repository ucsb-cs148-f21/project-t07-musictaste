Project: Music Taste WebApp
Mentor: Alan, Nagarjun

Meeting Time: Lecture 04, Monday October 11

Type of meeting: Storytime/Sprint Planning

Team: Brandon Son [X], Karanina (Laszlo) Zim [X], Karanveer (KB) Benipal [X], Kevin Tran [X]

Scribed Discussion:
- first meeting with all four members present! (kevin is out of quarantine)
- completed first storytime, cleared up ambiguities about project and we are now all on the same page about the product
- sprint planning on kanban board (agreed on tasks for upcoming week)

MVP: As a new user, I want to be able to create a user profile [and add a song to a music dump].
**Emphasis on very simple UI**

User Profile Features: (need to differentiate from Spotify profile)
- custom status (based on music)
- friends
- playlists that this user has contributed to (github-esque)
- concerts attended (+ photos? like a social media post?)

Music Dump (collaborative playlist) Potential Features:
- time parameter - users can choose how long to have the playlist open for writing (can be a daily music dump, or can be a long-term)
- diary feature - contributors can add notes/comments/forum post to a music dump (similar in concept to soundcloud comments which are tacked)
- some sort of means of preventing too many songs from being added
  - upvotes/downvotes? (like scp)
  - user roles with different privileges
- export playlists to Spotify?
  - what if playlist is changed? only allow this for closed playlists?
  - does each user export the playlist individually? or does one user (the creator)
    export it initially (and update it from the web app when they desire/automatically and subsequent users are directed by the website to the master playlist (under the creator's
    account) and can follow it?
- likes/follows?

---

Meeting notes:

Kevin's ideas: better collaborative playlists (bc this is a side feature of Spotify, but not really the main focus of Spotify)
- User profiles
- playlist that this person has contributed to (github-esque)
- roles and permissions of who is allowed to edit playlist and how
- perhaps NOT aim this towards Spotify users (bc too redundant with Spotify collaborative playlists, plus expand audience into more than just Spotify users, )

Laszlo idea:
- up/downvotes on songs in playlists to verify songs?? (too complicated)

Karanveer:
- localize this to UCSB to make it unique

What does the Spotify API even allow? Can our app create playlists on Spotify?

Music dump (with time parameter up to user) with music diary? User profile
- look into exporting this playlist into Spotify (and others?? idk)

GOAL: very simple UI

MVP: user profile (apple id or google or spotify authentication) AND/OR simple write-only user playlist
- user profile includes top streamed song from spotify API

GV:
User profile:
- custom status
- public/private playlist
- friends
- concerts went to recently (+ pictures?)
