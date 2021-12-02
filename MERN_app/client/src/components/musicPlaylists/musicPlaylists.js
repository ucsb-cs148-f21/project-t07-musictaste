import React from "react";
import {
  Grid,
  Button,
  CircularProgress,
  Grow,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";
import MusicPlaylistCards from "./musicPlaylistCards/musicPlaylistCard";

const MusicPlaylists = ({ setCurrentId }) => {
  const musicplaylists = useSelector((state) => state.musicPlaylists.playlists);
  const classes = useStyles();
  const history = useHistory();
  const openForm = () => history.push(`/CreateMusicPlaylist/Form`);
  console.log(musicplaylists);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {musicplaylists.map((musicplaylist) => (
            <Grid key={musicplaylist._id} item xs={12} md={6}>
              <MusicPlaylistCards
                musicplaylist={musicplaylist}
                setCurrentId={setCurrentId}
              />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" onClick={openForm}>
          FORM
        </Button>
      </Container>
    </Grow>
  );
};

export default MusicPlaylists;

// const Posts = ({ setCurrentId }) => {
//   const { posts, isLoading } = useSelector((state) => state.posts);
//   const classes = useStyles();

//   if (!posts.length && !isLoading) return 'No posts';

//   return (
//     isLoading ? <CircularProgress /> : (
//       <Grid className={classes.container} container alignItems="stretch" spacing={3}>
//         {posts?.map((post) => (
//           <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
//             <Post post={post} setCurrentId={setCurrentId} />
//           </Grid>
//         ))}
//       </Grid>
//     )
//   );
// };
