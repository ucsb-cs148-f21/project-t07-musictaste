import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Collapse,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { deletePlaylist, likePlaylist } from "../../../actions/musicPlaylist";

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

const MusicPlaylistCards = ({ musicplaylist, setCurrentId }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const Likes = () => {
    if (musicplaylist.likes.length > 0) {
      return musicplaylist.likes.find(
        (musicplaylist) =>
          musicplaylist === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {musicplaylist.likes.length > 2
            ? `You and ${musicplaylist.likes.length - 1} others`
            : `${musicplaylist.likes.length} like${
                musicplaylist.likes.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{musicplaylist.likes.length}{" "}
          {musicplaylist.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };
  const openPost = (e) => {
    history.push(`/musicPlaylists/${musicplaylist._id}`);
  };
  return (
    <Card className={classes.card}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardHeader
          title={musicplaylist.title}
          subheader={moment(musicplaylist.createdAt).fromNow()}
        />
        <CardMedia
          className={classes.media}
          image={musicplaylist.selectedMainFile}
          alt="Playlist"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {musicplaylist.message}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePlaylist(musicplaylist._id))}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === musicplaylist?.creator ||
          user?.result?._id === musicplaylist?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePlaylist(musicplaylist._id))}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        )}
      </CardActions>
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
          <Typography paragraph>Creator: {musicplaylist.name}</Typography>
          <Typography paragraph>Contributors:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MusicPlaylistCards;
