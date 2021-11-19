import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MusicPlaylistCards = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const history = useHistory();
  const classes = useStyles();
  const openPost = (e) => {
    history.push(`/musicPlaylist`);
  };
  return (
    <Card className={classes.card}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardHeader title="Test Music Playlist" subheader="November 17, 2021" />
        <CardMedia
          component="img"
          height="194"
          image="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          alt="Playlist"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is our test music Playlist.
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Creators:</Typography>
          <Typography paragraph>
            I'm going to have to make a list of the creators here and possibly a
            link to their profiles from here. That is going to be difficult and
            I'm hoping someone can take this on.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MusicPlaylistCards;
