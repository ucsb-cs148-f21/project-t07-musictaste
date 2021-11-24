import React, { useState, useEffect } from "react";
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
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
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

const MusicPlaylistCards = ({ musicplaylist, setCurrentId }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
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
