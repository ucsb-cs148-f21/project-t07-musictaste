import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
// import Form from "../Form/Form";

import FormUserProfile from "./FormUserProfile";
// import musicDiary from "./musicDiary";
import PictureUploader from "./PictureUploader";
import MusicPlaylist from "../musicPlaylists/musicPlaylistCards/MusicPlayist/musicPlaylist";
import PlaylistPreview from "./PlaylistPreview";

const User = () => (
  //const [currentId, setCurrentId] = useState(null);
  //const classes = useStyles();
  //const dispatch = useDispatch();
  //useEffect(() => {
  //dispatch(getPosts());
  //}, [currentId, dispatch]);
  // return <div>user</div>;
  <Container>
    <div class="blocks">
      <MusicPlaylist width="50%" />
      <FormUserProfile /> 
    </div >
  </Container>
);

export default User;
