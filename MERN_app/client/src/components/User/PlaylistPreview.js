import React from "react";
import PictureUploader from "./PictureUploader";
import styles from "./PlaylistPreview.css";

const PlaylistPreview = (props) => {
  const formatType = props.isPlaylist ? "playlist": "playlistLarge";
  const imageType = props.isPlaylist ? "cover": "coverLarge";
  const textType = props.isPlaylist ? "title": "titlelarge";
  return (
      <div class={formatType}>
        <img src={props.imagesource} onClick={props.click} class={imageType} />
        <p class={textType}>{props.playlistname}</p>
      </div>
  );
};

export default PlaylistPreview;
