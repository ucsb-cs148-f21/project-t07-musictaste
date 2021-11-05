Feature: Export playlist to Spotify
Rule: Only a music dump’s creator/owner can export the playlist to Spotify (under their account). Other users who would like to listen to the music dump via Spotify will be directed to the preexisting playlist link (I think the API also supports following it) if the creator/owner has already created it, and given the option to request the creator/owner to export it if not.

Description: As a Spotify user and MusicTaste app user and the creator/owner of a music dump, I can export the playlist to my Spotify account so that myself and other users can stream the playlist through Spotify.

Scenario:
	Given: I am logged into my web app account and it has been linked to my Spotify account with the appropriate scopes. I am viewing a music dump that I am the creator or owner of.
	When: I attempt to export the playlist to Spotify
	Then: The playlist is exported to my account (a playlist containing the songs in the music dump is created under the user’s Spotify account).
And: The Spotify playlist’s publicity setting reflects that of the music dump’s publicity setting on the web app.

Description: As a Spotify user and MusicTaste app user following a music dump that I did not create and do not own, I can locate the exported music dump, so that I can actually stream the music through Spotify.

Scenario: Playlist has been exported by creator/owner
	Given: I am logged into my web app account and it has been linked to my Spotify account with the appropriate scopes. I am viewing a music dump that I am not the creator or owner of. The music dump has been exported by its creator/owner to their Spotify account.
	When: I attempt to export the playlist to Spotify
	Then: My Spotify account likes/follows the playlist that has been created under the creator/owner’s Spotify account. The playlist now appears in my Spotify library.

Scenario: Playlist has not been exported by creator/owner
	Given: I am logged into my web app account and it has been linked to my Spotify account with the appropriate scopes. I am viewing a music dump that I am not the creator or owner of. The music dump has not been exported by its creator/owner to their Spotify account.
	When: I attempt to export the playlist to Spotify
	Then: I am given the option to notify the creator/owner that I would be interested in them exporting the music dump to Spotify (this will appear in their notifications)
And: (potential feature) If/when the creator/owner exports the playlist, I am notified and given the option to follow the playlist (see the above scenario) (perhaps turn this into a feature of its own if we decide to develop it)
