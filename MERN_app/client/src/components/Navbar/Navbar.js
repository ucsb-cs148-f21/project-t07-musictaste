import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Typography, Toolbar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import musicIcon from "../../images/musicIcon.png";
import avataricon from "../../images/avataricon.jpg";
const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    setUser(null);
  };
  
  const openUser = () => history.push(`/users/${user?.result?._id}`);
  // Need to handle when user is null -> lead to 404 error 
  const blog = () => {  
    history.push("/posts");
  };
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <AppBar className={classes.appBar} position="static" color="inherit" elevation="5" square={false}>
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Music Playlist
        </Typography>
        <img
          className={classes.image}
          src={musicIcon}
          alt="musicIcon"
          height="60"
        />
      </div>
      <Button
        variant="contained"
        className={classes.buttons}
        // color="secondary"
        onClick={blog}
      >
        Blogs
      </Button>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            {/* <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar> */}
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.buttons}
              // color="secondary"
              onClick={logout}
            >
              logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            className={classes.buttons}
            // color="primary"
          >
            Sign In
          </Button>
        )}
        <Avatar
          src={avataricon}
          variant="contained"
          onClick = {openUser}
        >
          User Profile
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
