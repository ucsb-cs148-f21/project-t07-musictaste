import React from "react";
import PictureUploader from "./PictureUploader";
import styles from "./PlaylistPreview.css";

const PlaylistPreview = (props) => {
  return (
    <div class="playlist">
      <img src={props.imagesource} class="cover" />
      <p class="title">{props.playlistname}</p>
    </div>
  );
};

export default PlaylistPreview;
