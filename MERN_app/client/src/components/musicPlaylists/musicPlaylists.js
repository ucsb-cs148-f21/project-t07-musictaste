import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./stlyes";
import MusicPlaylist from "./musicPlaylistCards/MusicPlayist/musicPlaylist";
import MusicPlaylistCards from "./musicPlaylistCards/musicPlaylistCard";
const MusicPlaylists = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      <MusicPlaylistCards />
    </Grid>
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
