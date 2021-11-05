Feature: Upload new profile picture

Description: As a user, I want to upload a photo to set or update my account profile picture so that I can have a personalized icon to represent my profile.

Scenario: Upload new profile picture
	Given: I am logged into my account
	When: I upload a valid image file (on the user profile page)
	Then: My profile picture will be updated and the new image will be displayed everywhere that my icon is.
And: Other users can also see my new profile picture. When I log out and back in, my new profile picture will still be visible; changes will not be reverted.
