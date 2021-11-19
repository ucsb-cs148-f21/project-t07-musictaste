import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
// import Form from "../Form/Form";

import FormUserProfile from "./FormUserProfile";
// import musicDiary from "./musicDiary";
import PictureUploader from "./PictureUploader";
import MusicPlaylist from "../musicPlaylists/musicPlaylistCards/MusicPlayist/musicPlaylist";
import PlaylistPreview from "./PlaylistPreview";
import { ClassNames } from "@emotion/react";

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
      <Grid 
        container 
        className={ClassNames.gridContainer}
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item container direction="column" xs={12} md={8} spacing={1}>
          <Grid item >
            <Typography variant="h4" >Music Diary</Typography>
          </Grid>
          <Grid item >
            <Paper>
              <MusicPlaylist />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormUserProfile /> 
        </Grid>
      </Grid>
    </div >
  </Container>
);

export default User;
