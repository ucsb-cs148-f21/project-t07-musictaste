Feature: Create diary post

Description: As a user, I want to create a diary post of a piece of music annotated with a note, tags, and a photo so that I can capture a moment in memory associated with a significant piece of music.

Scenario: Create a diary post
	Given: I am logged into my account
	When: I create a new diary post -- by selecting a piece of music to associate to the post, writing a note, adding tags (optional), and uploading an image (optional)
	Then: The diary post will be displayed on the community home page / the home pages of my followers.
And: I have the ability to edit or delete my post, but no other users have this privilege.
And: (potential feature) I can toggle the privacy and visibility settings of my post to determine which users can see and comment on my post (perhaps turn this into a feature of its own if we decide to develop it)
