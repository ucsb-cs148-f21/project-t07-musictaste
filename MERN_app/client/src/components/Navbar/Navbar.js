import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Button,
  Typography,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
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
    <AppBar
      className={classes.appBar}
      position="static"
      color="inherit"
      elevation="5"
      square={false}
    >
      {user ? (
        <>
          <div className={classes.brandContainer}>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    {...bindTrigger(popupState)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={openUser}>Profile</MenuItem>
                    <MenuItem onClick={blog}>Blogs</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <Typography
              component={Link}
              to="/"
              className={classes.heading}
              variant="h2"
              align="center"
            >
              Music Playlist
            </Typography>
            {/* <img
              className={classes.image}
              src={musicIcon}
              alt="musicIcon"
              height="60"
            /> */}
          </div>
          <Toolbar className={classes.toolbar}>
            <div className={classes.profile}>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
            </div>
          </Toolbar>
        </>
      ) : (
        <>
          <div className={classes.brandContainer}>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    {...bindTrigger(popupState)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={blog}>Blogs</MenuItem>
                    <MenuItem component={Link} to="/auth" variant="contained">
                      Sign In
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <Typography
              component={Link}
              to="/"
              className={classes.heading}
              variant="h2"
              align="center"
            >
              Music Playlist
            </Typography>
            {/* <img
              className={classes.image}
              src={musicIcon}
              alt="musicIcon"
              height="60"
            /> */}
          </div>
        </>
      )}
    </AppBar>
  );
};

export default Navbar;
