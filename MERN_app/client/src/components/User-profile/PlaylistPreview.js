import React from "react";
import PictureUploader from "./PictureUploader";
import styles from "./PlaylistPreview.css"


export default class PlaylistPreview extends React.Component {
    playlistClicked() {
        console.log('hello world')
    }
    render() {
        return (
          <div class="playlist" onClick={this.playlistClicked}>
              
          </div>
        );
      }
}