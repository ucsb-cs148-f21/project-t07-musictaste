import React, { useState, useRef } from "react";
import { Typography, TextField, Button, Paper } from "@material-ui/core/";
import { useDispatch } from "react-redux";

import { commentPlaylist } from "../../../../actions/musicPlaylist";
import useStyles from "./styles";

const CommentSection = ({ playlist }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState(playlist?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(
      commentPlaylist(`${user?.result?.name}: ${comment}`, playlist._id)
    );

    setComment("");
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <h1>Comment Section</h1>
    <div>
      <div className={classes.commentsOuterContainer}>
      {user?.result.name && (
          <Paper className={classes.segment}>
          <div style={{ width: "100%" }}>
            <Typography gutterBottom variant="h6">
              Write a comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <br />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment.length}
              color="primary"
              variant="contained"
              onClick={handleComment}
            >
              Comment
            </Button>
          </div>
          </Paper>
        )}
      <Paper className={classes.segment}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments?.map((c, i) => (
            <Paper className={classes.comment} variant="outlined">
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(": ")[0]}</strong>
              {c.split(":")[1]}
            </Typography>
            </Paper>
          ))}
          <div ref={commentsRef} />
        </div>
      </Paper>
      </div>
    </div>
  );
};

export default CommentSection;
